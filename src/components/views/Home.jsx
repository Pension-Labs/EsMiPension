import React from 'react';
//import hooks
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	const handleButton = () => {
		navigate('/preguntas');
	};
	return (
		<div className="flex flex-col justify-center items-center min-h-[500px]">
			<h1 className="font-bold text-7xl text-center mb-20">
				Es tu pensión y nadie
				<br />
				te la puede quitar
			</h1>
			<button
				onClick={handleButton}
				className="bg-primario text-secundario font-bold py-4 px-16 rounded-3xl"
			>
				COMENZAR
			</button>
		</div>
	);
};

export default Home;
