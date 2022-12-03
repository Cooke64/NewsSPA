import React from 'react'

export default function ItemInCar({item, ref}) {
    
  const price = item.price
  const name = item.name
  if (name) ref.current += price
  return (
    <div>
        {name}
    </div>
  )
}
