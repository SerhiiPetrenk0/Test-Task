import styled from 'styled-components'
import { Container, Card, Col } from 'react-bootstrap'

export const StyledContainer = styled(Container)`
    margin-top: 50px
`;
export const StyledColImg = styled(Col)`
    display: flex;
    justify-content: center
`;
export const StyledCImg = styled(Card)`
    display: block;
    justify-content: center;
    width: 30rem;
    height: 30rem;
`;
export const StyledCardImg = styled(Card.Img)`
    object-fit: contain;
    padding: 10px;
    max-width: 100%;
    max-height: 100%;
`;
export const StyledCard = styled(Card)`
    width: 100%
`;