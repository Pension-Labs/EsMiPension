/* eslint-disable react/prop-types */
import { useSwiper } from 'swiper/react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { useNavigate } from 'react-router';
const SwiperNextButtons = ({ index }) => {
	const swipe = useSwiper();
	const navigate = useNavigate();
	const handleSkip = () => {
		const onBoarding = document.getElementById('onboarding');
		const login = document.getElementById('login');
		onBoarding.classList.add('hidden');
		login.classList.remove('sm:hidden');
	};

	const handleGoSimulator = () => {
		navigate('/simulador');
	};
	return (
		<>
			{index < 7 ? (
				<button
					className="absolute w-11 h-11 bottom-0 right-0 z-[10000] rounded-full mb-2  bg-secundario text-primario  flex items-center justify-center"
					onClick={() => swipe.slideNext()}
				>
					<RiArrowRightSLine className="text-3xl" />
				</button>
			) : (
				<>
					<button
						onClick={handleGoSimulator}
						className="absolute right-0 bottom-0 bg-secundario z-[10000] p-3 w-100 mb-2 rounded-xl text-primario"
					>
						Ir a simulador
					</button>
				</>
			)}
		</>
	);
};

export default SwiperNextButtons;
