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
    <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Бесплатно</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$0<small class="text-muted fw-light">/мес</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>10 пользователей включено</li>
              <li>2 ГБ хранилища</li>
              <li>Обычная поддержка по электронной почте</li>
              <li>Доступ к справочному центру</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary">Регистрация бесплатно</button>
          </div>
        </div>
      <div className="bg-body shadow-sm mx-auto"></div>
    </div>
  </div>
  )
}
