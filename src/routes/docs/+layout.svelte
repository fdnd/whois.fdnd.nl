<script>
	import { Documentation, Nav } from '@fdnd/components';

	const data = {
		Member: {
			GET: '/docs/member#get',
			// POST: '/docs/member#post',
			PUT: '/docs/member#put',
			PATCH: '/docs/member#patch',
			// DELETE: '/docs/member#delete',
			'[slug]': '/docs/member#slug'
		},
		Members: {
			GET: '/docs/members#get'
		},
		Squads: {
			GET: '/docs/squads#get'
			// POST: '/docs/squad#post',
			// PUT: '/docs/squad#put',
			// PATCH: '/docs/squad#patch',
			// DELETE: '/docs/squad#delete'
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
