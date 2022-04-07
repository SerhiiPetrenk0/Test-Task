import styled from 'styled-components';
import { Container, Card, Col } from 'react-bootstrap';

const StyledContainer = styled(Container)`
    margin-top: 50px
`;
const ColImg = styled(Col)`
    display: flex;
    justify-content: center
`;
const CImg = styled(Card)`
    display: block;
    justify-content: center;
    width: 30rem;
    height: 30rem;
`;
const CardImg = styled(Card.Img)`
    object-fit: contain;
    padding: 10px;
    max-width: 100%;
    max-height: 100%;
`;
const StyledCard = styled(Card)`
    width: 100%
`;


export { 
    StyledContainer as Container, 
    ColImg, 
    CImg, 
    CardImg, 
    StyledCard as Card
};
