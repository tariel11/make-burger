import React from 'react'

const Application = () => {
  return (
    <section  className=' h bg-application bg-no-repeat bg-cover'>
      <div id='application' className='w-2/3 mx-auto py-20 md:py-20'>

        <div className='relative bg-black_2 p-5 md:p-8 md:grid grid-cols-2 text-sm md:text-xl'>
          <div className=''>
            <h3 className='font-semibold mb-8 text-2xl md:text-4xl lg:text-5xl '>Форма заявки</h3>
            <p>Хотите создать собственный сайт? <br/>
Заполните заявку и мы свяжемся с вами в ближайшее время.</p>
          </div>
          <hr className='hidden md:block absolute top-0 left-1/2 w-[2px] h-full bg-gray'/>
          <div className='mt-8 md:pl-8'>
            <form className='flex flex-col gap-8' method='POST' action="https://formsubmit.co/159d84c158e12ab80f8ab22fa1ff75ee">
              <input className=' outline-none bg-inherit pb-2 border-b-2 border-gray' name='Имя' type="text" required placeholder='Ваше имя'/>
              <input className=' outline-none bg-inherit pb-2 border-b-2 border-gray' name='Email' type="text" required placeholder='Email'/>
              <input className=' outline-none bg-inherit pb-2 border-b-2 border-gray' name='Письмо' type="text" required placeholder='Письмо'/>
              <button type='submit'  className={`w-[200px] block mx-auto text-center rounded-[30px] bg-red py-3 text-lg font-semibold text-white`}>Отправить</button>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Application