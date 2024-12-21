import { useState } from 'react'
import { Header } from './components/Header.jsx'
import './App.css'
import { Link, useNavigate } from 'react-router'

function App() {
  
  return (
    <>
      <div className="h-96 sm:h-56 py-6 bg-gray-400 bg-cover bg-center">
        <Header/>
      </div>
    </>
  )
}

export {App}
