import React from 'react'
import Line from '../components/Line'
import About from '../scenes/About'
import Application from '../scenes/Application'
import Header from '../scenes/Header'
import Navbar from '../scenes/Navbar'
import Portfolio from '../scenes/Portfolio'
import Prices from '../scenes/Prices'
import Service from '../scenes/Service'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <Line/>

        <Portfolio/>
        <Line/>

        <About/>
      
        <Line/>
        <Service/>

        <Line/>
        <Prices/>

        <Line/>
        <Application/>   
    </>
  )
}

export default Home