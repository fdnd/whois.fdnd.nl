import { GraphQLClient, gql } from 'graphql-request';
import { HYGRAPH_KEY, HYGRAPH_URL } from '$env/static/private';

import { responseInit } from '$lib/server/responseInit';

const hygraph = new GraphQLClient(HYGRAPH_URL, {
	headers: { Authorization: `Bearer ${HYGRAPH_KEY}` }
});

export async function GET({ url }) {
	const id = url.searchParams.get('id') || '123';

	const query = gql`
		query getShout($id: ID!) {
			shout(where: { id: $id }) {
				id
				author
				text
			}
		}
	`;
	const data = await hygraph.request(query, { id });
	return new Response(JSON.stringify(data), responseInit);
}

export async function POST({ request }) {
	// Same route but using forms!
	// const values = await request.formData();
	// const id = values.get('id') || null;
	// const author = values.get('author') || null;
	// const text = values.get('text') || null;

	const values = await request.json();
	const id = values.id;
	const author = values.author;
	const text = values.text;

	// Maak een shout aan en krijg de inserted id terug
	const shoutQuery = gql`
		mutation createShout($author: String!, $text: String!) {
			createShout(data: { author: $author, text: $text }) {
				id
				author
				text
			}
		}
	`;
	const shoutData = await hygraph.request(shoutQuery, { author, text });

	// Publiceer de shout aan de hand van het id
	const shoutPubQuery = gql`
		mutation publishShout($id: ID!) {
			publishShout(where: { id: $id }, to: PUBLISHED) {
				id
			}
		}
	`;
	const shoutPubData = await hygraph.request(shoutPubQuery, { id: shoutData.createShout.id });

	// Voeg de shout toe aan een member
	const memberQuery = gql`
		mutation updateMember($id: ID!, $shoutId: ID!) {
			updateMember(where: { id: $id }, data: { shouts: { connect: { where: { id: $shoutId } } } }) {
				id
			}
		}
	`;
	const memberData = await hygraph.request(memberQuery, {
		id: id,
		shoutId: shoutPubData.publishShout.id
	});

	// Publiceer de member
	const memberPubQuery = gql`
		mutation publishMember($id: ID!) {
			publishMember(where: { id: $id }, to: PUBLISHED) {
				id
			}
		}
	`;
	const memberPubData = await hygraph.request(memberPubQuery, { id: memberData.updateMember.id });

	return new Response(JSON.stringify({ message: 'Succes', id, author, text }), responseInit);
}

export async function PUT({ request }) {
	const request_data = await request.json();
	return new Response(JSON.stringify({ method: 'PUT', working: 'no' }), responseInit);
}

export async function PATCH({ request }) {
	const request_data = await request.json();
	return new Response(JSON.stringify({ method: 'PATCH', working: 'no' }), responseInit);
}
