<script>
	import { env } from '$env/dynamic/public';
	import { null_to_empty } from 'svelte/internal';
	const directus = env.PUBLIC_DIRECTUS_URL;
	export let form;

	let id = form?.id || null;

	let hidden = id ? false : true;

	let name = form?.name || 'Onbekend';

	let nickname = form?.nickname || null;
	let github_handle = form?.github_handle || null;
	let website = form?.website || null;
	let bio = form?.bio || null;
	let avatar = form?.avatar || null;
	let birthdate = form?.birthdate || null;
	let custom = form?.custom || null;

	function populate() {
		hidden = true;
		// trigger loading animation
		if (id != 'null') {
			fetch(`${directus}/person/${id}`)
				.then(res => res.json())
				.then(({ data }) => {
					if (data !== null && !data.errors) {
						hidden = false;
						name = data.name;
						nickname = data.nickname;
						github_handle = data.github_handle;
						website = data.website;
						bio = data.bio;
						avatar = data.avatar;
						birthdate = data.birthdate;
						custom = data.custom;
					}
				});
		}
	}
</script>

<section>
	<h2>Gegevens van persoon aanpassen</h2>

	<p>Begin met het invoeren van <em>jouw</em> <code>id</code> om <em>jouw</em> gegevens in te laden.</p>
	
	<p>Pas daarna je gegevens aan in het formulier eronder.</p>

	<p><small>Ja, je kunt in dit geval van iedereen de gegevens aanpassen, maar dat is dus <em>niet</em> de bedoeling :)</small></p>

	<form method="get" on:submit={populate}>
		<label for="id">id:</label>
		<input type="text" inputmode="numeric" name="id" id="id" bind:value={id} autocomplete="off" autofocus>
		<input type="submit" value="Gegevens inladen">
	</form>

	<form method="post" hidden={hidden}>

		<h2>{name}</h2>

		<input type="hidden" name="id" id="id" bind:value={id}>
		<input type="hidden" name="name" id="name" bind:value={name}>

		<label for="nickname">Bijnaam:</label>
		<input type="text" name="nickname" id="nickname" bind:value={nickname} placeholder="">

		<label for="github_handle">GitHub handle:</label>
		<input type="text" name="github_handle" id="github_handle" bind:value={github_handle} placeholder="">

		<label for="website">Website (geldige URL):</label>
		<input type="url" name="website" id="website" bind:value={website} placeholder="">

		<label for="bio">Bio:</label>
		<textarea name="bio" id="bio" cols="30" rows="10" bind:value={bio} placeholder=""></textarea>

		<label for="avatar">Avatar (geldige URL, bijvoorbeeld je GitHub avatar):</label>
		<input type="url" name="avatar" id="avatar" bind:value={avatar} placeholder="">

		<label for="birthdate">Geboortedatum:</label>
		<input type="date" name="birthdate" id="birthdate" bind:value={birthdate} placeholder="">

		<label for="custom">Eigen velden (geldige JSON):</label>
		<textarea name="custom" id="custom" cols="30" rows="10" bind:value={custom} onblur="checkJSON()"></textarea>

		<input type="submit" value="Opslaan">
	</form>
	<script type="module">
		window.checkJSON = function() {
			let custom = document.getElementById('custom');
			let val = custom.value.trim();
			custom.setCustomValidity('');
			if (val != '') {
				try {
					JSON.parse(val);
				} catch(e) {
					custom.setCustomValidity('Gebruik hier geldige JSON');
				}
			}
		}
	</script>
</section>

<style>
	section {
		max-width: 50rem;
		background: var(--c-green);
		color: var(--c-blue);
		padding: var(--component-padding);
		border-radius: var(--rounded);
	}

	form {
		margin-top: 3em;
	}

	label {
		margin: 2rem 0 0.2rem;
		display: block;
		font-size: 1.6rem;
	}
	textarea,
	input[type='text'],
	input[type='number'],
	input[type='url'],
	input[type='date'],
	input[type='submit'] {
		font-family: monospace;
		padding: var(--component-padding);
		font-size: 1.4rem;
		background-color: #fff4;
		border: 1px solid currentColor;
		border-radius: var(--rounded);
		color: var(--c-blue);
	}
	textarea,
	input[type='text'],
	input[type='number'],
	input[type='url'] {
		width: 100%;
	}
	input[type='number'] {
		width: auto;
	}
	textarea {
		height: 8em;
		resize: vertical;
	}
	textarea#custom {
		font-family: monospace;
	}
	textarea:focus,
	input[type='url']:focus,
	input[type='date']:focus,
	input[type='text']:focus {
		outline: none !important;
		border-color: var(--c-blue);
		background: #fff;
	}
	input[type='text'],
	input[type='url'] {
		height: 2em;
	}
	input[type='submit'] {
		margin-top: 1rem;
		background: var(--c-blue);
		color: var(--c-green);
		border-radius: var(--pilled);
		transition: 0.15s;
		width: auto;
		cursor: pointer;
	}
	input[type='submit']:focus, input[type='submit']:hover {
		background: var(--c-green);
		color: var(--c-blue);
	}
</style>
