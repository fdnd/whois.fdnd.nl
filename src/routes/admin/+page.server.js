import { env } from '$env/dynamic/public';
const directus = env.PUBLIC_DIRECTUS_URL;

// See form actions: https://kit.svelte.dev/docs/form-actions
export const actions = {
	default: async ({ request }) => {
		const fdata = await request.formData();
		const id = fdata.get('id');

		const nickname = fdata.get('nickname');
		const github_handle = fdata.get('github_handle').replace('https://github.com/', '');
		const website = fdata.get('website');
		const bio = fdata.get('bio');
		const avatar = fdata.get('avatar');
		const birthdate = fdata.get('birthdate');
		const custom = fdata.get('custom').trim();

		const body = JSON.stringify({
			nickname,
			github_handle,
			website,
			bio,
			avatar,
			birthdate,
			custom
		});

		const { data } = await fetch(`${directus}/person/${id}`, {
			method: 'PATCH',
			body: body,
			headers: { 'Content-type': 'application/json; charset=UTF-8' }
		})
			.then(response => response.json())
			.catch(error => error);
		return data;
	}
};
