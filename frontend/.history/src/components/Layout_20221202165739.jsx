import React from 'react'
import Navbar from './UI/navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {

  return (
    <> 
    <Navbar />
    <main className='container'><Outlet /></main>
    <footer>Footer</footer>
    </>
  )
}
