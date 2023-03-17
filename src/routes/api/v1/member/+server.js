import { GraphQLClient, gql } from 'graphql-request';
import { HYGRAPH_KEY, HYGRAPH_URL } from '$env/static/private';

import { htmlToSlateAST } from '@graphcms/html-to-slate-ast';
import { responseInit } from '$lib/server/responseInit';

const hygraph = new GraphQLClient(HYGRAPH_URL, {
	headers: { Authorization: `Bearer ${HYGRAPH_KEY}` }
});

export async function GET({ url }) {
	let id = url.searchParams.get('id') || '123';

	const query = gql`
		query getMember($id: ID!) {
			member(where: { id: $id }) {
				id
				slug
				name
				prefix
				surname
				role
				nickname
				avatar
				gitHubHandle
				bio {
					html
				}
				website
				colour {
					hex
				}
				squads {
					name
					slug
					cohort
					website
				}
				shouts {
					id
					author
					text
				}
			}
		}
	`;
	const data = await hygraph.request(query, { id });
	return new Response(JSON.stringify(data), responseInit);
}

export async function POST({ request }) {
	const formdata = await request.json();
	// Voor rich text velden moet de ruwe data omgerekend worden
	formdata.bio = await htmlToSlateAST(formdata.bio);

	const mutation = gql`
		mutation createMember(
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
			$squad: ID!
		) {
			createMember(
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
					squads: { connect: { id: $squad } }
				}
			) {
				id
			}
		}
	`;

	const data = await hygraph.request(mutation, { ...formdata }).catch(error => {
		return new Response(error, responseInit);
	});

	const publication = gql`
		mutation publishMember($id: ID!) {
			publishMember(where: { id: $id }, to: PUBLISHED) {
				id
			}
		}
	`;

	const pubData = await hygraph.request(publication, { id: data.createMember.id }).catch(error => {
		return new Response(error, responseInit);
	});

	return new Response(
		JSON.stringify({
			method: 'POST',
			working: 'yes',
			success: pubData.publishMember !== undefined,
			data: data,
			pubData: pubData
		}),
		responseInit
	);
}

export async function PUT({ request }) {
	const request_data = await request.json();
	let value = request_data.value;
	return new Response(JSON.stringify({ method: 'PUT', working: 'no' }), responseInit);
}

export async function PATCH({ request }) {
	const request_data = await request.json();
	let value = request_data.value;
	return new Response(JSON.stringify({ method: 'PATCH', working: 'no' }), responseInit);
}
