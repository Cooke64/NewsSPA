import React from 'react'
import ItemInCar from 'components/ItemInCar'


export default function Cart() {
  const product = JSON.parse(localStorage.getItem('items')) || []
  const [totalCost, setTotalCost] = React.useState(0)

  const callback = ({price}) => {
    setTotalCost(totalCost + price)
  }

  return (
    <div>
        {product.map(item=> (
          <ItemInCar item={item} callback={callback} totalCost={totalCost}/>
        ))}
    </div>
    
  )
}
