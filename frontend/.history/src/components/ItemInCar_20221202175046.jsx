import React from 'react'

export default function ItemInCar({item, ref}) {
    
  const price = item.price
  const name = item.name
  if (name) console.log(ref.current)
  return (
    <div>
        {name}
    </div>
  )
}
