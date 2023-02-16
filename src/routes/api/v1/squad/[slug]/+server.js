import { GraphQLClient, gql } from 'graphql-request';
import { HYGRAPH_KEY, HYGRAPH_URL_HIGH_PERFORMANCE } from '$env/static/private';

import { responseInit } from '$lib/server/responseInit';

const hygraph = new GraphQLClient(HYGRAPH_URL_HIGH_PERFORMANCE, {
	headers: { Authorization: `Bearer ${HYGRAPH_KEY}` }
});

export async function GET({ params, url }) {
	const slug = params.slug;
	let direction = url.searchParams.get('direction') === 'ASC' ? 'ASC' : 'DESC';
	let orderBy = (url.searchParams.get('orderBy') ?? 'publishedAt') + '_' + direction;

	const query = gql`
		query getSquad($slug: String!, $orderBy: MemberOrderByInput) {
			squad(where: { slug: $slug }) {
				id
				name
				slug
				cohort
				website
				members(first: 100, orderBy: $orderBy) {
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
				}
			}
		}
	`;
	const data = await hygraph.request(query, { slug, orderBy });
	return new Response(JSON.stringify(data), responseInit);
}
