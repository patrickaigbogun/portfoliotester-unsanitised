//contactme.tsx
import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
type Props = {}
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
	name: string
	email: string
	subject: string
	message: string

}


function ContactMe({ }: Props) {

	const {
		register,
		handleSubmit,
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:vosekdba@gmail.com?subject=${formData.subject} 
      body=Hi my name is, ${formData.name}.${formData.message}
      (${formData.email}) `
	};

	return (
		<div className='flex flex-col md:flex-row space-y-10 md:space-y-0 items-center justify-center md:justify-between max-w-7xl px-10 mx-auto'>

			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl' >
				Contact
			</h3>

			<div className='flex flex-col space-y-10 md:w-1/2'>
				<h4 className='text-4xl text-semibold text-center' >
					I have got just what you need.{" "}
					<span className='underline decoration-[#F7AB0A]/50' >
						Let us Talk
					</span>

				</h4>
				<div className='space-y-10' >
				<div className='flex flex-col space-y-5 w-full md:w-1/2'>
						<PhoneIcon className=' text-[#F7AB0A] h-7 w-7 animate-pulse ' />
						<p>
							+2341234567
						</p>
					</div>

					<div className=' flex items-center space-x-5 justify-center ' >
						<EnvelopeIcon className=' text-[#F7AB0A] h-7 w-7 animate-pulse ' />
						<p>
							vosekdba@gmail.com
						</p>
					</div>

					<div className=' flex items-center space-x-5 justify-center ' >
						<MapPinIcon className=' text-[#F7AB0A] h-7 w-7 animate-pulse ' />
						<p>
							born in Edo
						</p>
					</div>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className='flex flex-col space-y-2 w-fit mx-auto' >
						<div className='flex space-x-2'>
							<input {...register('name')} placeholder='Name' className='contactInput w-full md:w-1/2' type="text" />
							<input  {...register('email')} placeholder='Email' className='contactInput w-full md:w-1/2' type="email" />
						</div>

						<input  {...register('subject')} placeholder='Subject' className='contactInput w-full md:w-1/2' type="text" />
 
						<textarea  {...register('message')} placeholder='Message' className='contactInput w-full md:w-1/2' />
						<button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg md:w-fit'>
							Submit
						</button>

					</form>
				</div>
			</div>

		</div>
	)
}

export default ContactMe
