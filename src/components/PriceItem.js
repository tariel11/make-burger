import React from 'react'
import Button from './Button'

const PriceItem = () => {
  return (
    <div className='p-5 bg-white rounded-xl text-black text-lg'>
      <h3 className='text-xl font-semibold mb-7'>Сайт для компании</h3>
      <ul className='flex flex-col gap-5 mb-7'>
        <li className='text-red'>От 30 000 сом</li>
        <li>Уникальный дизайн</li>
        <li>Разделы и подразделы с услугами</li>
        <li>Правки бесплатны</li>
        <li>Регистрация сайта в Google</li>
      </ul>
     <Button/>
    </div>
  )
}

export default PriceItem