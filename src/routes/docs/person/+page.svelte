<script>
	import { env } from '$env/dynamic/public';
	const directus = env.PUBLIC_DIRECTUS_URL;
</script>

<h2>person</h2>

<h3>GET</h3>

<p>Selecteer alle <em>persons</em> in het systeem.</p>

<h4>Voorbeeld Request:</h4>

<ul>
	<li>
		<a href="{directus}/person/">{directus}/person/</a>
	</li>
</ul>

<style>
	h3:not(:first-of-type),
	h4,
	ul {
		margin-top: 1rem;
	}
	ul {
		padding: 0;
		list-style: none;
	}
	li {
		margin-bottom: 0.4rem;
	}
</style>
