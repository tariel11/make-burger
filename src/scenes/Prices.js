import React from 'react'
import PriceItem from '../components/PriceItem'
import { motion } from "framer-motion";
import { prices } from '../helpers/prices';


const Prices = () => {
  return (
    <section >
      <div id='price' className='w-2/3 mx-auto py-20 md:py-20'>
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
            цены
        </motion.h2>
        <div className='w-full  ss:w-4/6 lg:w-full mx-auto flex flex-col gap-8 lg:flex-row'>
          
          {prices.map((price, index) => 
            <PriceItem
              key={price.title}
              title={price.title}
            />
          )}

        </div>
      </div>
    </section>
  )
}

export default Prices