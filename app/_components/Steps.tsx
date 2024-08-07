import { FaCheck } from 'react-icons/fa';
import { LuClipboardEdit } from 'react-icons/lu';
import { FaChartBar } from 'react-icons/fa';
import { MdOutlineTextsms } from 'react-icons/md';

type StepsProps = {
	step: number;
	setStep: (step: number) => void;
};

export default function Steps({ step, setStep }: StepsProps) {
	return (
		<div className="w-full md:w-[800px] mt-[20px]">
			<ol className="flex items-center w-full text-sm font-medium text-center text-001C55  sm:text-base">
				<li
					className="flex md:w-full items-center text-primary font-bold sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 "
					onClick={() => {
						setStep(1);
					}}
				>
					<div className="bg-primary text-black flex gap-x-2 rounded-[30px] px-[20px] py-[10px] cursor-pointer items-center">
						{step === 1 && <LuClipboardEdit className="text-4xl" />}
						{step === 2 && <FaCheck className="w-[40px]" />}
						{step === 3 && <FaCheck className="w-[40px]" />}

						<span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 font-quasimoda">
							Ingresa tus datos
						</span>
					</div>
				</li>

				<li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 ">
					<span
						className={`flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 font-quasimoda
              ${
								(step === 2 &&
									'bg-primary text-black rounded-[30px] px-[20px] py-[10px]') ||
								(step == 3 &&
									'bg-primary text-black rounded-[30px] px-[20px] py-[10px]')
							}
              `}
					>
						{step === 1 && <FaChartBar className="w-[40px]" />}
						{step === 2 && <FaChartBar className="w-[40px]" />}
						Compara
					</span>
				</li>
			</ol>
		</div>
	);
}
