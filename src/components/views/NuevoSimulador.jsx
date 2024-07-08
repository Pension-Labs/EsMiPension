import React, { useState } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

const NuevoSimulador = () => {
	const [value, setValue] = useState(0);
	const [sliderValue1, setSliderValue1] = useState(0);
	const [sliderValue2, setSliderValue2] = useState(0);
	const [count, setCount] = useState(0);

	const handleSlider1 = e => {
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

	const handleSlider2 = e => {
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
	return (
		<div className="flex mx-auto w-10/12 py-6 justify-center items-center gap-y-8 text-center">
			<div className="w-1/3 flex flex-col p-8 gap-y-4 rounded-2xl border-2 bg-white shadow-xl  ">
				<h1 className="text-center mb-3 font-bold text-2xl">Mejora tu fondo</h1>
				<p className="text-left">
					Fondo: <strong>A,B,C,D</strong>
				</p>
				<div className="flex items-center">
					<p>AFP:</p>
					<button className="text-xs py-2 mr-2 ml-2 px-4 rounded-2xl bg-slate-200 border-2 border-slate-400">
						AFP uno
					</button>
					<button className="text-xs py-2 px-4 rounded-2xl bg-slate-200 border-2 border-slate-400">
						AFP Modelo
					</button>
				</div>
				<div className="flex items-center">
					<label htmlFor="customRange1" className="mr-2">
						Cotización
					</label>
					<input
						min="0"
						max="6"
						value={sliderValue1}
						onChange={handleSlider1}
						type="range"
						className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
						id="customRange1"
					/>
				</div>
				<div className="flex items-center">
					<label htmlFor="customRange2" className="mr-2">
						Densidad
					</label>
					<input
						min="0"
						max="6"
						value={sliderValue2}
						onChange={handleSlider2}
						type="range"
						className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
						id="customRange2"
					/>
				</div>
				<h3>Propuestas:</h3>
				<div className="flex w-full justify-between ">
					<div className="">
						<p>Bono al nacer:</p>
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
							<div className="peer h-6 w-11 rounded-full border bg-secundario after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primario peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
						</label>
					</div>
				</div>
				<div className="flex w-full justify-between ">
					<div className="">
						<p>Autoprestamo:</p>
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
							<div className="peer h-6 w-11 rounded-full border bg-secundario after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primario peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
						</label>
					</div>
				</div>
				<div className="flex w-full justify-between ">
					<div className="">
						<p>Seguro social:</p>
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
							<div className="peer h-6 w-11 rounded-full border bg-secundario after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primario peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
						</label>
					</div>
				</div>
				<div className="flex w-full justify-between ">
					<div className="">
						<p>Seguro de longevidad:</p>
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
							<div className="peer h-6 w-11 rounded-full border bg-secundario after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primario peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
						</label>
					</div>
				</div>
				<div className="flex w-full justify-between ">
					<div className="">
						<p>Hipoteca inversa:</p>
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
							<div className="peer h-6 w-11 rounded-full border bg-secundario after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primario peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
						</label>
					</div>
				</div>
			</div>
			<div className="w-2/3 flex justify-center items-center">
				<ReactSpeedometer
					width={500}
					needleHeightRatio={0.7}
					value={value}
					customSegmentStops={[0, 250, 750, 1000]}
					segmentColors={['#fc6a6a', '#fffb14', '#0ed007']}
					currentValueText="How are you?"
					customSegmentLabels={[
						{
							text: 'Mal',

							position: 'OUTSIDE',

							color: '#460707',
						},

						{
							text: 'Reglar',

							position: 'OUTSIDE',

							color: '#d6bc0f',
						},

						{
							text: '¡Excelente!',

							position: 'OUTSIDE',

							color: '#02a91d',
						},
					]}
					ringWidth={47}
					needleTransitionDuration={3333}
					needleTransition="easeElastic"
					needleColor={'#a7ff83'}
					textColor={'#d8dee9'}
				/>
			</div>
		</div>
	);
};

export default NuevoSimulador;
