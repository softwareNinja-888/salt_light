import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router'

import { AuthProvider } from './components/helper/AuthContext.jsx'
import { ScrollToTop } from './components/helper/ScrollToTop.jsx'

import { Layout } from './components/structure/Layout.jsx'
import { Listing } from './components/structure/Listing.jsx'

import { Blog } from './components/content/Blog.jsx'
import { Donate } from './components/content/Donate.jsx'
import { SignUp } from './components/content/SignUp.jsx'
import { Profile } from './components/content/Profile.jsx'
import { NotFound } from './components/content/NotFound.jsx'
import { HandleElement } from './components/content/HandleElement.jsx'
import { HandleBlog } from './components/content/HandleBlog.jsx'
import { HandleDonate } from './components/content/HandleDonate.jsx'
import { NearMe } from './components/content/NearMe.jsx'

import { SearchResults } from './components/content/SearchResults.jsx'


import './index.css'
import { App } from './App.jsx'

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

              <Route path='nearme' element={<NearMe/>}/>

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
