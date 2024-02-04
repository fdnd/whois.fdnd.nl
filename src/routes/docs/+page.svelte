<script>
	import { env } from '$env/dynamic/public';
	const directus = env.PUBLIC_DIRECTUS_URL;
</script>

<h2>Documentatie</h2>

<p>
	Hier vind je beknopte documentatie over de endpoints van de API op <a href={directus}
		>{directus}</a
	>.
</p>
<p>
	Voor een meer in-depth uitleg over de werking van <a href="https://directus.io/">directus.io</a>
	verwijzen we je graag naar de uitgebreide documentatie op
	<a href="https://docs.directus.io/">docs.directus.io</a>
</p>
