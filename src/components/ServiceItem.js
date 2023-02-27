import React from 'react'
import s1 from '../img/amico.png'
import Button from './Button'

const ServiceItem = ({props}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-x-5 bg-black_2 p-5 rounded-xl'>
      <div className='hidden w-full md:block'>
        <img src={s1} alt="s1" className='w-full h-full object-contain'/>
      </div>
      <div className='flex flex-col justify-center'>
        <h3 className='font-semibold text-2xl sm:text-3xl md:text-4xl mb-7'> {props.title} </h3>
        <p className='text-xl font-normal  mb-7'> 
        {props.text}
         <span className='block text-red'> {props.items} </span>
        </p>
        <div className=' md:mr-auto'>
          <Button/>
        </div>
      </div>
    </div>
  )
}

export default ServiceItem