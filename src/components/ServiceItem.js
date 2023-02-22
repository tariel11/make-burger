import React from 'react'
import s1 from '../img/amico.png'
import Button from './Button'

const ServiceItem = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-x-5 bg-black_2 p-10 rounded-xl'>
      <div className='hidden w-full md:block'>
        <img src={s1} alt="s1" className='w-full h-full object-contain'/>
      </div>
      <div className='flex flex-col justify-center'>
        <h3 className='font-semibold text-2xl sm:text-3xl md:text-4xl mb-7'>Дизайн</h3>
        <p className='text-xl font-normal  mb-7'> 
          Делаем современный дизайн, под ваш вкус. Интернет магазин, Корпоротивный сайт, Лендинги, Адаптивный дизайн все это к нам. Работаем с такими программами как: <span className='text-red'>Figma, Adobe Photoshop</span>
        </p>
        <div className='mr-auto'>
          <Button/>
        </div>
      </div>
    </div>
  )
}

export default ServiceItem