import React from 'react'

export default function ItemInCar({item, setTotalCost, totalCost}) {
    
  const price = item.price
  const name = item.name

  if (price) setTotalCost(totalCost + price)
  return (
    <div>
        {name}
    </div>
  )
}
