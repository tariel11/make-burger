import React, { useState } from 'react'
import Logo from '../components/Logo';
import NavList from '../components/NavList';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className='fixed md:relative w-full z-20 bg-black_2'>
      <div className='w-2/3 mx-auto flex items-center justify-center sm:flex-col sm:gap-5 lg:flex-row lg:gap-[100px] py-4'>

        <div onClick={() => setShowMenu(!showMenu)} className=' z-50 absolute top-1/2 left-6 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-1 cursor-pointer sm:hidden'>
          <span className=' w-5 h-[2px] bg-white'></span>
          <span className=' w-5 h-[2px] bg-white'></span>
          <span className=' w-5 h-[2px] bg-white'></span>
        </div>

        <div className={'absolute top-full w-3/4 h-[100vh] z-40 bg-black_2 p-5 ' + (showMenu ? 'block left-0' : 'hidden -left-full')  }>
          <ul className='flex flex-col gap-5 '>
            <li onClick={() => setShowMenu(false)}  className=' border-b border-white' ><a href="#about">О нас</a></li>
            <li onClick={() => setShowMenu(false)}  className=' border-b border-white' ><a href="#portfolio">Наши работы</a></li>
            <li onClick={() => setShowMenu(false)}  className=' border-b border-white' ><a href="#service">Услуги</a></li>
            <li onClick={() => setShowMenu(false)}  className=' border-b border-white' ><a href="#price">Цены</a></li>
            <li onClick={() => setShowMenu(false)}  className=' border-b border-white' ><a href="#application">Связаться с нами</a></li>
            <li onClick={() => setShowMenu(false)} ><a href="tel:+996(708) 79 11 92">+996(708) 79 11 92</a></li>
            <li onClick={() => setShowMenu(false)} ><a href="tel:+996(708) 79 11 92">+996(708) 79 11 92</a></li>
          </ul>
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