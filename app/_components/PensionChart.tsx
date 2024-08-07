import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

interface PewnsionChartProps {
	conyuge: string;
	pension: number;
	afp: number;
	age: number;
	gender: string;
	kids: number;
	setConyuge: React.Dispatch<React.SetStateAction<string>>;
	setGender: React.Dispatch<React.SetStateAction<string>>;
	setPension: React.Dispatch<React.SetStateAction<number>>;
	setAfp: React.Dispatch<React.SetStateAction<number>>;
	setAge: React.Dispatch<React.SetStateAction<number>>;
	setKids: React.Dispatch<React.SetStateAction<number>>;
}
const GaugeComponent = dynamic(() => import('react-gauge-component'), {
	ssr: false,
});
const PensionChart: React.FC<PewnsionChartProps> = ({
	setConyuge,
	setGender,
	setPension,
	setAfp,
	setAge,
	setKids,
	conyuge,
	pension,
	afp,
	age,
	gender,
	kids,
}) => {
	const [cnu, setCNU] = useState(0);
	const [value, setValue] = useState(0);
	const [sliderValue1, setSliderValue1] = useState(0);
	const [sliderValue2, setSliderValue2] = useState(0);
	const [count, setCount] = useState(0);

	//Set CNU amount
	useEffect(() => {
		if (gender === 'M') {
			setCNU(14.7);
		} else if (gender === 'F') {
			setCNU(18.2);
		} else {
			setCNU(0);
		}
		console.log('cnu');
	}, [gender]);

	const handleSlider1 = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value);
		setSliderValue1(newValue);

		console.log('slider1: ', newValue);
		console.log('valor: ', count);
		if (value < 1000) {
			if (newValue <= count) {
				setValue(value - 100);
			} else {
				setValue(value + 100);
			}
		} else {
			return;
		}
		setCount(newValue);
	};

	const handleSlider2 = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value);
		setSliderValue2(newValue);

		console.log('slider2: ', newValue);
		console.log('valor: ', count);
		if (value < 1000) {
			if (newValue <= count) {
				setValue(value - 100);
			} else {
				setValue(value + 100);
			}
		} else {
			return;
		}
		setCount(newValue);
	};
	const getLabel = (value: number) => {
		if (value < 25) {
			return { text: 'Malo', color: 'text-red-500' };
		} else if (value >= 25 && value < 75) {
			return { text: 'Regular', color: 'text-yellow-500' };
		} else {
			return { text: 'Bueno', color: 'text-green-500' };
		}
	};

	const { text, color } = getLabel(value);
	return (
		<div className="flex mx-auto w-10/12 py-6 justify-center items-center gap-y-8 text-center">
			<div className="w-1/3 flex flex-col p-8 gap-y-4 rounded-2xl border-2 bg-white shadow-xl  ">
				<h1 className="text-center mb-3 font-bold text-2xl">
					Modifica tus respuestas
				</h1>
				<div className="w-full flex flex-col items-center">
					<p className="text-[20px]  font-semibold text-black font-quasimoda">
						Tu meta
					</p>
					<input
						type="number"
						className="focus:border-primary focus:outline-none py-3 px-2 w-full rounded-2xl border-2 border-slate-300"
						onChange={e => setPension(Number(e.target.value))}
					/>
				</div>
				<div className="w-full flex flex-col  items-center">
					<p className="text-[20px] font-semibold text-black font-quasimoda">
						Saldo AFP
					</p>
					<input
						type="number"
						className="focus:border-primary focus:outline-none px-2 py-3 w-full rounded-2xl border-2 border-slate-300"
						onChange={e => setAfp(Number(e.target.value))}
					/>
				</div>

				<div className="flex items-center">
					<label htmlFor="customRange2" className="mr-2">
						Edad
					</label>
					<input
						min="18"
						max="65"
						value={sliderValue2}
						onChange={handleSlider2}
						type="range"
						className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
						id="customRange2"
					/>
				</div>
				<div className="flex w-full justify-between ">
					<div className="">
						<p>Tienes conyugue:</p>
					</div>
					<div>
						<label className="relative inline-flex cursor-pointer items-center">
							<input
								type="checkbox"
								onChange={e =>
									e.target.checked ? setValue(value + 77) : setValue(value - 77)
								}
								className="peer sr-only"
							/>
							<label htmlFor="switch" className="hidden"></label>
							<div className="peer h-6 w-11 rounded-full border bg-secundario after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
						</label>
					</div>
				</div>
				<div className="flex items-center">
					<label htmlFor="customRange1" className="mr-2">
						HIjos
					</label>
					<input
						min="0"
						max="10"
						value={kids}
						onChange={e => setKids(Number(e.target.value))}
						type="range"
						className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
						id="customRange1"
					/>
				</div>
			</div>
			<div className="w-2/3 flex justify-center items-center">
				<div className="relative w-full">
					<GaugeComponent
						className="w-full"
						arc={{
							subArcs: [
								{
									limit: 25,
									color: '#EA4228',
									showTick: true,
								},
								{
									limit: 75,
									color: '#F58B19',
									showTick: true,
								},
								{
									limit: 100,
									color: '#5BE12C',
									showTick: true,
								},
							],
						}}
						value={value}
					/>
					<div
						className={`absolute text-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${color}`}
					>
						{text}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PensionChart;
