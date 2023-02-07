import { GraphQLClient, gql } from 'graphql-request';
import { HYGRAPH_KEY, HYGRAPH_URL_HIGH_PERFORMANCE } from '$env/static/private';

import { responseInit } from '$lib/server/responseInit';

const hygraph = new GraphQLClient(HYGRAPH_URL_HIGH_PERFORMANCE, {
	headers: { Authorization: `Bearer ${HYGRAPH_KEY}` }
});

export async function GET({ params }) {
	const slug = params.slug;
	const query = gql`
		query getSquad($slug: String!) {
			squad(where: { slug: $slug }) {
				id
				name
				slug
				cohort
				website
				members(first: 100) {
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
				}
			}
		}
	`;
	const data = await hygraph.request(query, { slug });
	return new Response(JSON.stringify(data), responseInit);
}
