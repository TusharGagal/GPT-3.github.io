/* eslint-disable no-unused-vars */
import React from 'react'
import { Article,Brand,CTA,Features,Navbar} from './components'
import {Footer,Blog,Possibility,Feature,WhatGPT3,Header} from './containers'
import './App.css'
const App = () => {
  return (
    <div className="App">
      <div className="grad__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer/>
    </div>
  )
}

export default App