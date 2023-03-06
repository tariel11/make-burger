import React from 'react'
import Button from './Button'

const PriceItem = ({title, items}) => {
  return (
    <div className='p-5 flex-1 grid grid-rows-[1fr,4fr] bg-white rounded-xl text-black text-lg'>
      <h3 className='text-xl font-semibold mb-7'> {title} </h3>
      <ul className='flex flex-col gap-5 mb-7'>

        {items.map(item => 
          <li 
            key={item}
            className='first:text-red'
          > 
              {item} 
          </li>
        )}
      </ul>
      <div  >
        <Button/>
      </div>
    </div>
  )
}

export default PriceItem