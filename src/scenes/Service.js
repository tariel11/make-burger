import React from 'react'
import ServiceItem from '../components/ServiceItem'
import { motion } from "framer-motion";

import { services } from '../helpers/services';

const Service = () => {
  return (
  <section  className='service'>
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
        services.map(service => 
        <div key={service.title}>
          <ServiceItem
            service={service}
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