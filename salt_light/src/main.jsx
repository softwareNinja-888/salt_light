import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router'

import { AuthProvider } from './components/AuthContext.jsx'
import { Listing } from './components/Listing.jsx'
import { ListRoot } from './components/ListRoot.jsx'
import { Blog } from './components/Blog.jsx'
import { Donate } from './components/Donate.jsx'
import { SignUp } from './components/SignUp.jsx'
import { Profile } from './components/Profile.jsx'
import { NotFound } from './components/NotFound.jsx'
import { Church } from './components/Church.jsx'
import { Events } from './components/Events.jsx'
import { Layout } from './components/Layout.jsx'
import { HandleElement } from './components/HandleElement.jsx'


import './index.css'
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />}/>

          <Route path='/pages' element={<Layout/>}>
              <Route path=':page' element={<Listing/>} />
              <Route path=':page/:element' element={<HandleElement/>}/>
              <Route path='blog' element={<Blog/>}/>
              <Route path='donate' element={<Donate/>}/>
          </Route>  

          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/profile/:name' element={<Profile/>}/>
          <Route path='/404' element={<NotFound/>}/>
  
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
