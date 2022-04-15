import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import * as Styled from '../styled/ListProducts';
import { loadProduct } from '../redux/ducks/productsDuck';
import { useSelector, useDispatch } from 'react-redux';
import { TypeProduct } from '../interface';

export const ListProducts:React.FC = () => {
    const [List, setList] = useState<TypeProduct[]>([]);
    const dispatch = useDispatch();
    type TStore = {
      product: {
        products:TypeProduct[]
      }
    };
    const store:TypeProduct[] = useSelector((store: TStore) => store.product.products);

    const renderItems:JSX.Element[] = List.map((item: TypeProduct) => (
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

    const checkStore: () => void = () => store.length === 0 ? dispatch(loadProduct()) : setList(store);

    useEffect(() => {
      checkStore();
    });

    return (
      <>
        {!!!store ? (
            <Styled.Spinner animation="border" /> 
          ) : (
            <Container>
              <Styled.Row>
                {renderItems}
              </Styled.Row>
            </Container>
        )}
      </>
    );
};
