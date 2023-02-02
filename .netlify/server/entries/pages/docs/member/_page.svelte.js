import { c as create_ssr_component } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h3.svelte-qlpifk:not(:first-of-type),h4.svelte-qlpifk,ul.svelte-qlpifk{margin-top:1rem}ul.svelte-qlpifk{padding:0;list-style:none}li.svelte-qlpifk{margin-bottom:0.4rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h2>Member</h2>

<h3 class="${"svelte-qlpifk"}">GET</h3>

<p>Selecteer één <em>member</em> in whois.fdnd.nl op basis van een meegestuurde url parameter met het
	id.
</p>

<h4 class="${"svelte-qlpifk"}">Url parameters:</h4>
<ul class="${"svelte-qlpifk"}"><li class="${"svelte-qlpifk"}"><strong>id</strong>, het id van de te selecteren <em>member</em>.
		<br>(Vind jouw id door de lijst met members te gebruiken!)
	</li></ul>

<h4 class="${"svelte-qlpifk"}">Voorbeeld Request:</h4>

<ul class="${"svelte-qlpifk"}"><li class="${"svelte-qlpifk"}"><a href="${"/api/v1/member?id=cldczhjad16yh0av08jxscp0a"}">/api/v1/member?id=cldczhjad16yh0av08jxscp0a</a></li></ul>

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
