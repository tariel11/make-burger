import React from 'react'
import Logo from '../components/Logo';
import NavList from '../components/NavList';

const Navbar = () => {

  return (
    <nav className='relative bg-black_2'>
      <div className='w-2/3 mx-auto flex items-center justify-center sm:flex-col sm:gap-5 lg:flex-row lg:gap-[100px] py-4'>

        <div className='absolute top-1/2 left-6 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-1 cursor-pointer sm:hidden'>
          <span className=' w-5 h-[2px] bg-white'></span>
          <span className=' w-5 h-[2px] bg-white'></span>
          <span className=' w-5 h-[2px] bg-white'></span>
        </div>
 
        <div> 
          <Logo/>
        </div>

        <NavList/>

      </div>
    </nav>
  )
}

export default Navbar