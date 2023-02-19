<script>
	import { page } from '$app/stores';
</script>

<h2>Shout</h2>

<h3>POST</h3>

<p>
	Voeg een <em>shout</em> toe aan de lijst met <em>shouts</em> van een <em>member</em>. Om post uit
	te voeren dien je een request vanuit javascript (client-side) of node (server-side) te maken. Een
	voorbeeld zie je hier onder.
</p>

<h3>Voorbeeld code:</h3>

<pre><code>
  const payload = &#123;
    id: "cldczhjad16yh0av08jxscp0a",
    author: "Naam van de auteur",
    text: "De boodschap of shout die de auteur achter wil laten"
  &#125;
  const headers = &#123;
    headers: &#123;
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    &#125;,
    method: "POST",
    body: JSON.stringify(payload)
  &#125;

  const data = await fetch("{$page.url.origin}/api/v1/shout", headers)
    .then((res)=>res.json())
    .catch((err)=>&#123;console.log(err)&#125;)

  console.log(data)

</code></pre>
