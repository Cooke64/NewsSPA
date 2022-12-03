import React from 'react'
import ItemInCar from 'components/ItemInCar'


export default function Cart() {
  const product = JSON.parse(localStorage.getItem('items')) || []
  const inputEl = ReactuseRef(null);


  React.useEffect(
    () => {
      
    }, []
    )

  return (
    <div>
      <h2>{0}</h2>
        {product.map(item=> (
          <ItemInCar item={item} />
        ))}
    </div>
    
  )
}
