import React from 'react'
import ItemInCar from 'components/ItemInCar'


export default function Cart() {
  const product = JSON.parse(localStorage.getItem('items')) || []


  React.useEffect(
    () => {
      
    }, [totalCost]
    )

  return (
    <div>
      <h2>{totalCost}</h2>
        {product.map(item=> (
          <ItemInCar item={item} />
        ))}
    </div>
    
  )
}
