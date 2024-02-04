<script>
	import { env } from '$env/dynamic/public';
	const directus = env.PUBLIC_DIRECTUS_URL;

	let id;
	let name;
	let prefix;
	let surname;
	let nickname;
	let github_handle;
	let website;
	let bio;
	let avatar;
	let email;
	let phone_number;
	let squad_id;
	let custom;

	function populate() {
		console.log('typed!');
		// trigger loading animation
		if (id != 'null') {
			fetch(`${directus}/person/${id}`)
				.then(res => res.json())
				.then(data => {
					console.log(data);
					if (data !== null) {
						name = data.name;
						prefix = data.prefix;
						surname = data.surname;
						nickname = data.nickname;
						github_handle = data.github_handle;
						website = data.website;
						bio = data.bio.html;
						avatar = data.avatar;

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

	<form method="post">
		<label for="id">id:</label>
		<input
			type="text"
			name="id"
			id="id"
			bind:value={id}
			on:change={populate}
			placeholder="Type je id..."
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

		<label for="website">website:</label>
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

		<label for="squad_id">squad_id:</label>
		<input type="text" name="squad_id" id="squad_id" bind:value={squad_id} placeholder="..." />

		<label for="custom">custom:</label>
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
