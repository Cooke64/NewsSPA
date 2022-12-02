import React from 'react'

export default function GoodItem(item) {
  return (
    <div>
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">{item</h4>
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
    </div>
  )
}
