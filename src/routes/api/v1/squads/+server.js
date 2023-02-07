import { GraphQLClient, gql } from 'graphql-request';
import { HYGRAPH_KEY, HYGRAPH_URL, HYGRAPH_URL_HIGH_PERFORMANCE } from '$env/static/private';

import { responseInit } from '$lib/server/responseInit';

const hygraph = new GraphQLClient(HYGRAPH_URL, {
	headers: { Authorization: `Bearer ${HYGRAPH_KEY}` }
});

export async function GET({ url }) {
	// let first = Number(url.searchParams.get('first') ?? 10);
	// let skip = Number(url.searchParams.get('skip') ?? 0);
	// let direction = url.searchParams.get('direction') === 'ASC' ? 'ASC' : 'DESC';
	// let orderBy = (url.searchParams.get('orderBy') ?? 'publishedAt') + '_' + direction;

	const query = gql`
		query squadQuery() {
			squads() {
				id
				name
				slug
				cohort
				website
			}
			squadsConnection {
				pageInfo {
					hasNextPage
					hasPreviousPage
					pageSize
				}
			}
		}
	`;

	const data = await hygraph.request(query /*, { first, skip, orderBy }*/);
	return new Response(JSON.stringify(data), responseInit);
}
