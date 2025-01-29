<script>
	import { Documentation, Nav } from '@fdnd/components';

	const data = {
		person: {
			GET: '/docs/person#get',
			'[id]': '/docs/person#id',
			// POST: '/docs/person#post'
			// PUT: '/docs/person#put',
			PATCH: '/docs/person#patch'
			// DELETE: '/docs/person#delete',
		},
		squad: {
			GET: '/docs/squad#get',
			// 	POST: '/docs/shout#post'
			// 	PUT: '/docs/shout#put',
			// 	PATCH: '/docs/shout#patch',
			// 	DELETE: '/docs/shout#delete'
		},
		tribe: {
			GET: '/docs/tribe#get'
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
