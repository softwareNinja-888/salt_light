import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, useNavigate } from 'react-router'

function App() {
  const navigate = useNavigate()
  const arr = ['church','ministries','event','school','business']

  return (
    <>
      <h1 className='text-6xl text-red-700'>Ho@me</h1>
      {arr.map(el=>{
        return <Link to={`/${el}`} className='text-md'>{el}</Link>
      })}
    </>
  )
}

export default App
