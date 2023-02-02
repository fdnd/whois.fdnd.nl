import { c as create_ssr_component } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h4.svelte-1a9nm35{margin-top:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h2>Tribes</h2>

<h3>GET</h3>

<p>Een overzicht van alle <em>tribes</em> in whois.fdnd.nl</p>

<h4 class="${"svelte-1a9nm35"}">Voorbeeld Request:</h4>
<a href="${"/api/v1/tribes"}">/api/v1/tribes</a>`;
});
export {
  Page as default
};
