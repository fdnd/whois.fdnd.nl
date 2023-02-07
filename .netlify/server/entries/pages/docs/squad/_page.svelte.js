import { c as create_ssr_component } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h3.svelte-qlpifk:not(:first-of-type),h4.svelte-qlpifk,ul.svelte-qlpifk{margin-top:1rem}ul.svelte-qlpifk{padding:0;list-style:none}li.svelte-qlpifk{margin-bottom:0.4rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h2>Squad</h2>

<h3 class="${"svelte-qlpifk"}">GET</h3>

<p>Selecteer één <em>squad</em>, met alle <em>members</em> in whois.fdnd.nl op basis van een meegestuurde
	url parameter met het id.
</p>

<h4 class="${"svelte-qlpifk"}">Url parameters:</h4>
<ul class="${"svelte-qlpifk"}"><li class="${"svelte-qlpifk"}"><strong>id</strong>, het id van de te selecteren <em>squad</em>.
		<br>(Vind jouw id door de lijst met squads te gebruiken!)
	</li></ul>

<h4 class="${"svelte-qlpifk"}">Voorbeeld Request:</h4>

<ul class="${"svelte-qlpifk"}"><li class="${"svelte-qlpifk"}"><a href="${"/api/v1/squad?id=cldcspecf0z0o0bw59l8bwqim"}">/api/v1/squad?id=cldcspecf0z0o0bw59l8bwqim</a></li></ul>

<h3 class="${"svelte-qlpifk"}">PUT</h3>

<p>work in progress</p>

<h3 class="${"svelte-qlpifk"}">PATCH</h3>

<p>work in progress</p>

<h3 class="${"svelte-qlpifk"}">[slug]</h3>

<p>work in progress</p>`;
});
export {
  Page as default
};
