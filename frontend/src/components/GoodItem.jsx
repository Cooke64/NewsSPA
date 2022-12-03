import React from 'react'
import MyButtons from './UI/buttons/MyButtons'
import {Card, Col, Image} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


export default function GoodItem({item}) {
    const navigate = useNavigate();
   
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

    <Col md={3} className={"mt-3"}>
        <Card style={{width: 200, cursor: 'pointer'}} border={"light"} onClick={() =>navigate(`/market/${item.name}`)}>
        <Image width={150} height={150} src='https://ds-blobs-1.cdn.devapps.ru/505851.png'/>
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
            <div>{item.name}</div>
          </div>
          <div className="d-flex align-items-center">
                        <div>Рейтинг</div>
                    
                    </div>
        < div>{item.price} $</div>
        {button}
      </Card>
  </Col>

  )
}
