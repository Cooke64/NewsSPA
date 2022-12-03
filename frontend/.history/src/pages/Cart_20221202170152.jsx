import React from 'react'

export default function Cart() {
  const product = JSON.parse(localStorage.getItem('items')) || []
  let price = product.price
  let name = product.name
  return (
    <div>{product.map(item =>(
      <div>
              <p>{item.name}</p>
              <p>{item.price}</p>
        </div>

    ))}</div>
  )
}
