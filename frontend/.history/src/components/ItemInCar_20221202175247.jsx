import React from 'react'

export default function ItemInCar({item, changeRef}) {
    
  const price = item.price
  const name = item.name
  React.useEffect(() => {})
  if (name) changeRef(price)
  return (
    <div>
        {name}
    </div>
  )
}
