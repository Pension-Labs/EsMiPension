import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import SwiperNextButtons from '../SwiperNextButtons';
import SwiperBackButtons from '../SwipeBackButton';

const Questions = () => {
	const [index, setIndex] = useState(0);
	//form input states
	const [conyuge, setConyuge] = useState('yes');
	const [pension, setPension] = useState('');
	const [afp, setAfp] = useState('');
	const [apv, setApv] = useState('');
	const [age, setAge] = useState('');
	const [salary, setSalary] = useState('');
	const [gender, setGender] = useState('');
	const [kids, setKids] = useState('');

	const swiperRef = useRef(null);

	return (
		<div className="w-1/2 min-h-80 mx-auto shadow-2xl p-10 rounded-2xl border-2 border-slate-200">
			<Swiper
				ref={swiperRef}
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={1}
				navigation={false}
				pagination={{
					type: 'fraction',
				}}
				onSlideChange={swiper => setIndex(swiper.activeIndex)}
			>
				<SwiperSlide className="flex items-center text-center ">
					<div className="flex flex-col gap-y-6 justify-center items-center">
						<p className="text-[30px] text-black font-bold font-quasimoda">
							Una pequeña guia
						</p>

						<p className="text-[20px] text-black font-quasimoda w-10/12 md:w-full">
							Te haremos algunas preguntas para obtener tu perfil, mientras te
							ayudaremos a entender mas del sistema de Pensiones Chileno 🇨🇱
						</p>

						<button className="bg-primary px-[32px] py-[8px] rounded-[30px]">
							<p
								className="text-[20px] text-black font-quasimoda font-bold"
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

						<button
							className="bg-secondary px-[16px] py-[8px] rounded-[30px]"
							onClick={() => setStep(2)}
						>
							<p className="text-[12px] text-white font-quasimoda font-bold">
								Saltar
							</p>
						</button>
					</div>
				</SwiperSlide>

				<SwiperSlide className="flex">
					<div className="w-full flex flex-col gap-y-6 justify-center items-center">
						<p className="text-4xl text-black ">
							¿Con qué pensión te quieres jubilar?
						</p>
						<input />
					</div>
				</SwiperSlide>
				<SwiperSlide className="text-center flex">
					<div className="w-full flex flex-col gap-y-6 justify-center items-center">
						<p className="text-4xl text-black">
							¿Cuánto tienes actualmente en la AFP?
						</p>
						<input />
					</div>
				</SwiperSlide>
				<SwiperSlide className="text-center flex">
					<div className="w-full flex flex-col gap-y-6 justify-center items-center">
						<p className="text-4xl text-black">
							¿Tienes saldo actualmente en APV?
						</p>
						<input />
					</div>
				</SwiperSlide>
				<SwiperSlide className="text-center flex">
					<div className="w-full flex flex-col gap-y-6 justify-center items-center">
						<p className="text-4xl text-black">¿Cuántos años tienes?</p>
						<input />
					</div>
				</SwiperSlide>
				<SwiperSlide className="text-center flex">
					<div className="w-full flex flex-col gap-y-6 justify-center items-center">
						<p className="text-4xl text-black">¿Cuánto ganas actualmente?</p>
						<input />
					</div>
				</SwiperSlide>
				<SwiperSlide className="text-center flex">
					<div className="w-full flex flex-col gap-y-6 justify-center items-center">
						<p className="text-4xl text-black">¿Cuál es tu género?</p>
						<input />
					</div>
				</SwiperSlide>
				<SwiperSlide className="text-center flex">
					<div className="w-full flex flex-col gap-y-6 justify-center items-center">
						<p className="text-4xl text-black">¿Tienes cónyuge?</p>
						<input />
					</div>
				</SwiperSlide>
				<SwiperSlide className="text-center flex">
					<div className="w-full flex flex-col gap-y-6 justify-center items-center">
						<p className="text-4xl text-black">¿Cuántos hijos tienes?</p>
						<input />
					</div>
				</SwiperSlide>
				<SwiperNextButtons index={index} />
				<SwiperBackButtons index={index} />
			</Swiper>
		</div>
	);
};

export default Questions;
