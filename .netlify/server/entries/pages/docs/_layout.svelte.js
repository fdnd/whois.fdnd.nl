import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { N as Nav } from "../../../chunks/_documentation.js";
const Documentation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = {} } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<main class="${"documentation"}"><div>${slots.default ? slots.default({}) : ``}</div>

  ${validate_component(Nav, "Nav").$$render($$result, { data, type: "document" }, {}, {})}</main>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data = {
    Member: {
      GET: "/docs/member#get",
      // POST: '/docs/member#post',
      PUT: "/docs/member#put",
      PATCH: "/docs/member#patch",
      // DELETE: '/docs/member#delete',
      "[slug]": "/docs/member#slug"
    },
    Members: { GET: "/docs/members#get" },
    Squads: { GET: "/docs/squads#get" },
    // POST: '/docs/squad#post',
    // PUT: '/docs/squad#put',
    // PATCH: '/docs/squad#patch',
    // DELETE: '/docs/squad#delete'
    Tribes: { GET: "/docs/tribes#get" }
    // POST: '/docs/tribe#post',
    // PUT: '/docs/tribe#put',
  };
  return `${validate_component(Documentation, "Documentation").$$render($$result, { data }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Layout as default
};
