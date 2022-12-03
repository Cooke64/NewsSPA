import React from 'react'
import ItemInCar from 'components/ItemInCar'


export default function Cart() {
  const product = JSON.parse(localStorage.getItem('items')) || []
  const [totalCost, setTotalCost] = React.useState(0)
  const [sumCost, setSumCost] = React.useState(0)

  const changeTotalCost = () => {
    setTotalCost()
  }


  React.useEffect(
    () => {
      
    }, [totalCost]
    )

  return (
    <div>
      <h2>{totalCost}</h2>
        {product.map(item=> (
          <ItemInCar item={item} changeTotalCost={changeTotalCost} totalCost={totalCost}/>
        ))}
    </div>
    
  )
}
