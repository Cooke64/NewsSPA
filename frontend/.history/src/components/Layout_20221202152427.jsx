import React from 'react'
import Navbar from './UI/navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  use
  let amountProds = JSON.parse(localStorage.getItem('items'))
  React.useEffect(
    () => {},
   [amountProds.length])
  return (
    <> 
    <Navbar amountProds={amountProds}/>
    <main className='container'><Outlet /></main>
    <footer>Footer</footer>
    </>
  )
}
