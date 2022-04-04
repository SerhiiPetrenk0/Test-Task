import styled from 'styled-components';
import { Col, Card, Row } from 'react-bootstrap';
import { colors } from './globalStyled';
import { Link } from 'react-router-dom';

const StyledCol = styled(Col)`
    margin-top: 20px;
    height: 450px;
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${colors.link}
`;
const StyledCard = styled(Card)`
    width: 100%;
    height: 100%; 
    margin-top: 20px 
`;
const CardImg = styled(Card.Img)`
    object-fit:contain;
    width: 100%;
    height: 40%;
    padding: 10px;
    margin-top: 10px
`;
const CardBody = styled(Card.Body)`
    height: contant;
    display: flex;
    flex-direction: column;
    overflow: hidden
`;
const CardTitle = styled(Card.Title)`
    margin-top: 20px
`;
const CardSubtitle = styled(Card.Subtitle)`
    margin-top: 20px;
    color: ${colors.cardSubtitle}
`;
const CardText = styled(Card.Text)`
    margin-top: 20px;
    text-align: justify;
    font-size: 0.90rem
`;
const StyledRow = styled(Row)`
    justify-content: space-evenly
`;

export {
    StyledCol as Col,
    StyledLink as Link,
    StyledCard as Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    StyledRow as Row
};
