import { GraphQLClient } from "graphql-request";
import { H as HYGRAPH_URL_HIGH_PERFORMANCE, a as HYGRAPH_KEY } from "../../../../../../chunks/private.js";
import "../../../../../../chunks/index.js";
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
new GraphQLClient(HYGRAPH_URL_HIGH_PERFORMANCE, {
  headers: { Authorization: `Bearer ${HYGRAPH_KEY}` }
});
async function GET({ url }) {
  return new Response(JSON.stringify({ working: null }), responseInit);
}
export {
  GET
};
