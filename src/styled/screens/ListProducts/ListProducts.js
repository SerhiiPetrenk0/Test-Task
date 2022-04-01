import styled from 'styled-components'
import { Col, Card, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export const StyledCol = styled(Col)`
    margin-top: 20px;
    height: 450px;
`;
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black
`;
export const StyledCard = styled(Card)`
    width: 100%;
    height: 100%; 
    margin-top: 20px 
`;
export const StyledCardImg = styled(Card.Img)`
    object-fit:contain;
    width: 100%;
    height: 40%;
    padding: 10px;
    margin-top: 10px
`;
export const StyledCardBody = styled(Card.Body)`
    height: contant;
    display: flex;
    flex-direction: column;
    overflow: hidden
`;
export const StyledCardTitle = styled(Card.Title)`
    margin-top: 20px
`;
export const StyledCardSubtitle = styled(Card.Subtitle)`
    margin-top: 20px;
    color: #323232
`;
export const StyledCardText = styled(Card.Text)`
    margin-top: 20px;
    text-align: justify;
    font-size: 0.90rem
`;
export const StyledRow = styled(Row)`
    justify-content: space-evenly
`;
