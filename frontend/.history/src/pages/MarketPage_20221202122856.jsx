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
    <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 p-3">
        <h2 class="display-5">Другой заголовок</h2>
        <p class="lead">И еще более остроумный подзаголовок.</p>
      </div>
      <div class="bg-body shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
    </div>
    <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 py-3">
        <h2 class="display-5">Другой заголовок</h2>
        <p class="lead">И еще более остроумный подзаголовок.</p>
      </div>
      <div class="bg-body shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;></div>
    </div>
  </div>
  )
}
