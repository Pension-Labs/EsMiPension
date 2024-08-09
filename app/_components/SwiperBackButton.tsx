import { useSwiper } from 'swiper/react';

//import icons
import { RiArrowLeftSLine } from 'react-icons/ri';

interface SwiperNextButtonsProps {
	index: number;
}
const SwiperBackButton: React.FC<SwiperNextButtonsProps> = ({ index }) => {
	const swipe = useSwiper();

	return (
		<>
			{index > 0 && (
				<button
					className="absolute w-11 h-11 bottom-0 left-0 z-[10000] rounded-full mb-2  bg-secundario text-primario  flex items-center justify-center"
					onClick={() => swipe.slidePrev()}
				>
					<RiArrowLeftSLine className="text-3xl" />
				</button>
			)}
		</>
	);
};

export default SwiperBackButton;
