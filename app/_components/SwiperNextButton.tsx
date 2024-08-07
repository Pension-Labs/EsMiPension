'use client';
import { useSwiper } from 'swiper/react';
import { useRouter } from 'next/navigation';

//import icons
import { RiArrowRightSLine } from 'react-icons/ri';

interface SwiperNextButtonsProps {
	index: number;
	setStep: React.Dispatch<React.SetStateAction<number>>;
}

const SwiperNextButton: React.FC<SwiperNextButtonsProps> = ({
	index,
	setStep,
}) => {
	const swipe = useSwiper();

	const handleNext = () => {
		setStep(2);
	};
	const handleStop = () => {
		console.log('mal');
		return;
	};

	return (
		<>
			{index < 6 ? (
				<button
					className="absolute w-11 h-11 bottom-0 right-0 z-[10000] rounded-full mb-2  bg-primary text-primario  flex items-center justify-center"
					onClick={() => swipe.slideNext()}
				>
					<RiArrowRightSLine className="text-3xl" />
				</button>
			) : (
				<>
					<button
						onClick={() => handleNext()}
						className=" absolute right-0 bottom-0 bg-primary z-[10000] p-3 w-100 mb-2 rounded-xl text-primario font-quasimoda text-[20px] font-bold "
					>
						¡Ver resultados!
					</button>
				</>
			)}
		</>
	);
};

export default SwiperNextButton;
