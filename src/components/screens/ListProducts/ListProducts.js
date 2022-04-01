import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getProductsAPI } from '../../../api'
import {
  StyledCol,
  StyledLink, 
  StyledCard,
  StyledCardImg,
  StyledCardBody,
  StyledCardTitle,
  StyledCardSubtitle,
  StyledCardText,
  StyledRow
} from '../../../styled/screens/ListProducts/ListProducts';

export const ListProducts = () => {

    const [List, setList] = useState([]);

    const renderItems = List.map(item => (
          <StyledCol key={item.asin} lg="3" md="4" sm="6">
          <StyledLink key={item.asin} to={`/Product/${item.asin}`}>
            <StyledCard>
              <StyledCardImg variant="top" src={item.img}/>
              <StyledCardBody>
                <StyledCardTitle>{item.brand}</StyledCardTitle>
                <StyledCardSubtitle>{item.price}$</StyledCardSubtitle>
                <StyledCardText>
                  {item.name}
                </StyledCardText>
              </StyledCardBody>
            </StyledCard>
          </StyledLink>
          </StyledCol>
    ));

    useEffect(() => {
      getProductsAPI(setList)
    }, []);

    return (
        <Container>
          <StyledRow>
            {renderItems}
          </StyledRow>
        </Container>
    );
}