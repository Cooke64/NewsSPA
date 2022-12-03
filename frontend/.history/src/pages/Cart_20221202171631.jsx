import React from 'react'
import ItemInCar from 'components/ItemInCar'


export default function Cart() {
  const product = JSON.parse(localStorage.getItem('items')) || []
  const [totalCost, setTotalCost] = React.useState(0)

  const callback = ({price, totalCost}) => {
    setTotalCost(totalCost + price)
  }
  React.
  return (
    <div>
      <h2>{totalCost}</h2>
        {product.map(item=> (
          <ItemInCar item={item} callback={callback} totalCost={totalCost}/>
        ))}
    </div>
    
  )
}
