import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
	console.log('POST /api/questions');

	const body = await request.json();
	body.ID = uuidv4(); // Genera un UUID único y lo añade al cuerpo
	console.log(body);

	const urlGoogleSheet =
		'https://script.google.com/macros/s/AKfycbxqejOSCm0Yte8aU0sBmvq0UsytEhJZexjQz1EB6YeFU4fnnNwhlZkLz3f5DI4rGksO/exec';

	try {
		const response = await fetch(`${urlGoogleSheet}?endpoint=registrar`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const responseData = await response.json();
		console.log(responseData);

		return NextResponse.json({
			statusCode: 200,
			message: 'Correo registrado exitosamente',
		});
	} catch (error) {
		console.error('Error:', error);
		return NextResponse.json({ error });
	}
}
