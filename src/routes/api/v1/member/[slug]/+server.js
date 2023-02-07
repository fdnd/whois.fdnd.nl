import { GraphQLClient, gql } from 'graphql-request';
import { HYGRAPH_KEY, HYGRAPH_URL_HIGH_PERFORMANCE } from '$env/static/private';

import { page } from '$app/stores';

const responseInit = {
	headers: {
		'content-type': 'application/json',
		'cache-control': 'public, max-age=0',
		'Access-Control-Allow-Credentials': 'true',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
		'Access-Control-Allow-Headers':
			'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
	}
};

const hygraph = new GraphQLClient(HYGRAPH_URL_HIGH_PERFORMANCE, {
	headers: { Authorization: `Bearer ${HYGRAPH_KEY}` }
});

// adhv. https://www.jefmeijvis.com/blog/006-sveltekit-api-endpoints?ref=redirect
export async function GET({ url }) {
	/*
	let slug = $page.params.slug;

	console.log(slug);
	const query = gql`
		query getMember($id: ID!) {
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
  */
	return new Response(JSON.stringify({ working: null }), responseInit);
}
