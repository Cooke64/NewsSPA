import React from 'react'

export default function ItemInCar({item, callback, totalCost}) {

  const {name, price} = item
  callback(totalCost, price)
  return (
    <div>ItemInCar</div>
  )
}
