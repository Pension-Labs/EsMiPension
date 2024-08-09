'use client';
import { useState } from 'react';

// next
import Image from 'next/image';
import Steps from '../_components/Steps';
import Questions from '../_components/Questions';
import PensionChart from '../_components/PensionChart';

// components

export default function Home() {
	//Form states
	const [step, setStep] = useState(1);
	const [conyuge, setConyuge] = useState('si');
	const [pension, setPension] = useState(0);
	const [afp, setAfp] = useState(0);
	const [age, setAge] = useState(0);
	const [gender, setGender] = useState('M');
	const [kids, setKids] = useState(0);

	//Set Moneda
	const handlePension = (newValue: string | undefined) => {
		if (newValue === undefined) {
			setPension(0);
		} else {
			setPension(Number(newValue));
		}
	};
	const handleSaldoAfp = (newValue: string | undefined) => {
		if (newValue === undefined) {
			setAfp(0);
		} else {
			setAfp(Number(newValue));
		}
	};

	return (
		<main className="relative flex min-h-screen flex-col items-center bg-white">
			<Steps step={step} setStep={setStep} />

			{step === 1 && (
				<Questions
					setStep={setStep}
					setConyuge={setConyuge}
					handlePension={handlePension}
					handleSaldoAfp={handleSaldoAfp}
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
					handlePension={handlePension}
					handleSaldoAfp={handleSaldoAfp}
					setAge={setAge}
					setGender={setGender}
					setKids={setKids}
				/>
			)}
		</main>
	);
}
