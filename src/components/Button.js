import React from 'react'

const Button = ({text = 'Заказать', }) => {
  
  return (
    <a href='#application' className={`w-[200px] block mx-auto text-center  rounded-[30px] bg-red py-3 text-lg font-semibold text-white`}>{text}</a>
  )
}

export default Button