import { env } from '$env/dynamic/public';
const directus = env.PUBLIC_DIRECTUS_URL;

// See form actions: https://kit.svelte.dev/docs/form-actions
export const actions = {
	default: async ({ request }) => {
		const fdata = await request.formData();
		const id = fdata.get('id');
		const name = fdata.get('name');
		const prefix = fdata.get('prefix');
		const surname = fdata.get('surname');
		const nickname = fdata.get('nickname');
		const github_handle = fdata.get('github_handle');
		const website = fdata.get('website');
		const bio = fdata.get('bio');
		const avatar = fdata.get('avatar');
		const email = fdata.get('email');
		const phone_number = fdata.get('phone_number');
		const squad_id = Number(fdata.get('squad_id'));
		const custom = fdata.get('custom');

		const body = JSON.stringify({
			name,
			prefix,
			surname,
			nickname,
			github_handle,
			website,
			bio,
			avatar,
			email,
			phone_number,
			squad_id,
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
