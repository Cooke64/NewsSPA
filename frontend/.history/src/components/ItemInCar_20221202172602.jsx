import React from 'react'

export default function ItemInCar({item, setTotalCost}) {
    

  const {name, price} = item
  setTotalCost(price)
  return (
    <div>
        
    </div>
  )
}
