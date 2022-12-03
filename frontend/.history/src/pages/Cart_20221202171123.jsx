import React from 'react'
import It
export default function Cart() {
  const product = JSON.parse(localStorage.getItem('items')) || []

  return (
    <div>
        {product}
    </div>
    
  )
}
