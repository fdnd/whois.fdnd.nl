<script>
	import { Documentation, Nav } from '@fdnd/components';

	const data = {
		Member: {
			GET: '/docs/member#get',
			'[slug]': '/docs/member#slug'
			// POST: '/docs/member#post',
			// PUT: '/docs/member#put',
			// PATCH: '/docs/member#patch',
			// DELETE: '/docs/member#delete',
		},
		Members: {
			GET: '/docs/members#get'
		},
		Shout: {
			// GET: '/docs/shout#get',
			POST: '/docs/shout#post'
			// PUT: '/docs/shout#put',
			// PATCH: '/docs/shout#patch',
			// DELETE: '/docs/shout#delete'
		},
		Squad: {
			GET: '/docs/squad#get',
			'[slug]': '/docs/squad#slug'
			// POST: '/docs/squad#post',
			// PUT: '/docs/squad#put',
			// PATCH: '/docs/squad#patch',
			// DELETE: '/docs/squad#delete'
		},
		Squads: {
			GET: '/docs/squads#get'
			// POST: '/docs/squads#post',
			// PUT: '/docs/squads#put',
			// PATCH: '/docs/squads#patch',
			// DELETE: '/docs/squads#delete'
		},
		Tribes: {
			GET: '/docs/tribes#get'
			// POST: '/docs/tribe#post',
			// PUT: '/docs/tribe#put',
			// PATCH: '/docs/tribe#patch',
			// DELETE: '/docs/tribe#delete'
		}
	};
</script>

<Documentation {data}>
	<slot />
</Documentation>
