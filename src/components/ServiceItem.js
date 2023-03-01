import React from 'react'
import Button from './Button'

const ServiceItem = ({service}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-x-5 bg-black_2 p-5 rounded-xl'>
      <div className='hidden w-full md:block'>
        <img src={service.img} alt="s1" className='w-full h-full object-contain'/>
      </div>
      <div className='flex flex-col justify-center'>
        <h3 className='font-semibold text-2xl sm:text-3xl  mb-7'> {service.title} </h3>
        <div className='text-base font-normal  mb-7'> 
          <p className=' text-gray'>
          {service.text}  
          </p>
          <ul>
            {
              service.items.map(i =>
               <li key={i} className='flex items-start gap-2 text-white mt-2'>
                  <svg className="w-4 mt-1 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                 <p>{i}</p>
               </li> )
            }
          </ul>
        
        </div>
        <div className=' md:mr-auto'>
          <Button/>
        </div>
      </div>
    </div>
  )
}

export default ServiceItem