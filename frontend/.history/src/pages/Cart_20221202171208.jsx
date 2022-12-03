import React from 'react'
import ItemInCar from 'components/ItemInCar'


export default function Cart() {
  const product = JSON.parse(localStorage.getItem('items')) || []

  const call

  return (
    <div>
        {product.map(item=> (
          <ItemInCar item={item} callback={callback} />
        ))}
    </div>
    
  )
}
