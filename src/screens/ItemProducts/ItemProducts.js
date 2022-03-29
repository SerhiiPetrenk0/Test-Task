import React from "react";
import { Image, Card, Container, Row, Col } from "react-bootstrap";
import { Comment } from "../components/Commetn";

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
    {
        id: 4,
        discription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        stars: 1,
    },
    {
        id: 5,
        discription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        stars: 3,
    },
    {
        id: 6,
        discription: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        stars: 2,
    },
]

export const ItemProducts = (props) => {
    const { item } = props

    const renderComment = ListComment.map(item => <Comment ListComment={item} />)
    return(
        <Container className="mt-5">
            <Row>
                <Col>
                    <Image src={item.img} className="rounded-3" alt="***" />
                </Col>
                <Col>
                    <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>{item.brand}</Card.Title>
                        <Card.Text>
                        {item.name}
                        </Card.Text>
                        {renderComment}
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}