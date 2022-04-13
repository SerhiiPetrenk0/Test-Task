import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { PostForm, Comment } from './';

import { loadProduct, loadComment } from '../redux/ducks/productsDuck';
import * as Styled from '../styled/ItemProducts';
import { PageSpinner } from '../styled/globalStyled';

export const ItemProducts = props => {
    const [ itemProduct, setItemProduct ] = useState([]);
    const [ itemComment, setItemComment] = useState([]);
    const { products, comments } = useSelector(store => store.product);
    const status = useSelector(store => store.loader.status);
    const dispatch = useDispatch();
    const linkProduct = useParams();
    const checkStore = () => products.length === 0 && dispatch(loadProduct());

    const chooseProduct = () => {
        const chooseItem = products.find(item => item.asin === linkProduct.id);
        setItemProduct(chooseItem);
    };
    const checkComments = () => ( comments.length === 0 || comments.asin !== linkProduct.id) ? 
        dispatch(loadComment(linkProduct.id)) : 
        setItemComment(comments.body);
    
    const renderComment = itemComment.map((item, index) => <Comment key={index} ListComment={item} />);

    const deeps = [products, linkProduct.id, comments.body];
    useEffect(() => {
        checkComments();
        checkStore();
        chooseProduct();
    },[...deeps]);

    return (
        <>
            {!status ? ( 
                <PageSpinner animation="border" /> 
            ) : (
              <Styled.Container>
                  {itemProduct && 
                    <Row>
                        <Styled.ColImg lg="6">
                            <Styled.CImg>
                                <Styled.CardImg src={itemProduct.img} />
                            </Styled.CImg>
                        </Styled.ColImg>
                        <Col>
                            <Styled.Card>
                            <Card.Body>
                                <Card.Title>{itemProduct.brand}</Card.Title>
                                <Card.Text>
                                {itemProduct.name}
                                </Card.Text>
                                {renderComment} 
                            </Card.Body>
                            </Styled.Card>
                            <PostForm />
                        </Col>
                    </Row>
                  }
              </Styled.Container>
            )}
        </>
    );
};
