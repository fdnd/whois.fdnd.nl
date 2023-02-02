import { c as create_ssr_component, b as subscribe, d as add_attribute } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-hk8ptx{max-width:50rem;background:var(--c-green);color:var(--c-blue);padding:var(--component-padding);border-radius:var(--rounded)}label.svelte-hk8ptx{margin:0.2rem 0;display:block;font-size:1.6rem}textarea.svelte-hk8ptx,input[type='text'].svelte-hk8ptx,input[type='submit'].svelte-hk8ptx{font-family:monospace;padding:var(--component-padding);width:100%;font-size:2rem;background-color:#fff4;border:1px solid currentColor;border-radius:var(--rounded);color:var(--c-blue)}textarea.svelte-hk8ptx{height:8em}textarea.svelte-hk8ptx:focus,input[type='text'].svelte-hk8ptx:focus{outline:none !important;box-shadow:0 0 10px var(--c-blue)}input[type='text'].svelte-hk8ptx{height:2em}input[type='submit'].svelte-hk8ptx{margin-top:1rem;background:var(--c-blue);color:var(--c-green);border-radius:var(--pilled)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let id;
  let slug;
  let name;
  let prefix;
  let surname;
  let nickname;
  let avatar;
  let gitHubHandle;
  let website;
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<section class="${"svelte-hk8ptx"}"><h2>Member aanpassen</h2>
	<form method="${"post"}"><label for="${"id"}" class="${"svelte-hk8ptx"}">id:</label>
		<input type="${"text"}" name="${"id"}" id="${"id"}" placeholder="${"Paste je id"}" class="${"svelte-hk8ptx"}"${add_attribute("value", id, 0)}>

		<label for="${"slug"}" class="${"svelte-hk8ptx"}">slug:</label>
		<input type="${"text"}" name="${"slug"}" id="${"slug"}" placeholder="${"..."}" class="${"svelte-hk8ptx"}"${add_attribute("value", slug, 0)}>

		<label for="${"name"}" class="${"svelte-hk8ptx"}">name:</label>
		<input type="${"text"}" name="${"name"}" id="${"name"}" placeholder="${"..."}" class="${"svelte-hk8ptx"}"${add_attribute("value", name, 0)}>

		<label for="${"prefix"}" class="${"svelte-hk8ptx"}">prefix:</label>
		<input type="${"text"}" name="${"prefix"}" id="${"prefix"}" placeholder="${"..."}" class="${"svelte-hk8ptx"}"${add_attribute("value", prefix, 0)}>

		<label for="${"surname"}" class="${"svelte-hk8ptx"}">surname:</label>
		<input type="${"text"}" name="${"surname"}" id="${"surname"}" placeholder="${"..."}" class="${"svelte-hk8ptx"}"${add_attribute("value", surname, 0)}>

		<label for="${"nickname"}" class="${"svelte-hk8ptx"}">nickname:</label>
		<input type="${"text"}" name="${"nickname"}" id="${"nickname"}" placeholder="${"..."}" class="${"svelte-hk8ptx"}"${add_attribute("value", nickname, 0)}>

		<label for="${"avatar"}" class="${"svelte-hk8ptx"}">avatar:</label>
		<input type="${"text"}" name="${"avatar"}" id="${"avatar"}" placeholder="${"..."}" class="${"svelte-hk8ptx"}"${add_attribute("value", avatar, 0)}>

		<label for="${"gitHubHandle"}" class="${"svelte-hk8ptx"}">gitHubHandle:</label>
		<input type="${"text"}" name="${"gitHubHandle"}" id="${"gitHubHandle"}" placeholder="${"..."}" class="${"svelte-hk8ptx"}"${add_attribute("value", gitHubHandle, 0)}>

		<label for="${"website"}" class="${"svelte-hk8ptx"}">website:</label>
		<input type="${"text"}" name="${"website"}" id="${"website"}" placeholder="${"..."}" class="${"svelte-hk8ptx"}"${add_attribute("value", website, 0)}>

		<label for="${"bio"}" class="${"svelte-hk8ptx"}">bio:</label>
		<textarea name="${"bio"}" id="${"bio"}" cols="${"30"}" rows="${"10"}" placeholder="${"..."}" class="${"svelte-hk8ptx"}">${""}</textarea>
		<input type="${"submit"}" value="${"Opslaan"}" class="${"svelte-hk8ptx"}"></form>
</section>`;
});
export {
  Page as default
};
