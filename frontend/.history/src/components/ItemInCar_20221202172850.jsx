import React from 'react'

export default function ItemInCar({item, setTotalCost}) {
    

  const price = item.price
  if (price) setTotalCost(price)
  return (
    <div>
        
    </div>
  )
}
