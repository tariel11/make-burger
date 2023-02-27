import React, { useState } from 'react'
import test from '../img/test.jpeg'
import test_psim from '../img/psim.jpeg'


const PortfolioItem = () => {

  const [showModal, setShowModal] = useState(false)

  return (
    <div> 
      <div className='relative text-center group cursor-pointer duration-500'>
        <div className=' absolute w-full bg-black_bg top-0 left-0 h-full duration-500 z-10  group-hover:opacity-0' ></div>
        <div onClick={() => setShowModal(!showModal)} className='w-full mb-5'>
          <img src={test} alt="test" className='w-full object-contain' />
        </div>
        <p className='text-lg md:text-xl'>Сайт для YKL</p>
      </div>

      <div className={"" + (showModal ? 'block' : 'hidden')}>
        <div className=' absolute w-full bg-black_bg top-0 left-0 h-full duration-500 z-10  group-hover:opacity-0' ></div>
        <div className=' bg-slate-500 '>
          <div>
            <img src={test_psim} alt="test" />
          </div>
          <div>
            <h2>Сайт для магазина одежды - YKL</h2>
            <p>Задача: сделать крутой сайт</p>
          </div>
          <div>
            <h3>Инструменты</h3>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div>
            <h3>Дополнительно</h3>
            <ul>
              <li>Срок выполнения: </li>
              <li>Стоимость</li>
              <li>Трафик</li>
              <li>7 дней</li>
              <li>50 000 сом</li>
              <li>30%</li>
            </ul>
          </div>
          <div>
            <h3>Визуальные акценты и айдентика</h3>
            <ul>
              <li>Шрифт: </li>
              <li>Основной цвет: </li>
              <li>Limerick-Serial & Inter</li>
              <li>Limerick-Serial & Inter</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem