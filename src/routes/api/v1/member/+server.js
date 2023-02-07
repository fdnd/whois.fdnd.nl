import { GraphQLClient, gql } from 'graphql-request';
import { HYGRAPH_KEY, HYGRAPH_URL_HIGH_PERFORMANCE } from '$env/static/private';

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
				squads {
					name
					slug
					cohort
					website
				}
			}
		}
	`;
	const data = await hygraph.request(query, { id });
	return new Response(JSON.stringify(data), responseInit);
}

export async function POST({ request }) {
	const request_data = await request.json();
	let value = request_data.value;
	return new Response(JSON.stringify({ method: 'POST', working: 'no' }), responseInit);
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
