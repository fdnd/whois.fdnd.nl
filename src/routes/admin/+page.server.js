import { env } from '$env/dynamic/public';
const directus = env.PUBLIC_DIRECTUS_URL;

// See form actions: https://kit.svelte.dev/docs/form-actions
export const actions = {
	default: async ({ request }) => {
		const fdata = await request.formData();
		const id = fdata.get('id');

		const nickname = fdata.get('nickname').trim();
		const github_handle = fdata.get('github_handle').replace('https://github.com/', '').trim();
		const website = fdata.get('website').trim();
		const bio = fdata.get('bio').trim();
		const avatar = fdata.get('avatar').trim();
		let birthdate = fdata.get('birthdate').trim();
		if (birthdate == '') {
			birthdate = null;
		}
		let fav_color = fdata.get('fav_color');
		if (fav_color == '') {
			fav_color = null;
		}
		const fav_tag = fdata.get('fav_tag').trim();
		const fav_attribute = fdata.get('fav_attribute').trim();
		const fav_property = fdata.get('fav_property').trim();
		const fav_feature = fdata.get('fav_feature').trim();
		const fav_kitchen = fdata.get('fav_kitchen').trim();
		const custom = fdata.get('custom').trim();

		const body = JSON.stringify({
			nickname,
			github_handle,
			website,
			bio,
			avatar,
			birthdate,
			custom,
			fav_color,
			fav_tag,
			fav_attribute,
			fav_property,
			fav_feature,
			fav_kitchen,
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
