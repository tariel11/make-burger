import React from 'react'
import Button from '../components/Button'
import { motion } from "framer-motion";

const Application = () => {
  return (
    <section className=' bg-application bg-no-repeat bg-cover'>
      <div className='w-5/6 mx-auto py-12 md:py-20'>

        <div className='relative bg-black_2 p-5 md:p-8 md:grid grid-cols-2 text-sm md:text-xl'>
          <div className=''>
            <h3 className='font-semibold mb-8 text-2xl md:text-4xl lg:text-5xl '>Форма заявки</h3>
            <p>Если вы хотите создать собственный сайт, заполните заявку и мы свяжемся с вами в ближайшее времяю</p>
          </div>
          <hr className='hidden md:block absolute top-0 left-1/2 w-[2px] h-full bg-gray'/>
          <div className='mt-8 md:pl-8'>
            <form className='flex flex-col gap-8'>
              <input className=' bg-inherit pb-2 border-b-2 border-gray' type="text" required placeholder='Ваше имя'/>
              <input className=' bg-inherit pb-2 border-b-2 border-gray' type="text" required placeholder='Email'/>
              <input className=' bg-inherit pb-2 border-b-2 border-gray' type="text" required placeholder='Письмо'/>
              <Button/>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Application