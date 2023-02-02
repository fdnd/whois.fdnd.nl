import { GraphQLClient, gql } from "graphql-request";
import { H as HYGRAPH_URL, a as HYGRAPH_KEY } from "../../../../../chunks/private.js";
const responseInit = {
  headers: {
    "content-type": "application/json",
    "cache-control": "public, max-age=3600"
  }
};
const hygraph = new GraphQLClient(HYGRAPH_URL, {
  headers: { Authorization: `Bearer ${HYGRAPH_KEY}` }
});
async function GET({ url }) {
  const query = gql`
		query getSquads() {
			squads() {
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
