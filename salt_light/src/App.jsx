import { useState } from 'react'
import { Header } from './components/Header.jsx'
import './App.css'
import { Link, useNavigate } from 'react-router'


const Data = (function(){
  const arrData = [
    { id: 0, name: 'churches' },
    { id: 1, name: 'events' },
    { id: 2, name: 'blog' },
  ];

  return {arrData}
})()
function App() {
  const navigate = useNavigate()
  
  return (
    <>
      <div className="h-96 sm:h-56 py-6 bg-gray-400 bg-cover bg-center">
        <Header/>
      </div>
    </>
  )
}

export {App,Data}
