import { GraphQLClient, gql } from 'graphql-request';
import { HYGRAPH_KEY, HYGRAPH_URL_HIGH_PERFORMANCE } from '$env/static/private';

import { responseInit } from '$lib/server/responseInit';

const hygraph = new GraphQLClient(HYGRAPH_URL_HIGH_PERFORMANCE, {
	headers: { Authorization: `Bearer ${HYGRAPH_KEY}` }
});

export async function GET({ url }) {
	let id = url.searchParams.get('id') || '123';
	let direction = url.searchParams.get('direction') === 'ASC' ? 'ASC' : 'DESC';
	let orderBy = (url.searchParams.get('orderBy') ?? 'publishedAt') + '_' + direction;

	const query = gql`
		query getSquad($id: ID!, $orderBy: MemberOrderByInput) {
			squad(where: { id: $id }) {
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
					shouts(last: 5) {
						text
						author
					}
				}
			}
		}
	`;
	const data = await hygraph.request(query, { id, orderBy });
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
