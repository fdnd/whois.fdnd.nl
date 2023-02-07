import { GraphQLClient, gql } from "graphql-request";
import { b as HYGRAPH_URL, a as HYGRAPH_KEY } from "../../../../../chunks/private.js";
const responseInit = {
  headers: {
    "content-type": "application/json",
    "cache-control": "public, max-age=0",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
    "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  }
};
const hygraph = new GraphQLClient(HYGRAPH_URL, {
  headers: { Authorization: `Bearer ${HYGRAPH_KEY}` }
});
async function GET({ url }) {
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
  const data = await hygraph.request(
    query
    /*, { first, skip, orderBy }*/
  );
  return new Response(JSON.stringify(data), responseInit);
}
export {
  GET
};
