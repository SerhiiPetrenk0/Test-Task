import React, { useEffect, useState } from 'react';
import { ListGroup, Container } from 'react-bootstrap';
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
      <ListGroup.Item className='item' key={index}> {item.brand} </ListGroup.Item>
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