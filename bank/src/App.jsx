import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Vidio from './components/Vidio'
import Icon from './components/Icon'
import Content from './components/content'
import Product from './components/Product'
import PrintText from './components/PrintText'
import Client from './components/Client'
import ClearBank from './components/ClearBank'

const App = () => {
  return (
    <>
       <Navbar/>
       <Hero/>
       <Vidio/>
       <Icon/>
       <Content/>
       <Product/>
       <PrintText/>
       <Client/>
       <ClearBank/>
    </>
 
  )
}

export default App