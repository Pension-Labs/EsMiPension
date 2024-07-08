/* eslint-disable react/prop-types */
import { useSwiper } from 'swiper/react';
import { RiArrowLeftSLine } from 'react-icons/ri';
const SwiperBackButtons = ({ index }) => {
	const swipe = useSwiper();
	const handleSkip = () => {
		const onBoarding = document.getElementById('onboarding');
		const login = document.getElementById('login');
		onBoarding.classList.add('hidden');
		login.classList.remove('sm:hidden');
	};
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

export default SwiperBackButtons;
