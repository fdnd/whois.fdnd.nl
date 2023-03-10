import { GraphQLClient, gql } from 'graphql-request';
import { HYGRAPH_KEY, HYGRAPH_URL } from '$env/static/private';

import { htmlToSlateAST } from '@graphcms/html-to-slate-ast';

// See form actions: https://kit.svelte.dev/docs/form-actions
export const actions = {
	default: async ({ request }) => {
		const fdata = await request.formData();
		const id = fdata.get('id');
		const slug = fdata.get('slug');
		const name = fdata.get('name');
		const prefix = fdata.get('prefix');
		const surname = fdata.get('surname');
		const nickname = fdata.get('nickname');
		const avatar = fdata.get('avatar');
		const gitHubHandle = fdata.get('gitHubHandle');
		const bio = await htmlToSlateAST(fdata.get('bio'));
		const website = fdata.get('website');
		const colour = fdata.get('colour');

		const hygraph = new GraphQLClient(HYGRAPH_URL, {
			headers: { Authorization: `Bearer ${HYGRAPH_KEY}` }
		});

		const mutation = gql`
			mutation updateMember(
				$id: ID!
				$slug: String!
				$name: String!
				$prefix: String!
				$surname: String!
				$nickname: String!
				$avatar: String!
				$gitHubHandle: String!
				$bio: RichTextAST!
				$website: String!
				$colour: Hex!
			) {
				updateMember(
					where: { id: $id }
					data: {
						slug: $slug
						name: $name
						prefix: $prefix
						surname: $surname
						nickname: $nickname
						avatar: $avatar
						gitHubHandle: $gitHubHandle
						bio: { children: $bio }
						website: $website
						colour: { hex: $colour }
					}
				) {
					id
				}
			}
		`;
		const data = await hygraph.request(mutation, {
			id,
			slug,
			name,
			prefix,
			surname,
			nickname,
			avatar,
			gitHubHandle,
			bio,
			website,
			colour
		});

		// See publishing content: https://hygraph.com/docs/api-reference/content-api/content-stages
		const publication = gql`
			mutation publishMember($id: ID!) {
				publishMember(where: { id: $id }, to: PUBLISHED) {
					id
				}
			}
		`;
		const pubVars = { id: data.updateMember.id };
		const pubData = await hygraph.request(publication, pubVars);

		return pubData;
	}
};
