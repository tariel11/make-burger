import React from 'react'

const NavList = ({state}) => {
  return (
    <ul className={(state ? 'flex gap-9 flex-wrap justify-center' : 'hidden sm:flex justify-between items-center w-full text-lg')}>
      <li><a href="#about">О нас</a></li>
      <li><a href="#portfolio">Наши работы</a></li>
      <li><a href="#service">Услуги</a></li>
      <li><a href="#price">Цены</a></li>
      <li><a href="#application">Связаться с нами</a></li>
    </ul>
  )
}

export default NavList