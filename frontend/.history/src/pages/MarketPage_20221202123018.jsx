import React from 'react'

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
    <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 py-3">
        <h2 className="display-5">Другой заголовок</h2>
        <p className="lead">И еще более остроумный подзаголовок.</p>
      </div>
      <div class="my-3 py-3">
        <h2 class="display-5">Другой заголовок</h2>
        <p class="lead">И еще более остроумный подзаголовок.</p>
      </div>
      <div class="bg-body shadow-sm mx-auto"></div>
    </div>
  </div>
  )
}
