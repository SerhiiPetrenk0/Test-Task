import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { PostForm, Comment } from '.';

import { loadProduct, loadComment } from '../redux/ducks/productsDuck';
import * as Styled from '../styled/ItemProducts';
import { PageSpinner } from '../styled/globalStyled';
import { TypeProduct, TypeComment, TypePostForm } from '../interface';

export const ItemProducts: React.FC = () => {
    const [ itemProduct, setItemProduct ] = useState<TypeProduct | undefined>(undefined);
    const [ itemComment, setItemComment] = useState<TypePostForm[]>([]);
    type TProductsStore = {
        product: {
            products: TypeProduct[],
            comments: TypeComment
        }
    };
    type TStatusStore = {
        loader: {
            status: boolean
        }
    };
    const { products, comments } = useSelector((store: TProductsStore) => store.product);
    const status = useSelector((store: TStatusStore) => store.loader.status);
    const dispatch = useDispatch();
    const linkProduct = useParams();
    const checkStore = () => products.length === 0 && dispatch(loadProduct());
    const chooseProduct = () => {
        const chooseItem = products.find((item: { asin: string }) => item.asin === linkProduct.id);
        setItemProduct(chooseItem);
    };
    const checkComments = () => ( !comments.body || comments.asin !== linkProduct.id ) ? 
        dispatch(loadComment(linkProduct.id)) : 
        setItemComment(comments.body);
    
    const renderComment: JSX.Element[] = itemComment.map(
        (item: TypePostForm, index: number) => <Comment key={index} ListComment={item} />
    );

    useEffect(() => {
        checkComments();
        checkStore();
        chooseProduct();
    });

    return (
        <>
            {status ? ( 
                <PageSpinner animation="border" /> 
            ) : (
              <Styled.Container>
                  {itemProduct && 
                    <Row id='12dw3456789'>
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
