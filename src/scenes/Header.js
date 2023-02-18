import React from 'react'
import header_bg from '../img/header-bg.jpeg'
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className='bg-black py-12 md:py-20'>
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
        <div className='mb-5'>
          <img src={header_bg} alt="header_bg" className='w-full object-contain' />
        </div>
        <motion.p 
          className='text-gray text-center w-2/3 mx-auto md:text-xl'
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
      </div>
    </header>
  )
}

export default Header