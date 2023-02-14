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
	<li>
		<strong>direction</strong>, bepaalt de volgorde van de selectie. Standaard is DESC (aflopend)
		maar je kunt deze parameter ASC (oplopend) meegeven om de richting te veranderen.
	</li>
	<li>
		<strong>orderBy</strong>, bepaalt de sortering van de <em>members</em> in de squad. Standaard is
		<em>publishedAt</em>, de datum dat het record is toegevoegd. Alle eigenschappen van
		<em>members</em> kunnen gebruikt worden als sortering.
	</li>
</ul>

<h4>Voorbeeld Request:</h4>

<ul>
	<li>
		<a href="/api/v1/squad?id=cldcspecf0z0o0bw59l8bwqim"
			>/api/v1/squad?id=cldcspecf0z0o0bw59l8bwqim</a
		>
	</li>
	<li>
		<a href="/api/v1/squad?id=cldcspecf0z0o0bw59l8bwqim&orderBy=name&direction=ASC"
			>/api/v1/squad?id=cldcspecf0z0o0bw59l8bwqim&orderBy=name&direction=ASC</a
		>
	</li>
</ul>

<h3>[slug]</h3>

<p>
	Selecteer één <em>squad</em>, met alle <em>members</em> in whois.fdnd.nl op basis van de ingestelde
	[slug] welke als onderdeel van de url wordt meegestuurd.
</p>

<h4>Url parameters:</h4>
<ul>
	<li>
		<strong>direction</strong>, bepaalt de volgorde van de selectie. Standaard is DESC (aflopend)
		maar je kunt deze parameter ASC (oplopend) meegeven om de richting te veranderen.
	</li>
	<li>
		<strong>orderBy</strong>, bepaalt de sortering van de <em>members</em> in de squad. Standaard is
		<em>publishedAt</em>, de datum dat het record is toegevoegd. Alle eigenschappen van
		<em>members</em> kunnen gebruikt worden als sortering.
	</li>
</ul>

<h4>Voorbeeld Request:</h4>

<ul>
	<li>
		<a href="/api/v1/squad/minor-web-2023">/api/v1/squad/minor-web-2023</a>
	</li>
	<li>
		<a href="/api/v1/squad/minor-web-2023?orderBy=name&direction=ASC"
			>/api/v1/squad/minor-web-2023?orderBy=name&direction=ASC</a
		>
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
