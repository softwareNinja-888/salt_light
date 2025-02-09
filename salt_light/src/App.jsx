import { useState } from 'react'
import './App.css'
import { Link, useNavigate } from 'react-router'

import { Header } from './components/structure/Header.jsx'
import { Footer } from './components/structure/Footer.jsx'

import { useAuth } from './components/helper/AuthContext.jsx'
import { ChurchLocator } from './components/helper/ChurchLocator.jsx'

import { Highlights } from './components/content/Highlights.jsx'
import { Info } from './components/content/Info.jsx'

import { Testimonials } from './components/content/Testimonials.jsx'
import { Verse } from './components/content/Verse.jsx'





function App() {

  const {IsLoggedIn,ActiveUser} = useAuth()

  return (
    <>
        <>
          <Header/>
          <Highlights/>
          <Info/>
          <Testimonials/>
          <Verse/>
          <Footer/>
        </>
    </>
  )
}

export {App}
