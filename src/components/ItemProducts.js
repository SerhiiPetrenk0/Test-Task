import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { PostForm, Comment } from './'
import { useParams } from 'react-router-dom';
import { Product } from '../redux/Redux-store'; // Тестовий варіант >>> данні які будуть завантажуватись з REDUX
import * as Styled from '../styled/ItemProducts';
 
const ListComment = [
    {
        id: 1,
        discription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        stars: 2,
    },
    {
        id: 2,
        discription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        stars: 5,
    },
    {
        id: 3,
        discription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        stars: 4,
    },
]

export const ItemProducts = props => {
    const [ itemProduct, setItemProduct ] = useState([])
    const linkProduct = useParams()

    const chooseProduct = () => {
        const chooseItem = Product.products.find(item => item.asin === linkProduct.id)
        setItemProduct(chooseItem)
    }

    const renderComment = ListComment.map(item => <Comment key={item.id} ListComment={item} />)

    useEffect(() => {
        chooseProduct();
    });
    
    return(
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
    );
}
