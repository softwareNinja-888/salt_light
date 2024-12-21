import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router'

import { Listing } from './components/Listing.jsx'
import { ListRoot } from './components/ListRoot.jsx'
import { Blog } from './components/Blog.jsx'

import './index.css'
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />}/>
        <Route path='/listings' element={<ListRoot/>}>
          <Route path=':title' element={<Listing/>}/>
        </Route>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
