'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
	const [mail, setMail] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [count, setCount] = useState(0);
	const refMsg = useRef<HTMLParagraphElement | null>(null);

	useEffect(() => {
		fetch(
			'https://script.google.com/macros/s/AKfycbxqejOSCm0Yte8aU0sBmvq0UsytEhJZexjQz1EB6YeFU4fnnNwhlZkLz3f5DI4rGksO/exec'
		)
			.then(res => res.json())
			.then(r => {
				setCount(r.data);
			});
	}, []);
	const router = useRouter();
	const handlerBtn = () => router.push('/Simulator');
	const handleSend = async () => {
		setIsLoading(true);

		// Obtener la fecha y hora actuales en milisegundos desde el epoch
		const now = Date.now();

		// Crear un objeto Date a partir del timestamp actual
		const date = new Date(now);

		// Especificar la región y opciones de formato para Chile
		const options = {
			year: 'numeric' as 'numeric',
			month: '2-digit' as '2-digit',
			day: '2-digit' as '2-digit',
			hour: '2-digit' as '2-digit',
			minute: '2-digit' as '2-digit',
			second: '2-digit' as '2-digit',
			timeZone: 'America/Santiago',
			hour12: false,
		};

		// Crear el formateador de fecha y hora para la región especificada
		const dateTimeFormat = new Intl.DateTimeFormat('es-CL', options);

		// Formatear la fecha
		const formattedDate = dateTimeFormat.format(date);

		await fetch('/api/Newsletter', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ EMAIL: mail, FECHA: formattedDate }),
		})
			.then(r => r.json())
			.then(res => {
				console.log(res);
				setIsLoading(false);
				if (refMsg.current) {
					refMsg.current.classList.remove('hidden');
					setTimeout(() => {
						if (refMsg.current) {
							refMsg.current.classList.add('hidden');
						}
					}, 4000);
				}
			});
	};
	return (
		<main className="flex bg-primary min-h-screen flex-col items-center px-4 justify-center">
			<p className="self-end">
				Contador de visitas: <span className="font-bold">{count}</span>
			</p>
			<div className="flex min-h-screen items-center justify-center">
				<div className="relative flex justify-center items-center flex-col gap-y-2 ">
					<Image
						src="/assets/main2.png"
						alt="Es mi pension logo"
						width={600}
						height={700}
					/>

					<div className="absolute flex flex-col items-center gap-y-2 ">
						<Image
							src="/assets/logo.png"
							alt="Es mi pension logo"
							width={150}
							height={150}
						/>
						<p className="bg-black text-center p-2 text-yellow-300">
							Ni de <span className="text-red-500">AFP</span>, ni del{' '}
							<span className="text-red-500">estado</span>
						</p>
						<input
							type="email"
							placeholder="Ingresa tu correo"
							className="text-center py-2 rounded-lg"
							onChange={e => setMail(e.target.value)}
						/>
						<button
							className={`font-bold py-4 px-8 rounded-3xl ${
								!isLoading
									? 'bg-secondary text-white'
									: 'bg-blue-200 text-black'
							}`}
							onClick={handleSend}
							disabled={isLoading}
						>
							{isLoading ? <div className="loader"></div> : 'Enviar'}
						</button>
						<p
							ref={refMsg}
							className="hidden transition-all bg-green-400 text-green-800 py-2 px-6 rounded-lg"
						>
							Registrado con éxito
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
