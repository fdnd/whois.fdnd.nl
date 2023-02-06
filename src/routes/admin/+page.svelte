<script>
	import { page } from '$app/stores';

	let id;
	let slug;
	let name;
	let prefix;
	let surname;
	let nickname;
	let avatar;
	let gitHubHandle;
	let bio;
	let website;

	function populate() {
		// trigger loading animation
		if (id != 'null') {
			fetch(`${$page.url.origin}/api/v1/member?id=${id}`)
				.then(res => res.json())
				.then(data => {
					if (data.member !== null) {
						slug = data.member.slug;
						name = data.member.name;
						prefix = data.member.prefix;
						surname = data.member.surname;
						nickname = data.member.nickname;
						avatar = data.member.avatar;
						gitHubHandle = data.member.gitHubHandle;
						website = data.member.website;
						bio = data.member.bio.html;
						// remove loading animation
					} else {
						// failed animation
					}
				});
		}
	}
</script>

<section>
	<h2>Member aanpassen</h2>
	<p>Het kan even duren voordat de aangepaste data in het CMS gepubliceerd wordt (~ 1 minuut)!</p>
	<form method="post">
		<label for="id">id:</label>
		<input
			type="text"
			name="id"
			id="id"
			bind:value={id}
			on:change={populate}
			placeholder="Paste je id"
		/>

		<label for="slug">slug:</label>
		<input type="text" name="slug" id="slug" bind:value={slug} placeholder="..." />

		<label for="name">name:</label>
		<input type="text" name="name" id="name" bind:value={name} placeholder="..." />

		<label for="prefix">prefix:</label>
		<input type="text" name="prefix" id="prefix" bind:value={prefix} placeholder="..." />

		<label for="surname">surname:</label>
		<input type="text" name="surname" id="surname" bind:value={surname} placeholder="..." />

		<label for="nickname">nickname:</label>
		<input type="text" name="nickname" id="nickname" bind:value={nickname} placeholder="..." />

		<label for="avatar">avatar:</label>
		<input type="text" name="avatar" id="avatar" bind:value={avatar} placeholder="..." />

		<label for="gitHubHandle">gitHubHandle:</label>
		<input
			type="text"
			name="gitHubHandle"
			id="gitHubHandle"
			bind:value={gitHubHandle}
			placeholder="..."
		/>

		<label for="website">website:</label>
		<input type="text" name="website" id="website" bind:value={website} placeholder="..." />

		<label for="bio">bio:</label>
		<textarea name="bio" id="bio" cols="30" rows="10" bind:value={bio} placeholder="..." />
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
	select,
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
		transition:.25s
	}
	input[type='submit']:hover {
		transform:scale(1.05)
	}
	input[type='submit']:focus {
		transform:scale(1.05);
		background: var(--c-green);
		color: var(--c-blue);
	}
</style>
