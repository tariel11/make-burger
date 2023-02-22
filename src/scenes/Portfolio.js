import React from 'react'
import PortfolioItem from '../components/PortfolioItem'
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section >
      <div id='portfolio' className='w-2/3 mx-auto py-20 md:py-20'>
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

          <div>
            <PortfolioItem/>
          </div>

          <div>
            <PortfolioItem/>
          </div>

          <div>
            <PortfolioItem/>
          </div>

          <div>
            <PortfolioItem/>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Portfolio