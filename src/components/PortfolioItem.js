import React from 'react'
import { NavLink } from 'react-router-dom'


const PortfolioItem = ({title, img, index}) => {


  return (
    <NavLink to={`/project/${index}`} > 
      <div className='relative text-center group cursor-pointer duration-500'>
        <div className=' absolute w-full bg-black_bg top-0 left-0 h-full duration-500 z-10  group-hover:opacity-0' ></div>
        <div className='w-full mb-5'>
          <img src={img} alt="test" className='w-full object-contain' />
        </div>
        <p className='text-lg md:text-xl'> {title} </p>
      </div>
    </NavLink>
  )
}

export default PortfolioItem