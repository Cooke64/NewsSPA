import React from 'react'
import GoodItem from 'components/GoodItem'
import {Row} from "react-bootstrap";
import {Container} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Sidebar from 'components/Sidebar';


export default function MarketPage() {

  const [active, setActive] = React.useState('')

  const goods = [
    { name: 'some name',
      price: 123
    },
    {
      name: 'some name again',
      price: 234
    },
    {
      name: 'some name 123 ',
      price: 555
    }
  ]
  const categories = [
    {
      name: 'Goods'
    },
    {
      name: 'Heyyouds'
    },
  ]

  const setCategory = (type) => {
    setActive(type)
  }
  return (
    <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <Sidebar setCategory={setCategory} categories={categories} active={active}/>
                </Col>
                <Col md={9}>
                  <Row>
                      {
                      goods.map(item => (
                      <GoodItem item={item} key={item.price}/>
                      ))
                      }
                  </Row>
                </Col>
            </Row>
        </Container>

  )
}
