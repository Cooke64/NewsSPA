import React from 'react'

export default function Cart() {
  const [amaunt, setamaunt] = useState()
  const product = JSON.parse(localStorage.getItem('items')) || []
  let price = product.price
  let name = product.name
  return (
    <div>

    </div>
  )
}
