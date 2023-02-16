import { GraphQLClient, gql } from 'graphql-request';
import { HYGRAPH_KEY, HYGRAPH_URL_HIGH_PERFORMANCE } from '$env/static/private';

import { responseInit } from '$lib/server/responseInit';

const hygraph = new GraphQLClient(HYGRAPH_URL_HIGH_PERFORMANCE, {
	headers: { Authorization: `Bearer ${HYGRAPH_KEY}` }
});

export async function GET({ params }) {
	const slug = params.slug;
	const query = gql`
		query getMember($slug: String!) {
			member(where: { slug: $slug }) {
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
			}
		}
	`;
	const data = await hygraph.request(query, { slug });
	return new Response(JSON.stringify(data), responseInit);
	// return new Response(JSON.stringify({ working: null }), responseInit);
}
