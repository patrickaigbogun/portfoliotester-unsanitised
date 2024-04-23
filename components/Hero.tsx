//hero.tsx
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

export default function Hero({}: Props) {
    const [text, helper] = useTypewriter({
        words: [
            "Hi The Name's Patrick",
            "Coffee is better than Oxygen",
            "<Coding/>, Logic, Art, Philosophy"
        ],
        loop: true,
        delaySpeed: 2000,
      })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden md:p-10 lg:p-20'>
  {/* ... content */}
        <BackgroundCircles />
        <Image
            src='https://media.gettyimages.com/id/1382470869/photo/african-american-man-with-african-hairstyle-using-smart-phone.jpg?s=612x612&w=0&k=20&c=MGxBUVKI67swpU-T_pmJGG6HtvO1xCxUwpyBpX6ni7Q='
            alt='Hero Image'
            className='rounded-full object-cover w-48 md:w-64 lg:w-80 h-48 md:h-64 lg:h-80'
        />

        
        <div className=' z-20 '>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                Software developer
            </h2>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-[10px] md:tracking-[15px]'> 
                <span>{text}</span>
                <Cursor cursorColor="green" />
            </h1>

            
            <div className='flex space-x-4 md:space-x-8 lg:space-x-12 justify-center'>
                <Link href='#about'>
                    <button className='heroButton'>About</button>
                </Link>
                <Link href='#experience'>
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href='#skills'>
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href='#projects'>
                    <button className='heroButton'>Projects</button>
                </Link>    
            </div>

        </div>
    </div>
  )
}
