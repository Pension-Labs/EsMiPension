'use client';
import { useState } from 'react';

// next
import Image from 'next/image';
import Steps from '../_components/Steps';
import Questions from '../_components/Questions';
import PensionChart from '../_components/PensionChart';

// components

export default function Home() {
	const [step, setStep] = useState(1);
	const [conyuge, setConyuge] = useState('si');
	const [pension, setPension] = useState(0);
	const [afp, setAfp] = useState(0);
	const [age, setAge] = useState(0);
	const [gender, setGender] = useState('');
	const [kids, setKids] = useState(0);

	//Form states

	return (
		<main className="relative flex min-h-screen flex-col items-center bg-white">
			<Steps step={step} setStep={setStep} />

			{step === 1 && (
				<Questions
					setStep={setStep}
					setConyuge={setConyuge}
					setPension={setPension}
					setAfp={setAfp}
					setAge={setAge}
					setGender={setGender}
					setKids={setKids}
				/>
			)}

			{step === 2 && (
				<PensionChart
					conyuge={conyuge}
					pension={pension}
					afp={afp}
					age={age}
					gender={gender}
					kids={kids}
					setConyuge={setConyuge}
					setPension={setPension}
					setAfp={setAfp}
					setAge={setAge}
					setGender={setGender}
					setKids={setKids}
				/>
			)}
		</main>
	);
}
