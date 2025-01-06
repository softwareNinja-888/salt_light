import { useState } from 'react'
import { Header } from './components/Header.jsx'
import './App.css'
import { Link, useNavigate } from 'react-router'
import { useAuth } from './components/AuthContext.jsx'
import { ChurchLocator } from './components/ChurchLocator.jsx'
import { Highlights } from './components/Highlights.jsx'
import { Footer } from './components/Footer.jsx'

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
