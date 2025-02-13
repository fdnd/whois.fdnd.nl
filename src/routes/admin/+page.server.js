import { env } from '$env/dynamic/public';
const directus = env.PUBLIC_DIRECTUS_URL;

// See form actions: https://kit.svelte.dev/docs/form-actions
export const actions = {
	default: async ({ request }) => {
		const fdata = await request.formData();
		const id = fdata.get('id');

		const nickname = fdata.get('nickname')?.trim() || null;
		const github_handle = fdata.get('github_handle').replace('https://github.com/', '').trim() || null;
		const website = fdata.get('website')?.trim() || null;
		const bio = fdata.get('bio')?.trim() || null;
		const avatar = fdata.get('avatar')?.trim() || null;

		const birthdate = fdata.get('birthdate')?.trim() || null;
		const fav_color = fdata.get('fav_color')?.trim() || null;
		const fav_tag = fdata.get('fav_tag')?.trim() || null;
		const fav_attribute = fdata.get('fav_attribute')?.trim() || null;
		const fav_property = fdata.get('fav_property')?.trim() || null;
		const fav_feature = fdata.get('fav_feature')?.trim() || null;
		const fav_kitchen = fdata.get('fav_kitchen')?.trim() || null;
		const fav_book_genre = fdata.get('fav_book_genre')?.trim() || null;
		const fav_country = fdata.get('fav_country')?.trim() || null;
		const most_energy = fdata.get('most_energy')?.trim() || null;
		const fav_coffee = fdata.get('fav_coffee')?.trim() || null;
		const fav_emoji = fdata.get('fav_emoji')?.trim() || null;
		const fav_hobby = fdata.get('fav_hobby')?.trim() || null;
		const fav_animal = fdata.get('fav_animal')?.trim() || null;

		const custom = fdata.get('custom')?.trim() || null;

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
			fav_book_genre,
			fav_country,
			most_energy,
			fav_coffee,
			fav_emoji,
			fav_hobby,
			fav_animal,
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
