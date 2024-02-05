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

<h3>[id]</h3>

<p>Selecteer een <em>person</em> aan de hand van een specifiek meegestuurd id</p>

<h4>Voorbeeld Request:</h4>

<ul>
	<li>
		<a href="{directus}/person/1">{directus}/person/1</a>
	</li>
</ul>

<h3>PATCH</h3>

<p>
	Pas de gegevens van een <em>person</em> aan aan de hand van een specifiek meegestuurd id. Om een
	PATCH request te maken heb je de 'fetch API' uit Node.js nodig, het is iets ingewikkelder als een
	GET request. In de <em>body</em> van het request stuur je de gegevens mee die je aan wilt passen.
	Ook moet je vertellen wat voor type gegevens dit zijn door
	<em>Content-type</em> mee te sturen, in ons geval is dat <em>json</em>, en wat voor methode je
	voor dit request wilt gebruiken.
</p>
<p>
	Hieronder zie je een voorbeeld waarbij voor de <em>person</em> met het id 1 de nickname
	<em>flappie</em>
	wordt ingesteld.
</p>

<pre>
const request = &#123;
  "method": "PATCH",
  "body": &#123;
    "nickname": "flappie"
  },
  "Content-type": "application/json; charset=UTF-8"
}
const &#123; data } = await fetch(`$&#123;directus}/person/1`, request)
  .then((response) => response.json())
  .catch((error) => error)
</pre>

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
