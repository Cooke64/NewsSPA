import React from 'react'
import MyButtons from './buttons/MyButtons'

export default function GoodItem({item}) {
    const checkinCart = () => {
        var products = JSON.parse(localStorage.getItem('items'))
        if (! products || item.name <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        </head>
        <body>
            
        </body>
        </html>in products)
    }
    const [incart, setInCart] = React.useState(false)

    const onClick = () => {
        var products = JSON.parse(localStorage.getItem('items')) || [];
        products.push({'name' : item.name, price : item.price});
        localStorage.setItem('items', JSON.stringify(products));
        setInCart(!incart)
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
    

    React.useEffect(
        ()=> {},
         [incart]
         )

    console.log(localStorage.getItem('items'))
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
                <MyButtons onClick={() => localStorage.removeItem('items')} > Очистить корзину </MyButtons>
          </div>
        </div>
    </div>
  )
}
