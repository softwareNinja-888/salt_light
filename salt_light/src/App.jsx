import { useState } from 'react'
import { Header } from './components/Header.jsx'
import './App.css'
import { Link, useNavigate } from 'react-router'
import { useAuth } from './components/AuthContext.jsx'

function App() {

  const {IsLoggedIn,ActiveUser} = useAuth()

  return (
    <>
        <>
          <Header/>
          <div className="font-nunito text-xl px-2 py-4 flex items-center justify-center">
          </div>
        </>
    </>
  )
}

export {App}
