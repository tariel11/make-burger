import React from 'react'
import header_bg from '../img/home/header_bg.jpeg'
import { motion } from "framer-motion";
import Button from '../components/Button';

const Header = () => {
  return (
    <header className='bg-black pt-[100px] sm:pt-[140px] pb-12 md:pb-20'>
      <div>
        <motion.h1 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: { opacity: 1, scale: 1 },
          }}
          className=' font-bold font-bebas uppercase text-center w-[95%] mx-auto text-red mb-8 text-3xl md:text-7xl xl:text-[90px]'
        >
          Создать сайт проще, <br /> чем открыть ноутбук
        </motion.h1>
        <motion.p 
          className='text-gray text-center w-3/5 mx-auto md:text-xl mb-5'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          >
            Мы - компания по разработке ПО, которое превращает ваши идеи в эффективные инструменты для бизнеса
          </motion.p>
          <Button
              text='Обсудить проект'
            />
        <div className='mb-5'>
          <img src={header_bg} alt="header_bg" className=' mt-10 w-full object-contain' />
        </div>
      </div>
    </header>
  )
}

export default Header