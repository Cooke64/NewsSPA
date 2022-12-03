import React from 'react'
import MyButtons from './UI/buttons/MyButtons'

export default function GoodItem({item}) {
    const product = JSON.parse(localStorage.getItem('items')) || []
    let isInCart
    let cartarray = product.filter(prod => prod.name === item.name)
    if ( cartarray.length !== 0)
        {isInCart=true} 
    else 
        {isInCart=false}

    const [incart, setInCart] = React.useState(isInCart)

    const onClick = () => {
        var products = JSON.parse(localStorage.getItem('items')) || [];
        products.push({'name' : item.name, price : item.price});
        localStorage.setItem('items', JSON.stringify(products));
        setInCart(!incart)
        local
    }

    const onCLickDelete = () => {
        let storageProducts = JSON.parse(localStorage.getItem('items'));
        localStorage.removeItem('items')
        let products = storageProducts.filter(product => product.name !== item.name );
        localStorage.setItem('items', JSON.stringify(products));
        setInCart(!incart)
    }
    let button;

    if (incart) {
        button = <MyButtons onClick={onCLickDelete} >Удалить из корзины </MyButtons>;
    } else {
        button = <MyButtons onClick={onClick} > Добавить в корзину</MyButtons>;
    }
    
  return (
    <div>
        <div className="w-100 mx-auto">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3 ">
            <h4 className="my-0 fw-normal">{item.name}</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">{item.price}<small className="text-muted fw-light">/мес</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Какое-то описание.</li>

            </ul>
                {button}
                <MyButtons onClick={() => localStorage.removeItem('items')} > Очистить корзину </MyButtons>
          </div>
        </div>
        </div>
    </div>
  )
}
