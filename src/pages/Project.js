import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import { projects } from '../helpers/projectsList'
import Logo from '../components/Logo';
import toolImg from '../img/tools.png'

const Project = () => {
  const {id} = useParams();
	const project = projects[id];

  return (
    <section>
      <header className='fixed top-0 left-0 w-full bg-black_2 py-5'>
        <Logo/>
      </header>

      <div className='w-2/3 mx-auto py-24 '>
        <p className='text-xl mb-5 text-red'><Link to={'/'}>Назад</Link></p>
        <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className='text-center font-bebas font-bold mb-8 uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl' 
          >
          {project.title}
        </motion.h1>
        <div className='mb-5 shadow shadow-orange-50'>
          <img src={project.imgBig} alt={project.title} />
        </div>

        <div className=' bg-white p-10 text-black' >
            <div className='mb-5 border-b-2 border-black pb-5'>
              <h4 className='mb-5 text-xl font-semibold'>Инструменты</h4>
              <ul className='flex gap-5' >
                <li>
                  <img src={toolImg} alt="tool" />
                </li>
                <li>
                  <img src={toolImg} alt="tool" />
                </li>
                <li>
                  <img src={toolImg} alt="tool" />
                </li>
              </ul>
            </div>
            <div  className='mb-5 border-b-2 border-black pb-5'>
              <h4 className='mb-5 text-xl font-semibold'>Дополнительно</h4>
              <ul className='flex flex-col gap-5 text-gray'>
                <li className='flex justify-between' >
                  <p>Срок выполнения: </p>
                  <p>7 дней</p>
                </li>
                <li className='flex justify-between' >
                  <p>Стоимость: </p>
                  <p>50 000 сом</p>
                </li>
                <li className='flex justify-between' >
                  <p>Трафик</p>
                  <p>30%</p>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='mb-5 text-xl font-semibold'>Визуальные акценты и айдентика</h4>
              <ul className='flex flex-col gap-5' >
                <li className='flex justify-between' >
                  <p>Шрифт: </p>
                  <p>Inter, Bebas Neue</p>
                </li>
                <li className='flex justify-between items-center'>
                  <p>Основной цвет: </p>
                  <div className='flex gap-4' >
                    <div>
                      <div className='mb-2 w-16 h-16 bg-black rounded-full' />
                      <span>000000</span>
                    </div>
                    <div>
                      <div  className='mb-2 w-16 h-16 bg-[#f5f5f5] rounded-full' />
                      <span> F5F5F5</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Project