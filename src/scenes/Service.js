import React from 'react'
import ServiceItem from '../components/ServiceItem'
import { motion } from "framer-motion";

const services = [
  {
    title: 'Полноценный сайт',
    text: `Наш дизайнер свяжется с вами и задаст вопросы, после которых приготовит несколько пробных дизайнов, из которых вы выберите одну. 
    Backend добавляется в зависимости от сайта.`  ,
    items: `• Дизайн
    • Front end
    • Back end`
  },
  {
    title: 'Доработка сайта',
    text: `Не устраивает ваш личный сайт, хотите поменять пару моментов, тогда это то, что вам нужно.`,
    items: `• Доробатываем сайт
    • Исправляем ошибки допущенные при создании сайта.`
  },
  {
    title: 'Дополнение сайта',
    text: `Вас не всё устраивает и вы хотите дополнить или улучшить сайт. У нас есть что вам предложить.`,
    items: `• Дополним или улучшим визуальный вид сайта, добавим новый функционал 
    • Подкорректируем дизайн на ваше усмотрение
    • Изменим ваш Frontend
    • Дополним функционал через Backend`
  },
  {
    title: 'Smm',
    text: `Хотите увеличить клиентов, но не знаете как. У вас есть сайт, но люди туда редко заходят. Мы вам поможем
   `,
    items: ` • Продвижение в соц.сетях
    • Хорошая и качественная видео съёмка (мобилография)
    • Увлекающий и качественный текст (копирайтинг)`
  },
]

const Service = () => {
  return (
  <section  className=' bg-service bg-no-repeat bg-center'>
    <div id='service' className='w-2/3 mx-auto py-20 md:py-20'>
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className='font-bebas font-bold mb-8 uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
        >
            Услуги
        </motion.h2>

      <div className='flex flex-col gap-8'>

      {
        services.map(s => 
        <div key={s.title}>
          <ServiceItem
            props={s}
          />
        </div>
        )
      }
      

      </div>
    </div>
  </section>
  )
}

export default Service