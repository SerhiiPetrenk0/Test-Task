import React, { useEffect, useState } from 'react';
import { ListGroup, Container, Row, Col, Image } from 'react-bootstrap';
import "./ListProducts.css"

export const ListProducts = () => {

    const [List, setList] = useState([]);
    const loadItems = () => {
      fetch('http://demo8021751.mockable.io/products')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setList(data.products);
        });
    };
    const renderItems = List.map((item, index) => (
      <ListGroup.Item className='item m-2 border border-1 rounded-3' key={index}>
        <Row className='p-2 d-flex justify-content-center'>
          <Col xs={6} md={4} className="item-img d-block position-relative" >
            <Image src={item.img} className="mh-100 mw-100 position-absolute top-50 start-50 translate-middle" alt="***" />
          </Col>
          <Col xs={12} md={8}>
            <Row><h4 className="display-6 mt-1 text-center text-md-start">{item.brand}</h4></Row>
            <Row><h4 className='text-center mt-4 text-md-start'>{item.price}$</h4></Row>
          </Col>
        </Row>
      </ListGroup.Item>
    ));
  
    useEffect(() => {
      loadItems();
    }, []);
    return (
        <Container className="justify-content-md-center">
          <ListGroup>{renderItems}</ListGroup>
        </Container>
    );
}