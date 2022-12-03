import React from 'react'
import ItemInCar from 'components/ItemInCar'


export default function Cart() {
  const product = JSON.parse(localStorage.getItem('items')) || []
  const [totalCost, setTotalCost] = React.useState(0)


  const changeTotalCost = Re(value) => {
    setTotalCost(totalCost + value)
  }


  React.useEffect(
    () => {
      
    }, [totalCost]
    )

  return (
    <div>
      <h2>{totalCost}</h2>
        {product.map(item=> (
          <ItemInCar item={item} changeTotalCost={changeTotalCost}/>
        ))}
    </div>
    
  )
}
