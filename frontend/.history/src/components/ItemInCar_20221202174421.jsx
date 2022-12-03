import React from 'react'

export default function ItemInCar({item, changeTotalCost}) {
    
  const price = item.price
  const name = item.name
  return (
    <div>
        {name}
    </div>
  )
}
