import React from 'react'
import Navbar from './UI/navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  let amountProds = JSON.parse(localStorage.getItem('items'))
  React.useEffect(() => )
  return (
    <> 
    <Navbar amountProds={amountProds}/>
    <main className='container'><Outlet /></main>
    <footer>Footer</footer>
    </>
  )
}
