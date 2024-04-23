//workexperience.tsx
import React from 'react'
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {}

function Experience({ }: Props) {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1.3,
			}}
			className='h-screen flex relative flex-col text-left
    md:flex-row px-10 justify-evenly mx-auto items-center'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Experience
			</h3>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10'>
				<ExperienceCard />
				<ExperienceCard />
				<ExperienceCard />
				<ExperienceCard />
			</div>


		</motion.div>
	);
}

export default Experience
