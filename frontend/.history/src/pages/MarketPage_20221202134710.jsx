import React from 'react'
import GoodItem from 'components/UI/GoodItem'
export default function MarketPage() {
  const goods = [
    { name: 'some name',
      price: 'some price'
    },
    {
      name: 'some name 123 ',
      price: 'some price 123'
    }
  ]

  React.
  return (
    <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
      <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        {
          goods.map(item => (
            <GoodItem item={item} key={item.price}/>
          ))
        }
      <div className="bg-body shadow-sm mx-auto"/>
    </div>
  </div>
  )
}
