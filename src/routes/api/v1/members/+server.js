import { GraphQLClient, gql } from 'graphql-request';
import { HYGRAPH_KEY, HYGRAPH_URL_HIGH_PERFORMANCE } from '$env/static/private';

import { responseInit } from '$lib/server/responseInit';

const hygraph = new GraphQLClient(HYGRAPH_URL_HIGH_PERFORMANCE, {
	headers: {
		Authorization: `Bearer ${HYGRAPH_KEY}`
	}
});

export async function GET({ url }) {
	let first = Number(url.searchParams.get('first') ?? 10);
	let skip = Number(url.searchParams.get('skip') ?? 0);
	let direction = url.searchParams.get('direction') === 'ASC' ? 'ASC' : 'DESC';
	let orderBy = (url.searchParams.get('orderBy') ?? 'publishedAt') + '_' + direction;

	const query = gql`
		query getMembers($first: Int, $skip: Int, $orderBy: MemberOrderByInput) {
			members(first: $first, skip: $skip, orderBy: $orderBy) {
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
			membersConnection {
				pageInfo {
					hasNextPage
					hasPreviousPage
					pageSize
				}
			}
		}
	`;
	const data = await hygraph.request(query, { first, skip, orderBy });
	return new Response(JSON.stringify(data), responseInit);
}
