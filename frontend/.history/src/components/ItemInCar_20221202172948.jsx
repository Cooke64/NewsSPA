import React from 'react'

export default function ItemInCar({item, setTotalCost}) {
    
    console.log(item)
  const price = item.price
  const name = item.name
  if (price) setTotalCost(price)
  return (
    <div>
        {name}
    </div>
  )
}