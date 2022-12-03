import React from 'react'
import ItemInCar from 'components/ItemInCar'


export default function Cart() {
  const product = JSON.parse(localStorage.getItem('items')) || []

  return (
    <div>
        {product.map(item=>)}
    </div>
    
  )
}
