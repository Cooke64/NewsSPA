import React from 'react'
import ItemInCar from 'components/ItemInCar'


export default function Cart() {
  const product = JSON.parse(localStorage.getItem('items')) || []
  const totalCost = React.useRef(0);

  function changeRef(price) {
      totalCost.current += price
  }
  React.useEffect(
    () => {
      
    }, [product]
    )
    console.log(totalCost)
  return (
    <div>
      <h2>{totalCost.current}</h2>
        {product.map(item=> (
          <ItemInCar item={item} changeRef={changeRef}/>
        ))}
    </div>
    
  )
}
