import React from 'react'
import GoodItem from 'components/GoodItem'
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

  return (
    <div className="w-50 h-50 my-md-3 ps-md-3 mx-auto">
      <div className="">
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
