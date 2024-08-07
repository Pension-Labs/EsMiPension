'use client';
import { useRouter } from 'next/navigation';
export default function Home() {
	const router = useRouter();
	const handlerBtn = () => router.push('/Simulator');
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className="font-bold text-7xl text-center mb-20">
				Es tu pensión y nadie
				<br />
				te la puede quitar
			</h1>
			<button
				onClick={handlerBtn}
				className="bg-primary font-bold py-4 px-16 rounded-3xl"
			>
				COMENZAR
			</button>
		</main>
	);
}
