import React from 'react'
import { useLocation } from 'react-router-dom';
import Logo from '../components/Logo'
import NavList from '../components/NavList'

const Footer = () => {
  const {pathname} = useLocation();

  return (
    <footer>
      <div className='w-2/3 mx-auto py-12 md:py-20'>
        <div className='w-6/6 mx-auto text-center flex flex-col gap-14 text-sm md:text-lg'>
          <Logo/>

          {pathname.includes('project') 
            ? (<></>)
            : ( <NavList state={true} />)
          }
          {/* <div  className='flex justify-center gap-8'>
            <a href="tel:+996(708) 79 11 92">+996(708) 79 11 92</a>
            <a href="email:mtystudio@gmail">@mtystudio@gmail</a>
          </div>
          <div className='flex justify-center gap-5'>
            <a href="https://instagram.com">Инстаграмм</a>
            <a href="https://facebok.com">Фейсбук</a>
          </div> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer