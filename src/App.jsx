import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth.js"
import {login, logout} from "./store/authSlice.js"
import { Footer, Header } from './components/Index.js'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-[linear-gradient(90deg,_rgba(184,166,238,1)_0%,_rgba(151,128,215,1)_7%,_rgba(135,109,208,1)_21%,_rgba(158,117,211,1)_48%,_rgba(175,126,213,1)_77%,_rgba(195,152,221,1)_88%,_rgba(226,199,244,1)_100%)]'>
      <div className='w-full block'>
        <Header />
        <main>
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App