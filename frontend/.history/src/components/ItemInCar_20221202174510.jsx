import React from 'react'

export default function ItemInCar({item, changeTotalCost}) {
    
  React.useEffect(() => {})
  const price = item.price
  const name = item.name
  return (
    <div>
        {name}
    </div>
  )
}
