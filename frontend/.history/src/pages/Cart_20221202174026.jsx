import React from 'react'
import ItemInCar from 'components/ItemInCar'


export default function Cart() {
  const product = JSON.parse(localStorage.getItem('items')) || []
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1)
  }

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
