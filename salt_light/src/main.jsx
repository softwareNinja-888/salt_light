import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router'

import { AuthProvider } from './components/AuthContext.jsx'
import { Listing } from './components/Listing.jsx'
import { Blog } from './components/Blog.jsx'
import { Donate } from './components/Donate.jsx'
import { SignUp } from './components/SignUp.jsx'
import { Profile } from './components/Profile.jsx'
import { NotFound } from './components/NotFound.jsx'
import { Layout } from './components/Layout.jsx'
import { HandleElement } from './components/HandleElement.jsx'
import { HandleBlog } from './components/HandleBlog.jsx'
import { HandleDonate } from './components/HandleDonate.jsx'

import { ScrollToTop } from './components/ScrollToTop.jsx'


import './index.css'
import { App } from './App.jsx'
import { SearchResults } from './components/SearchResults.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route index element={<App />}/>

          <Route path='/pages' element={<Layout/>}>

              {/* EVENT / CHURCH ROUTES */}
              <Route path=':page' element={<Listing/>} />
              <Route path=':page/:element' element={<HandleElement/>} />

              {/* BLOG/DONATE ROUTES */}
              <Route path='blog' element={<Blog/>} />
              <Route path='blog/:title' element={<HandleBlog/>}/>

              <Route path='donate' element={<Donate/>} />
              <Route path='donate/:title' element={<HandleDonate/>} />

          </Route>  

          <Route path='/search' element={<SearchResults/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/profile/:name' element={<Profile/>}/>
          <Route path='/404' element={<NotFound/>}/>
  
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
