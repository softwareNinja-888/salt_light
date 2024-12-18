import { useState } from 'react'
import { Header } from './components/Header.jsx'
import './App.css'
import { Link, useNavigate } from 'react-router'


const Data = (function(){
  const arrData = [
    { id: 1, name: 'churches' },
    { id: 2, name: 'ministries' },
    { id: 3, name: 'events' },
    { id: 4, name: 'schools' },
    { id: 5, name: 'business' }
  ];

  return {arrData}
})()
function App() {
  const navigate = useNavigate()
  


  return (
    <>
      <div className="debug-screens">
        <Header/>
      </div>
    </>
  )
}

export {App,Data}
