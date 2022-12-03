import React from 'react'
import Navbar from './UI/navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  let amountProds = localStorage.getItem('items')
  React.useEffect(()=> {}, [amountProds])
  return (
    <> 
    <Navbar amountProds={amountProds}/>
    <main className='container'><Outlet /></main>
    <footer>Footer</footer>
    </>
  )
}
