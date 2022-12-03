import React from 'react'

export default function ItemInCar({item, changeTotalCost, totalCost}) {
    
  const price = item.price
  const name = item.name
  if (price) changeTotalCost(price)
  return (
    <div>
        {name}
    </div>
  )
}
