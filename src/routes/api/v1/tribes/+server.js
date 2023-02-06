import { GraphQLClient, gql } from 'graphql-request';
import { HYGRAPH_KEY, HYGRAPH_URL } from '$env/static/private';

const responseInit = {
	headers: {
		'content-type': 'application/json',
		'cache-control': 'public, max-age=3600',
		'Access-Control-Allow-Credentials': 'true',
    	'Access-Control-Allow-Origin': '*',
    	'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
    	'Access-Control-Allow-Headers':  'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
	}
};

// place in .env later
const HYGRAPH_URL_HIGH_PERFORMANCE  = 'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/cld1s02hl0aaa01tbexz632ph/master'
const hygraph = new GraphQLClient(HYGRAPH_URL_HIGH_PERFORMANCE, {
	headers: { Authorization: `Bearer ${HYGRAPH_KEY}` }
});

export async function GET({ url }) {
	// let first = Number(url.searchParams.get('first') ?? 10);
	// let skip = Number(url.searchParams.get('skip') ?? 0);
	// let direction = url.searchParams.get('direction') === 'ASC' ? 'ASC' : 'DESC';
	// let orderBy = (url.searchParams.get('orderBy') ?? 'publishedAt') + '_' + direction;

	const query = gql`
		query getTribes() {
			tribes() {
				slug
				name
				description {
					html
				}
				avatar
				gitHubUrl
				website
				squads {
					slug
					name
					cohort
					website
				}
			
			}
			tribesConnection {
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
