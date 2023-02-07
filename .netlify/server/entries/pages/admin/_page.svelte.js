import { c as create_ssr_component, b as subscribe, d as add_attribute } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-17u9ow6{max-width:50rem;background:var(--c-green);color:var(--c-blue);padding:var(--component-padding);border-radius:var(--rounded)}label.svelte-17u9ow6{margin:1rem 0 0.2rem;display:block;font-size:1.6rem}textarea.svelte-17u9ow6,input[type='text'].svelte-17u9ow6,input[type='submit'].svelte-17u9ow6{font-family:monospace;padding:var(--component-padding);width:100%;font-size:2rem;background-color:#fff4;border:1px solid currentColor;border-radius:var(--rounded);color:var(--c-blue)}textarea.svelte-17u9ow6{height:8em}textarea.svelte-17u9ow6:focus,input[type='text'].svelte-17u9ow6:focus{outline:none !important;box-shadow:0 0 10px var(--c-blue)}input[type='text'].svelte-17u9ow6{height:2em}input[type='submit'].svelte-17u9ow6{margin-top:1rem;background:var(--c-blue);color:var(--c-green);border-radius:var(--pilled);transition:.25s\n	}input[type='submit'].svelte-17u9ow6:hover{transform:scale(1.05)\n	}input[type='submit'].svelte-17u9ow6:focus{transform:scale(1.05);background:var(--c-green);color:var(--c-blue)}",
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
  return `<section class="${"svelte-17u9ow6"}"><h2>Member aanpassen</h2>
	<p>Het kan even duren voordat de aangepaste data in het CMS gepubliceerd wordt (~ 1 minuut)!</p>
	<form method="${"post"}"><label for="${"id"}" class="${"svelte-17u9ow6"}">id:</label>
		<input type="${"text"}" name="${"id"}" id="${"id"}" placeholder="${"Paste je id"}" class="${"svelte-17u9ow6"}"${add_attribute("value", id, 0)}>

		<label for="${"slug"}" class="${"svelte-17u9ow6"}">slug:</label>
		<input type="${"text"}" name="${"slug"}" id="${"slug"}" placeholder="${"..."}" class="${"svelte-17u9ow6"}"${add_attribute("value", slug, 0)}>

		<label for="${"name"}" class="${"svelte-17u9ow6"}">name:</label>
		<input type="${"text"}" name="${"name"}" id="${"name"}" placeholder="${"..."}" class="${"svelte-17u9ow6"}"${add_attribute("value", name, 0)}>

		<label for="${"prefix"}" class="${"svelte-17u9ow6"}">prefix:</label>
		<input type="${"text"}" name="${"prefix"}" id="${"prefix"}" placeholder="${"..."}" class="${"svelte-17u9ow6"}"${add_attribute("value", prefix, 0)}>

		<label for="${"surname"}" class="${"svelte-17u9ow6"}">surname:</label>
		<input type="${"text"}" name="${"surname"}" id="${"surname"}" placeholder="${"..."}" class="${"svelte-17u9ow6"}"${add_attribute("value", surname, 0)}>

		<label for="${"nickname"}" class="${"svelte-17u9ow6"}">nickname:</label>
		<input type="${"text"}" name="${"nickname"}" id="${"nickname"}" placeholder="${"..."}" class="${"svelte-17u9ow6"}"${add_attribute("value", nickname, 0)}>

		<label for="${"avatar"}" class="${"svelte-17u9ow6"}">avatar:</label>
		<input type="${"text"}" name="${"avatar"}" id="${"avatar"}" placeholder="${"..."}" class="${"svelte-17u9ow6"}"${add_attribute("value", avatar, 0)}>

		<label for="${"gitHubHandle"}" class="${"svelte-17u9ow6"}">gitHubHandle:</label>
		<input type="${"text"}" name="${"gitHubHandle"}" id="${"gitHubHandle"}" placeholder="${"..."}" class="${"svelte-17u9ow6"}"${add_attribute("value", gitHubHandle, 0)}>

		<label for="${"website"}" class="${"svelte-17u9ow6"}">website:</label>
		<input type="${"text"}" name="${"website"}" id="${"website"}" placeholder="${"..."}" class="${"svelte-17u9ow6"}"${add_attribute("value", website, 0)}>

		<label for="${"bio"}" class="${"svelte-17u9ow6"}">bio:</label>
		<textarea name="${"bio"}" id="${"bio"}" cols="${"30"}" rows="${"10"}" placeholder="${"..."}" class="${"svelte-17u9ow6"}">${""}</textarea>
		<input type="${"submit"}" value="${"Opslaan"}" class="${"svelte-17u9ow6"}"></form>
</section>`;
});
export {
  Page as default
};
