import React from 'react'

export default function ItemInCar({item}) {
    
  const price = item.price
  const name = item.name
  return (
    <div>
        {name}
    </div>
  )
}
