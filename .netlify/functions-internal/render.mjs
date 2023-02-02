import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","avatar.jpg","favicon.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-3f0ad2d1.js","imports":["_app/immutable/start-3f0ad2d1.js","_app/immutable/chunks/index-38afccfd.js","_app/immutable/chunks/singletons-7a99e1c1.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js'),
			() => import('../server/nodes/7.js'),
			() => import('../server/nodes/8.js'),
			() => import('../server/nodes/9.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/api/v1/members",
				pattern: /^\/api\/v1\/members\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/v1/members/_server.js')
			},
			{
				id: "/api/v1/member",
				pattern: /^\/api\/v1\/member\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/v1/member/_server.js')
			},
			{
				id: "/api/v1/member/[slug]",
				pattern: /^\/api\/v1\/member\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/v1/member/_slug_/_server.js')
			},
			{
				id: "/api/v1/squads",
				pattern: /^\/api\/v1\/squads\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/v1/squads/_server.js')
			},
			{
				id: "/api/v1/tribes",
				pattern: /^\/api\/v1\/tribes\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/v1/tribes/_server.js')
			},
			{
				id: "/docs",
				pattern: /^\/docs\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/docs/members",
				pattern: /^\/docs\/members\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/docs/member",
				pattern: /^\/docs\/member\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/docs/squads",
				pattern: /^\/docs\/squads\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/docs/tribes",
				pattern: /^\/docs\/tribes\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
