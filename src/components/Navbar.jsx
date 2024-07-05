import React, { useContext } from 'react';

const Navbar = () => {
	return (
		<nav className="bg-white border-gray-200 w-full landscape:min-w-2/6 md:w-full  md:flex md:flex-row md:justify-between">
			<div className="max-w-screen-xl flex md:w-full justify-between items-center mx-auto p-4">
				<a>
					<p>Logo</p>
				</a>

				<div className="bg-white    z-[900] h-screen md:h-auto items-center justify-between w-full md:relative  md:flex md:w-auto md:order-1`">
					<ul className="flex flex-col items-center. text-center  p-12 md:p-0 mt-4 gap-y-4 font-medium border bg-white border-gray-100 rounded-lg text-sm lg:text-lg md:flex-row md:gap-x-4 md:mt-0 md:border-0  ">
						<li>Inicio</li>
						<li>Acerca</li>
						<li>FAQ</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
