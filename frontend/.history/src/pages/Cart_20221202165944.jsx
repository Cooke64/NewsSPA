import React from 'react'

export default function Cart() {
  const product = JSON.parse(localStorage.getItem('items')) || []
  return (
    <div>{product.map(item =>{
      <p></p>
    })}</div>
  )
}
