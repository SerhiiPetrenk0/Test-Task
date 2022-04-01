import React from 'react';
import { Card } from 'react-bootstrap';
import { StarBar } from './StarBar';
import { StyledCard } from '../../../styled/screens/components/Comment';

export const Comment = props => {
    const { ListComment } = props
    return(
        <StyledCard>
            <Card.Body>
                <Card.Text>
                {ListComment.discription}
                </Card.Text>
                <Card.Subtitle>
                <StarBar count={ListComment.stars} />
                </Card.Subtitle>
            </Card.Body>
        </StyledCard>
    )
}