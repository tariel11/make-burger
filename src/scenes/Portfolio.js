import React from 'react'
import PortfolioItem from '../components/PortfolioItem'
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section>
      <div className='w-5/6 mx-auto py-8'>
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
          ПОРТФОЛИО
        </motion.h2>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>

          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.7 }}
             transition={{ duration: 0.7 }}
             variants={{
               hidden: { opacity: 0, x: -100 },
               visible: { opacity: 1, x: 0 },
             }}
          >
            <PortfolioItem/>
          </motion.div>

          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.7 }}
             transition={{ duration: 1 }}
             variants={{
               hidden: { opacity: 0, x: 100 },
               visible: { opacity: 1, x: 0 },
             }}
          >
            <PortfolioItem/>
          </motion.div>

          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.7 }}
             transition={{ duration: 1.3 }}
             variants={{
               hidden: { opacity: 0, x: -100 },
               visible: { opacity: 1, x: 0 },
             }}
          >
            <PortfolioItem/>
          </motion.div>

          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.7 }}
             transition={{ duration: 1.6 }}
             variants={{
               hidden: { opacity: 0, x: 100 },
               visible: { opacity: 1, x: 0 },
             }}
          >
            <PortfolioItem/>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Portfolio