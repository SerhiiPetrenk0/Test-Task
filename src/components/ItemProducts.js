import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Spinner } from 'react-bootstrap';
import { PostForm, Comment } from './';
import { useParams } from 'react-router-dom';
import * as Styled from '../styled/ItemProducts';
import { PageSpinner } from '../styled/globalStyled';
import { loadProduct, testAction } from '../redux/redusers/productsReduser';
import { useSelector, useDispatch } from 'react-redux';

export const ItemProducts = props => {
    const [ itemProduct, setItemProduct ] = useState([]);
    const { products, comments } = useSelector(store => store.product);
    const status = useSelector(store => store.loader.status);
    const dispatch = useDispatch();
    const linkProduct = useParams();

    const checkStore = () => products.length === 0 && dispatch(loadProduct());

    const chooseProduct = () => {
        const chooseItem = products.find(item => item.asin === linkProduct.id);
         setItemProduct(chooseItem);
    };
    const checkComments = () => {
        (comments.length === 0 || comments.asin !== linkProduct.id) && dispatch(testAction(linkProduct.id));
    };
    const renderSpiner = <Styled.Spinner><Spinner animation="border" /></Styled.Spinner>;
    const renderComment = status ? comments.body.map((item, index) => <Comment key={index} ListComment={item} />) : renderSpiner;

    useEffect(() => {
        checkComments();
    },[linkProduct.id]);

    useEffect(() => {
        checkStore();
        chooseProduct();
    },[products]);

    return (
        <>
            {
                !status ? 
                <PageSpinner animation="border" /> 
                :
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
            }
        </>
    );
};
