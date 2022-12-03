import React from 'react'
import Navbar from './UI/navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  const [cart, setCart] = React.useState(0)

  let amountProds = JSON.parse(localStorage.getItem('items'))
  React.useEffect(
    () => {
      setCart(amountProds.length)
    },
   [amountProds.length])
  return (
    <> 
    <Navbar cart={cart}/>
    <main className='container'><Outlet /></main>
    <footer>Footer</footer>
    </>
  )
}
