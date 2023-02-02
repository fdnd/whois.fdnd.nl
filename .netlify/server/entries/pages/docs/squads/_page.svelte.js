import { c as create_ssr_component } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>Squads</h2>

<h3>GET</h3>
<p>Een overzicht van alle <em>squads</em> in whois.fdnd.nl</p>

<h4>Voorbeeld Request:</h4>

<a href="${"/api/v1/squads"}">/api/v1/squads</a>`;
});
export {
  Page as default
};
