import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Comment } from "../components/Commetn";
import { PostForm } from "../components/PostForm";
import { useParams } from "react-router-dom";
import { Product } from "../../redux/Redux-store"; // Тестовий варіант >>> данні які будуть завантажуватись з REDUX

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

export const ItemProducts = (props) => {
    const [ itemProduct, setItemProduct ] = useState([])
    const linkProduct = useParams()

    const chooseProduct = () => {
        const chooseItem = Product.products.find(item => item.asin === linkProduct.id)
        setItemProduct(chooseItem)
    }
    useEffect(() => {
        chooseProduct()
    },[])

    // пофіксити проблему з картинкою на низькому розширенні
    
    const renderComment = ListComment.map(item => <Comment key={item.id} ListComment={item} />)
    return(
        <Container className="mt-5">
            {itemProduct && 
                <Row className="flex-column flex-lg-row justify-content-between">
                    <Col lg='6' className="d-flex justify-content-center">
                        <Card className="d-block" style={{ width: '30rem', height:'30rem' }}>
                            <Card.Img className="mh-100 mw-100 p-2" style={{ objectFit: 'contain' }} src={itemProduct.img} />
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title>{itemProduct.brand}</Card.Title>
                            <Card.Text>
                            {itemProduct.name}
                            </Card.Text>
                            {renderComment}
                        </Card.Body>
                        </Card>
                        <PostForm />
                    </Col>
                </Row>
            }
        </Container>
    )
}