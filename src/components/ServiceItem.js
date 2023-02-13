import React from 'react'
import s1 from '../img/amico.png'
import Button from './Button'

const ServiceItem = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5 bg-black_2 py-8 px-5 md:p-2 rounded-xl'>
      <div className='hidden w-full md:block'>
        <img src={s1} alt="s1" className='w-full object-contain'/>
      </div>
      <div className='flex flex-col justify-center'>
        <h3 className='font-seibold text-2xl md:text-3xl mb-7'>Дизайн</h3>
        <p className='text-sm md:text-xl mb-7'>
          Делаем современный дизайн, под ваш вкус. Интернет магазин, Корпоротивный сайт, Лендинги, Адаптивный дизайн все это к нам. Работаем с такими программами как: <span className='text-red'>Figma, Adobe Photoshop</span>
        </p>
        <Button/>
      </div>
    </div>
  )
}

export default ServiceItem