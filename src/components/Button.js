import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'

const Button = ({text = 'Заказать', width}) => {
  const isDescktop = useMediaQuery("(min-width: 480px)")

  isDescktop ? width = "w-[254px]" : width = "w-full"
  
  return (
    <a href='#application' className={`${width} block mx-auto text-center  rounded-[30px] bg-red py-3 text-lg font-semibold text-white`}>{text}</a>
  )
}

export default Button