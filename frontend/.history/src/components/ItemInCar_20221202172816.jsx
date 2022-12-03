import React from 'react'

export default function ItemInCar({item, setTotalCost}) {
    

  const {name, price} = item
  if (price)
  setTotalCost(price)
  return (
    <div>
        
    </div>
  )
}
