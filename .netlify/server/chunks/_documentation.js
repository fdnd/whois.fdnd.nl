import { c as create_ssr_component, b as subscribe, d as add_attribute, f as add_classes, e as escape, g as each, v as validate_component } from "./index.js";
import { p as page } from "./stores.js";
const _basics = "";
const _hvalogo = "";
const _link = "";
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { item = [] } = $$props;
  const url = item[1] || "";
  const body = item[0] || "";
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$unsubscribe_page();
  return `<a${add_attribute("href", url, 0)}${add_classes(($page.url.pathname == url || url != "/" && $page.url.pathname.startsWith(url) ? "active" : "").trim())}>${escape(body)}</a>`;
});
const _branding = "";
const _codestring = "";
const _header = "";
const _microsites = "";
const _nav = "";
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = {} } = $$props;
  let { type = "main" } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  return `<nav${add_attribute("class", type, 0)}><div>${each(Object.entries(data), ([title, items]) => {
    return `<h2>${escape(title)}</h2>
      <ul>${each(Object.entries(items), (item) => {
      return `<li>${validate_component(Link, "Link").$$render($$result, { item }, {}, {})}</li>`;
    })}
      </ul>`;
  })}</div></nav>`;
});
const _pageHeader = "";
const _textBlock = "";
const _twoColumnText = "";
const _footer = "";
const _wrapper = "";
const _collapsingColumns = "";
const _documentation = "";
export {
  Nav as N
};
