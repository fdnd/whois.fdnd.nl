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
  let first = Number(url.searchParams.get("first") ?? 10);
  let skip = Number(url.searchParams.get("skip") ?? 0);
  let direction = url.searchParams.get("direction") === "ASC" ? "ASC" : "DESC";
  let orderBy = (url.searchParams.get("orderBy") ?? "publishedAt") + "_" + direction;
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
export {
  GET
};
