import React from 'react'

const NavList = ({state}) => {
  return (
    <ul className={(state ? 'flex gap-9 flex-wrap justify-center' : 'hidden sm:flex justify-between items-center w-full text-lg')}>
      <li><a href="#!">О нас</a></li>
      <li><a href="#!">Наши работы</a></li>
      <li><a href="#!">Услуги</a></li>
      <li><a href="#!">Цены</a></li>
      <li><a href="#!">Связаться с нами</a></li>
    </ul>
  )
}

export default NavList