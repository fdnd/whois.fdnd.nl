<h2>Squad</h2>

<h3>GET</h3>

<p>
	Selecteer één <em>squad</em>, met alle <em>members</em> in whois.fdnd.nl op basis van een meegestuurde
	url parameter met het id.
</p>

<h4>Url parameters:</h4>
<ul>
	<li>
		<strong>id</strong>, het id van de te selecteren <em>squad</em>.
		<br />(Vind jouw id door de lijst met squads te gebruiken!)
	</li>
</ul>

<h4>Voorbeeld Request:</h4>

<ul>
	<li>
		<a href="/api/v1/squad?id=cldcspecf0z0o0bw59l8bwqim"
			>/api/v1/squad?id=cldcspecf0z0o0bw59l8bwqim</a
		>
	</li>
</ul>

<h3>[slug]</h3>

<p>
	Selecteer één <em>squad</em>, met alle <em>members</em> in whois.fdnd.nl op basis van de ingestelde
	[slug] welke als onderdeel van de url wordt meegestuurd.
</p>

<h4>Voorbeeld Request:</h4>

<ul>
	<li>
		<a href="/api/v1/squad/minor-web-2023">/api/v1/squad/minor-web-2023</a>
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
