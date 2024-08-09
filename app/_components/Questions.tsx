import React, { useRef, useState } from 'react';

import CurrencyInput from 'react-currency-input-field';

// react swiper
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperBackButton from './SwiperBackButton';
import SwiperNextButton from './SwiperNextButton';

//components

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'swiper-container': any;
			'swiper-slide': any;
		}
	}
}

interface QuestionsProps {
	handlePension: (newValue: string | undefined) => void;
	setConyuge: React.Dispatch<React.SetStateAction<string>>;
	setGender: React.Dispatch<React.SetStateAction<string>>;
	setStep: React.Dispatch<React.SetStateAction<number>>;
	handleSaldoAfp: (newValue: string | undefined) => void;
	setAge: React.Dispatch<React.SetStateAction<number>>;
	setKids: React.Dispatch<React.SetStateAction<number>>;
}

const Questions: React.FC<QuestionsProps> = ({
	setConyuge,
	setGender,
	setStep,
	handlePension,
	handleSaldoAfp,
	setAge,
	setKids,
}) => {
	const [index, setIndex] = useState(0);

	const swiperRef = useRef<any>(null);

	return (
		<div className="w-full md:w-[800px] mt-[20px] mb-[150px]">
			<Swiper
				ref={swiperRef}
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={100}
				slidesPerView={1}
				navigation={false}
				onSlideChange={swiper => setIndex(swiper.activeIndex)}
				className="w-full h-full"
			>
				<SwiperSlide className="flex items-center text-center ">
					<div className="flex flex-col gap-y-6 justify-center items-center">
						<p className="text-[30px] text-black font-bold font-quasimoda">
							Una pequeña guía
						</p>

						<p className="text-[20px] text-black font-quasimoda w-10/12 md:w-full">
							Te haremos algunas preguntas para obtener tu perfil, y luego te
							entregaremos una comparación para que entiendas el impacto de la
							reforma en tu pensión y que te conviene más
						</p>

						<button className="bg-primary px-[32px] py-[8px] rounded-[30px]">
							<p
								className="text-[20px] text-black font-quasimoda font-bold "
								onClick={() => {
									if (swiperRef.current) {
										swiperRef.current.swiper.slideNext();
									}
								}}
							>
								Comenzar
							</p>
						</button>

						<p className="text-[16px] text-gray-500 font-quasimoda">
							🕣 1 min aprox
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className="min-h-72 flex">
					<div className="w-full flex flex-col gap-y-6 justify-center items-center">
						<p className="text-[20px] text-center font-semibold text-black font-quasimoda w-10/12 md:w-full">
							¿Cuál es tu meta?
						</p>
						<CurrencyInput
							intlConfig={{ locale: 'es-CL', currency: 'CLP' }}
							allowDecimals
							decimalSeparator=","
							id="input-currency-field"
							name="input-currency-field-name"
							prefix="$"
							onValueChange={handlePension}
							step={1}
							className="focus:border-primary w-1/2 text-center focus:outline-none py-4 px-6  rounded-2xl border-2 border-slate-300"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide className="min-h-72 flex">
					<div className="w-full flex flex-col gap-y-6 justify-center items-center">
						<p className="text-[20px] text-center font-semibold text-black font-quasimoda w-10/12 md:w-full">
							¿Cuánto saldo tienes en la AFP?
						</p>
						<CurrencyInput
							intlConfig={{ locale: 'es-CL', currency: 'CLP' }}
							allowDecimals
							decimalSeparator=","
							id="input-currency-field"
							name="input-currency-field-name"
							prefix="$"
							onValueChange={handleSaldoAfp}
							step={1}
							className="focus:border-primary w-1/2 text-center focus:outline-none py-4 px-6 rounded-2xl border-2 border-slate-300"
						/>
					</div>
				</SwiperSlide>

				<SwiperSlide className="min-h-72 flex">
					<div className="w-full flex flex-col gap-y-6 justify-center items-center">
						<p className="text-[20px] text-center font-semibold text-black font-quasimoda w-10/12 md:w-full">
							¿Cuántos años tienes?
						</p>
						<input
							type="number"
							className="focus:border-primary focus:outline-none py-4 px-6 w-24 rounded-2xl border-2 border-slate-300"
							onChange={e => setAge(Number(e.target.value))}
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide className="min-h-72 text-center flex">
					<div className="w-full flex flex-col gap-y-6 justify-center items-center">
						<p className="text-[20px] text-center font-semibold text-black font-quasimoda w-10/12 md:w-full">
							¿Cuál es tu género?
						</p>
						<div className="min-w-40 flex justify-between gap-x-3">
							<label className="flex gap-x-2">
								<input
									className="relative h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-righ"
									type="radio"
									name="sexo"
									value="M"
									onChange={() => setGender('M')}
									defaultChecked
								/>
								<p className="font-quasimoda">Masculino</p>
							</label>

							<label className="flex gap-x-2">
								<input
									className="relative h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-righ"
									type="radio"
									name="sexo"
									value="F"
									onChange={() => setGender('F')}
								/>
								<p className="font-quasimoda">Femenino</p>
							</label>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide className="min-h-72 text-center flex">
					<div className="w-full flex flex-col gap-y-6 justify-center items-center">
						<p className="text-[20px] text-center font-semibold text-black font-quasimoda w-10/12 md:w-full">
							¿Tienes conyugue?
						</p>
						<div className="min-w-40 flex justify-between gap-x-3">
							<label className="flex gap-x-2">
								<input
									className="relative h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-righ"
									type="radio"
									name="sexo"
									value="M"
									onChange={() => setConyuge('si')}
									defaultChecked
								/>
								<p className="font-quasimoda">Si</p>
							</label>

							<label className="flex gap-x-2">
								<input
									className="relative h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-righ"
									type="radio"
									name="sexo"
									value="F"
									onChange={() => setConyuge('no')}
								/>
								<p className="font-quasimoda">No</p>
							</label>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="min-h-72 flex">
					<div className="w-full flex flex-col gap-y-6 justify-center items-center">
						<p className="text-[20px] text-center font-semibold text-black font-quasimoda w-10/12 md:w-full">
							¿Cuántos hijos?
						</p>
						<input
							type="number"
							className="focus:border-primary focus:outline-none py-4 px-6 w-24 rounded-2xl border-2 border-slate-300"
							onChange={e => setKids(Number(e.target.value))}
						/>
					</div>
				</SwiperSlide>

				<SwiperBackButton index={index} />
				<SwiperNextButton index={index} setStep={setStep} />
			</Swiper>
		</div>
	);
};

export default Questions;
