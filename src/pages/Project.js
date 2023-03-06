import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import { projects } from '../helpers/projectsList'
import Logo from '../components/Logo';

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
               {project.tools.map(tool => 
                  <li key={tool} className=''>
                    <img src={tool} alt={tool} />
                  </li>
                )}
              </ul>
            </div>
            <div  className='mb-5 border-b-2 border-black pb-5'>
              <h4 className='mb-5 text-xl font-semibold'>Дополнительно</h4>
              <ul className='flex flex-col gap-5 text-gray'>
                <li className='flex justify-between gap-2' >
                  <p>Срок выполнения: </p>
                  <p> {project.time} дней</p>
                </li>
                <li className='flex justify-between gap-2' >
                  <p>Стоимость: </p>
                  <p> {project.price} <span>сом</span></p>
                </li>
                <li className='flex justify-between gap-2' >
                  <p>Трафик</p>
                  <p> {project.traffic} % </p>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='mb-5 text-xl font-semibold'>Визуальные акценты и айдентика</h4>
              <ul className='flex flex-col gap-5' >
                <li className='flex justify-between gap-2' >
                  <p>Шрифт: </p>
                  <p> {project.font} </p>
                </li>
                <li className='flex justify-between items-center gap-2'>
                  <p>Основной цвет: </p>
                  <ul className='flex gap-4' >
                    {project.colors.map(color =>    
                      <li key={color}>
                        <div className={`mb-2 w-10 h-10 mx-auto rounded-full bg-[${color}] ` } />
                        <span className=' text-xs' >{color}</span>
                      </li>
                      )}
                  </ul>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Project