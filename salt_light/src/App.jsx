import { useState } from 'react'
import './App.css'
import { Link, useNavigate } from 'react-router'

import { Header } from './components/structure/Header.jsx'
import { Footer } from './components/structure/Footer.jsx'

import { useAuth } from './components/helper/AuthContext.jsx'
import { ChurchLocator } from './components/helper/ChurchLocator.jsx'

import { Highlights } from './components/content/Highlights.jsx'



function App() {

  const {IsLoggedIn,ActiveUser} = useAuth()

  return (
    <>
        <>
          <Header/>
          <Highlights/>
          <Footer/>
        </>
    </>
  )
}

export {App}
