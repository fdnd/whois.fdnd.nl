<script>
	import { env } from '$env/dynamic/public';
	import { null_to_empty } from 'svelte/internal';
	const directus = env.PUBLIC_DIRECTUS_URL;
	export let form;

	console.log(form);

	let id = form?.id || null;
	let name = form?.name || null;
	let prefix = form?.prefix || null;
	let surname = form?.surname || null;
	let nickname = form?.nickname || null;
	let github_handle = form?.github_handle || null;
	let website = form?.website || null;
	let bio = form?.bio || null;
	let avatar = form?.avatar || null;
	let email = form?.email || null;
	let phone_number = form?.phone_number || null;
	let squad_id = form?.squad_id || null;
	let custom = form?.custom || null;

	function populate() {
		// trigger loading animation
		if (id != 'null') {
			fetch(`${directus}/person/${id}`)
				.then(res => res.json())
				.then(({ data }) => {
					if (data !== null) {
						name = data.name;
						prefix = data.prefix;
						surname = data.surname;
						nickname = data.nickname;
						github_handle = data.github_handle;
						website = data.website;
						bio = data.bio;
						avatar = data.avatar;
						email = data.email;
						phone_number = data.phone_number;
						squad_id = data.squad_id;
						custom = data.custom;
						// remove loading animation
					} else {
						// failed animation
					}
				});
		}
	}
</script>

<section>
	<h2>person aanpassen</h2>

	<p>
		Begin met het invoeren van het id om jouw gegevens in te laden. Druk op opslaan of druk op enter
		in een van de textvelden om op te slaan. Als jouw gegevens na de reload blijven staan is het
		opslaan gelukt. Als het formulier geleegd wordt heb je ergens verkeerde gegevens ingevuld, begin
		bij je id om het opnieuw te proberen.
	</p>

	<form method="post">
		<label for="id">id:</label>
		<input
			type="text"
			name="id"
			id="id"
			bind:value={id}
			on:change={populate}
			placeholder="Type je id"
		/>

		<label for="name">name:</label>
		<input type="text" name="name" id="name" bind:value={name} placeholder="..." />

		<label for="prefix">prefix:</label>
		<input type="text" name="prefix" id="prefix" bind:value={prefix} placeholder="..." />

		<label for="surname">surname:</label>
		<input type="text" name="surname" id="surname" bind:value={surname} placeholder="..." />

		<label for="nickname">nickname:</label>
		<input type="text" name="nickname" id="nickname" bind:value={nickname} placeholder="..." />

		<label for="gitHubHandle">github_handle:</label>
		<input
			type="text"
			name="github_handle"
			id="github_handle"
			bind:value={github_handle}
			placeholder="..."
		/>

		<label for="website">website (geldige url):</label>
		<input type="text" name="website" id="website" bind:value={website} placeholder="..." />

		<label for="bio">bio:</label>
		<textarea name="bio" id="bio" cols="30" rows="10" bind:value={bio} placeholder="..." />

		<label for="avatar">avatar:</label>
		<input type="text" name="avatar" id="avatar" bind:value={avatar} placeholder="..." />

		<label for="email">email:</label>
		<input type="text" name="email" id="email" bind:value={email} placeholder="..." />

		<label for="phone_number">phone_number:</label>
		<input
			type="text"
			name="phone_number"
			id="phone_number"
			bind:value={phone_number}
			placeholder="..."
		/>

		<label for="squad_id">squad_id (getal, 0 voor leeg):</label>
		<input type="text" name="squad_id" id="squad_id" bind:value={squad_id} placeholder="..." />

		<label for="custom">custom (geldige json):</label>
		<textarea name="custom" id="custom" cols="30" rows="10" bind:value={custom} placeholder="..." />

		<input type="submit" value="Opslaan" />
	</form>
</section>

<style>
	section {
		max-width: 50rem;
		background: var(--c-green);
		color: var(--c-blue);
		padding: var(--component-padding);
		border-radius: var(--rounded);
	}

	label {
		margin: 1rem 0 0.2rem;
		display: block;
		font-size: 1.6rem;
	}
	/* select, */
	textarea,
	input[type='text'],
	input[type='submit'] {
		font-family: monospace;
		padding: var(--component-padding);
		width: 100%;
		font-size: 2rem;
		background-color: #fff4;
		border: 1px solid currentColor;
		border-radius: var(--rounded);
		color: var(--c-blue);
	}
	textarea {
		height: 8em;
	}
	textarea:focus,
	input[type='text']:focus {
		outline: none !important;
		box-shadow: 0 0 10px var(--c-blue);
	}
	input[type='text'] {
		height: 2em;
	}
	input[type='submit'] {
		margin-top: 1rem;
		background: var(--c-blue);
		color: var(--c-green);
		border-radius: var(--pilled);
		transition: 0.25s;
	}
	input[type='submit']:hover {
		transform: scale(1.05);
	}
	input[type='submit']:focus {
		transform: scale(1.05);
		background: var(--c-green);
		color: var(--c-blue);
	}
</style>
