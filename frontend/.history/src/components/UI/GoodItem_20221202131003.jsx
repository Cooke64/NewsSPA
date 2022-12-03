import React from 'react'
import MyButtons from './buttons/MyButtons'

export default function GoodItem({item}) {
    const [incart, setInCart] = React.useState(false)

    const onClick = () => {
        let products = [];
        if (localStorage.getItem('items')){
          products = JSON.parse(localStorage.getItem('items'));
        }
        products.push({'name' : item.name, price : item.price});
        localStorage.setItem('items', JSON.stringify(products));
        setInCart(!incart)
    }

    const onCLickDelete = (name) => {
        let storageProducts = JSON.parse(localStorage.getItem('items'));
        let products = storageProducts.filter(item => item.name !== name );
        localStorage.setItem('items', JSON.stringify(products));
        setInCart(!incart)
    }
    let button;

    if (incart) {
      button = <MyButtons onClick={onClick} > Добавить в корзину</MyButtons>;
    } else {
      button = <MyButtons onClick={onCLickDelete(item.name)} >Удалить из корзины </MyButtons>;
    }

    React.useEffect(
        ()=> {},
         [incart])
    console.log((localStorage.getItem('items')))
  return (
    <div>
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">{item.name}</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">{item.price}<small className="text-muted fw-light">/мес</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Какое-то описание.</li>
            </ul>
                {button}
          </div>
        </div>
    </div>
  )
}
