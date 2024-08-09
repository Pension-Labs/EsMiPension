import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import CurrencyInput from 'react-currency-input-field';

interface PewnsionChartProps {
	conyuge: string;
	pension: number;
	afp: number;
	age: number;
	gender: string;
	kids: number;
	setConyuge: React.Dispatch<React.SetStateAction<string>>;
	setGender: React.Dispatch<React.SetStateAction<string>>;
	handlePension: (newValue: string | undefined) => void;
	handleSaldoAfp: (newValue: string | undefined) => void;
	setAge: React.Dispatch<React.SetStateAction<number>>;
	setKids: React.Dispatch<React.SetStateAction<number>>;
}
const GaugeComponent = dynamic(() => import('react-gauge-component'), {
	ssr: false,
});
const PensionChart: React.FC<PewnsionChartProps> = ({
	setConyuge,
	setGender,
	handlePension,
	handleSaldoAfp,
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
	const [meta, setMeta] = useState(0);
	const [value, setValue] = useState(0);
	const [rentabilidadAnual, setRentabilidadAnual] = useState(0);
	const [saldoFuturo, setSaldoFuturo] = useState(0);
	const [pensionEsperada, setPensionEsperada] = useState(0);
	const [cumplimiento, setCumplimiento] = useState(0);
	const [edadJubilacion, setedadJubilacion] = useState(65);
	const rentaAnuealPorcentaje = 0.04;

	//edad jubilacion
	useEffect(() => {
		if (gender === 'F') {
			setedadJubilacion(60);
		}
	}, [gender]);

	//Cacl CNU
	useEffect(() => {
		if (gender === 'M' && conyuge === 'no' && kids === 0) {
			setCNU(14.7);
		}
		if (gender === 'M' && conyuge === 'si' && kids === 0) {
			setCNU(17.9);
		}
		if (gender === 'M' && conyuge === 'no' && kids > 0) {
			setCNU(15.9);
		}
		if (gender === 'F' && conyuge === 'no' && kids === 0) {
			setCNU(18.2);
		}
		if (gender === 'F' && conyuge === 'si' && kids === 0) {
			setCNU(19.9);
		}
		if (gender === 'F' && conyuge === 'no' && kids > 0) {
			setCNU(19);
		}
		console.log(cnu);
	}, [gender, conyuge, kids]);
	const handleCalc = () => {};
	//CALCULATE META
	useEffect(() => {
		const res = ((pension * cnu) / 12).toFixed(2);
		setMeta(Number(res));
	}, [pension, cnu]);

	//Calc rentabilidad anual
	useEffect(() => {
		const res = (afp * rentaAnuealPorcentaje).toFixed(2);
		setRentabilidadAnual(Number(res));
	}, [afp]);

	//Calc saldo futuro
	useEffect(() => {
		const exponente = edadJubilacion - age;
		const res = (afp * Math.pow(1 + rentaAnuealPorcentaje, exponente)).toFixed(
			2
		);
		setSaldoFuturo(Number(res));
	}, [afp, rentabilidadAnual, age, edadJubilacion]);

	//Calc pension esperada
	useEffect(() => {
		// Calcular el denominador
		const denominador = cnu * 12;

		// Calcular el resultado
		const res = (saldoFuturo / denominador).toFixed(2);
		setPensionEsperada(Number(res));
	}, [saldoFuturo, cnu]);

	//Calc cumplimeinto
	useEffect(() => {
		const N = (pensionEsperada / meta).toFixed(2);
		setCumplimiento(Number(N));
	}, [pensionEsperada, meta]);

	// la meta sale del SALDO que le preguntamos al cliente *CNU/12
	//saldo actual de AFP
	//rentabilidad anual es igual al 4% del saldo actual de afp
	//valor futuro es igual a valor anual por 1 + rentabilidad (4%) elevado al periodo de tiempo....si es hombre es 65 si es mujer 60

	const getLabel = (value: number) => {
		if (cumplimiento <= (meta * 25) / 100) {
			return { text: 'Malo', color: 'text-red-500' };
		} else if (
			cumplimiento >= (meta * 25) / 100 &&
			cumplimiento < (meta * 75) / 100
		) {
			return { text: 'Regular', color: 'text-yellow-500' };
		} else {
			return { text: 'Bueno', color: 'text-green-500' };
		}
	};
	console.log('pension' + Math.floor(pension));
	console.log('pension esperada' + Math.floor(pensionEsperada));
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
					<CurrencyInput
						intlConfig={{ locale: 'es-CL', currency: 'CLP' }}
						allowDecimals
						decimalSeparator=","
						id="input-currency-field"
						name="input-currency-field-name"
						prefix="$"
						value={pension}
						onValueChange={handlePension}
						step={1}
						className="focus:border-primary w-full focus:outline-none py-4 px-6 rounded-2xl border-2 border-slate-300"
					/>
				</div>
				<div className="w-full flex flex-col  items-center">
					<p className="text-[20px] font-semibold text-black font-quasimoda">
						Saldo AFP
					</p>
					<CurrencyInput
						intlConfig={{ locale: 'es-CL', currency: 'CLP' }}
						allowDecimals
						decimalSeparator=","
						id="input-currency-field"
						name="input-currency-field-name"
						prefix="$"
						value={afp}
						onValueChange={handleSaldoAfp}
						step={1}
						className="focus:border-primary focus:outline-none py-4 px-6 w-full rounded-2xl border-2 border-slate-300"
					/>
				</div>

				<div className="flex items-center">
					<label htmlFor="customRange2" className="mr-2">
						Edad
					</label>
					<input
						min="18"
						max="65"
						value={age}
						onChange={e => setAge(Number(e.target.value))}
						type="range"
						className="block w-full py-2 mt-2 text-gray-700  border accent-primary border-transparent bg-neutral-200 rounded-md focus:border-primary-with-opacity focus:outline-none "
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
								value={conyuge}
								onChange={e =>
									e.target.checked ? setConyuge('si') : setConyuge('no')
								}
								className="peer sr-only"
							/>
							<label htmlFor="switch" className="hidden" />
							<div className="peer h-6 w-11 rounded-full border bg-secundario after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
						</label>
					</div>
				</div>
				<div className="flex items-center">
					<label htmlFor="customRange1" className="mr-2">
						Hijos
					</label>
					<input
						min="0"
						max="10"
						value={kids}
						onChange={e => setKids(Number(e.target.value))}
						type="range"
						className="block w-full py-2 mt-2 text-gray-700  border accent-primary border-transparent bg-neutral-200 rounded-md focus:border-primary-with-opacity focus:outline-none "
						id="customRange1"
					/>
				</div>
				<button onClick={handleCalc}>Calcular</button>
			</div>
			<div className="w-2/3 flex justify-center items-center">
				<div className="relative w-full">
					{/* <GaugeComponent
						className="w-full"
						arc={{
							subArcs: [
								{
									limit: Math.floor((meta * 25) / 100),
									color: '#EA4228',
									showTick: true,
								},
								{
									limit: Math.floor((meta * 75) / 100),
									color: '#F58B19',
									showTick: true,
								},
								{
									limit: Math.floor(meta),
									color: '#5BE12C',
									showTick: true,
								},
							],
						}}
						value={Math.floor(pensionEsperada)}
						maxValue={Math.floor(meta)}
					/> */}
					{/* <GaugeComponent
						type="semicircle"
						arc={{
							width: 0.2,
							padding: 0.005,
							cornerRadius: 1,
							subArcs: [
								{
									length: 0.25,
									color: '#EA4228',
									showTick: true,
									tooltip: {
										text: 'Too low temperature!',
									},
								},
								{
									length: 0.5,
									color: '#F5CD19',
									showTick: true,
									tooltip: {
										text: 'Low temperature!',
									},
								},
								{
									length: 0.25,
									color: '#19f583',
									showTick: true,
									tooltip: {
										text: 'Low temperature!',
									},
								},
							],
						}}
						pointer={{
							color: '#345243',
							length: 0.8,
							width: 15,
						}}
						labels={{
							valueLabel: {
								formatTextValue: value => {
									return String(Math.floor(meta / value)) + '%';
								},
							},
						}}
						value={Math.floor(pensionEsperada)}
						maxValue={Math.floor(meta)}
					/> */}
					<GaugeComponent
						value={Math.floor(pensionEsperada)}
						maxValue={Math.floor(meta)}
						type="radial"
						labels={{
							tickLabels: {
								type: 'inner',
								ticks: [
									{ value: 20 },
									{ value: 40 },
									{ value: 60 },
									{ value: 80 },
									{ value: 100 },
								],
							},
						}}
						arc={{
							colorArray: ['#5BE12C', '#EA4228'],
							subArcs: [{ length: 25 }, { length: 50 }, { length: 25 }],
							padding: 0.02,
							width: 0.3,
						}}
						pointer={{
							elastic: true,
							animationDelay: 0,
						}}
					/>
					<div className="labels">
						<p>pens {pension}</p>
						<p>espe {pensionEsperada}</p>
						<p>meta {meta}</p>
					</div>

					{/* <GaugeComponent
						type="semicircle"
						arc={{
							width: 0.2,
							padding: 0.005,
							cornerRadius: 1,
							// gradient: true,
							subArcs: [
								{
									limit: 15,
									color: '#EA4228',
									showTick: true,
									tooltip: {
										text: 'Too low temperature!',
									},
									onClick: () =>
										console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'),
									onMouseMove: () =>
										console.log('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB'),
									onMouseLeave: () =>
										console.log('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC'),
								},
								{
									limit: 17,
									color: '#F5CD19',
									showTick: true,
									tooltip: {
										text: 'Low temperature!',
									},
								},
								{
									limit: 28,
									color: '#5BE12C',
									showTick: true,
									tooltip: {
										text: 'OK temperature!',
									},
								},
								{
									limit: 30,
									color: '#F5CD19',
									showTick: true,
									tooltip: {
										text: 'High temperature!',
									},
								},
								{
									color: '#EA4228',
									tooltip: {
										text: 'Too high temperature!',
									},
								},
							],
						}}
						pointer={{
							color: '#345243',
							length: 0.8,
							width: 15,
							// elastic: true,
						}}
						labels={{
							valueLabel: { formatTextValue: value => value + 'ºC' },
						}}
						value={20}
						minValue={10}
						maxValue={35}
					/> */}
					{/* <div
						className={`absolute text-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${color}`}
					>
						{text}
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default PensionChart;
