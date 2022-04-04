import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getProductsAPI } from '../api'
import * as Styled from '../styled/ListProducts';

export const ListProducts = () => {
    const [List, setList] = useState([]);

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

    useEffect(() => {
      getProductsAPI(setList)
    }, []);

    return (
        <Container>
          <Styled.Row>
            {renderItems}
          </Styled.Row>
        </Container>
    );
}
