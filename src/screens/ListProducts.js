import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';

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
      <ListGroup.Item key={index}> {item.brand} </ListGroup.Item>
    ));
  
    useEffect(() => {
      loadItems();
    }, []);
    return (
        <ListGroup>{renderItems}</ListGroup>
    );
}