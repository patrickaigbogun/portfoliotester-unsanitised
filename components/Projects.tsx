import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function Projects({}: Props) {
  // Sample projects data
  const projects = [
    { id: 1, title: 'Project A' },
    { id: 2, title: 'Project B' },
    { id: 3, title: 'Project C' },
    { id: 4, title: 'Project D' },
    { id: 5, title: 'Project E' },
  ];

  return (
    <motion.div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

      <div className='relative w-full flex scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project) => (
          // Each project element needs a unique key
          <div key={project.id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              src="https://media.gettyimages.com/id/515481284/photo/yoga-meditating-man-with-big-afro-hair.jpg?s=612x612&w=0&k=20&c=BYHe1wlnQ4zawN8PpO_Usc3hYMDTqYM3hXZq_VIIkxU="
              alt=""
            />
            <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>
                  {project.title}
                </span>
              </h4>

              <p className='text-lg text-center md:text-left'>
                {/* Project description */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eos veniam alias numquam recusandae laborum ipsum praesentium quibusdam ab corporis, officiis, sapiente dicta maxime molestias? Quia tempora quasi esse neque.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  );
}

export default Projects;
