import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import * as Styled from '../styled/ListProducts';
import { loadProduct } from '../redux/redusers/productsReduser';
import { useSelector, useDispatch } from 'react-redux';

export const ListProducts = () => {
    const [List, setList] = useState([]);
    const dispatch = useDispatch();

    const store = useSelector(store => store.product.products);
    const status = useSelector(store => store.product.status);

    const renderItems = List.map(item => (
          <Styled.Col key={item.asin} lg="3" md="4" sm="6">
          <Styled.Link key={item.asin} to={`/Product/${item.asin}`}>
            <Styled.Card>
              <Styled.CardImg variant="top" src={item.img}/>
              <Styled.CardBody>
                <Styled.CardTitle>{item.brand}</Styled.CardTitle>
                <Styled.CardSubtitle>{item.price}$</Styled.CardSubtitle>
                <Styled.CardText>
                  {item.name}
                </Styled.CardText>
              </Styled.CardBody>
            </Styled.Card>
          </Styled.Link>
          </Styled.Col>
    ));
    const checkStore = () => store.length === 0 ? dispatch(loadProduct()) : setList(store);

    useEffect(() => {
      checkStore();
    });

    return (
      <>
        {
        status ? 
        <Styled.Spinner animation="border" /> 
        :
        <Container>
          <Styled.Row>
            {renderItems}
          </Styled.Row>
        </Container>
        }
      </>
    );
};
