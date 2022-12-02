import React from 'react'

export default function GoodItem({item}) {
    const [incart, setInCart] = React.useState(false)
    const onClick = ({name, price}) => {
        localStorage.setItem('cart', {})
    }
    console.log(localStorage.getItem('cart'))
  return (
    <div>
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">{item.name}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">{item.price}<small class="text-muted fw-light">/мес</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Какое-то описание.</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary" onClick={onClick}>
                Добавить в корзину
                
                </button>
          </div>
        </div>
    </div>
  )
}
