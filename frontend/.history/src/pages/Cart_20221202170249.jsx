import React from 'react'

export default function Cart() {
  const [amaunt, setamaunt] = React.useState(1)
  const product = JSON.parse(localStorage.getItem('items')) || []
  let price = product.price
  let name = product.name
  return (
    <div>
        <p></p>
        <p></p>
    </div>
    <br />
  )
}
