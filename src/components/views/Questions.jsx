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
	const swiperRef = useRef(null);
	const [index, setIndex] = useState(0);

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
				<SwiperSlide className=" min-h-72  flex">
					<div className="w-full flex flex-col gap-y-6 justify-center items-center">
						<p className="text-4xl">¿Con qué pensión te quieres jubilar? </p>
						<input
							type="text"
							className="py-4 px-6 w-9/12 rounded-2xl border-2 border-slate-300"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide className="min-h-72 text-center  flex">
					<div className="w-full flex flex-col gap-y-6 justify-center items-center">
						<p className="text-4xl">¿Cuánto tienes actualmente en la AFP?</p>
						<input
							type="text"
							className="py-4 px-6 w-9/12 rounded-2xl border-2 border-slate-300"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide className="min-h-72 text-center  flex">
					<div className="w-full flex flex-col gap-y-6 justify-center items-center">
						<p className="text-4xl">¿Tienes saldo actualmente en APV?</p>
						<input
							type="text"
							className="py-4 px-6 w-9/12 rounded-2xl border-2 border-slate-300"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide className="min-h-72 text-center  flex">
					<div className="w-full flex flex-col gap-y-6 justify-center items-center">
						<p className="text-4xl">¿Cuántos años tienes?</p>
						<input
							type="text"
							className="py-4 px-6 w-9/12 rounded-2xl border-2 border-slate-300"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide className="min-h-72 text-center  flex">
					<div className="w-full flex flex-col gap-y-6 justify-center items-center">
						<p className="text-4xl">¿Cuánto ganas actualmente?</p>
						<input
							type="text"
							className="py-4 px-6 w-9/12 rounded-2xl border-2 border-slate-300"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide className="min-h-72 text-center  flex">
					<div className="w-full flex flex-col gap-y-6 justify-center items-center">
						<p className="text-4xl">¿Cuál es tu genero?</p>
						<input
							type="text"
							className="py-4 px-6 w-9/12 rounded-2xl border-2 border-slate-300"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide className="min-h-72 text-center  flex">
					<div className="w-full flex flex-col gap-y-6 justify-center items-center">
						<p className="text-4xl">¿Tienes conyugue?</p>
						<input
							type="text"
							className="py-4 px-6 w-9/12 rounded-2xl border-2 border-slate-300"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide className="min-h-72 text-center  flex">
					<div className="w-full flex flex-col gap-y-6 justify-center items-center">
						<p className="text-4xl">¿Cuántos hijos tienes?</p>
						<input
							type="text"
							className="py-4 px-6 w-9/12 rounded-2xl border-2 border-slate-300"
						/>
					</div>
				</SwiperSlide>
				<SwiperNextButtons index={index} />
				<SwiperBackButtons index={index} />
				{/* <div className="bg-red-200 relative h-16 mx-auto flex items-center justify-center w-52">
			</div> */}
			</Swiper>
		</div>
	);
};

export default Questions;
