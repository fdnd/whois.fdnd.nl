import { GraphQLClient } from "graphql-request";
import { H as HYGRAPH_URL, a as HYGRAPH_KEY } from "../../../../../../chunks/private.js";
import "../../../../../../chunks/index.js";
const responseInit = {
  headers: {
    "content-type": "application/json",
    "cache-control": "public, max-age=3600"
  }
};
new GraphQLClient(HYGRAPH_URL, {
  headers: { Authorization: `Bearer ${HYGRAPH_KEY}` }
});
async function GET({ url }) {
  return new Response(JSON.stringify({ working: null }), responseInit);
}
export {
  GET
};
