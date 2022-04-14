import React from 'react';
import { Card } from 'react-bootstrap';
import { StarBar } from './StarBar';
import { StyledCard } from '../../styled/other/Comment';

export const Comment = (props: { ListComment: any; }) => {
    const { ListComment } = props;
    return (
        <StyledCard>
            <Card.Body>
                <Card.Text>
                {ListComment.comments}
                </Card.Text>
                <Card.Subtitle>
                <StarBar count={ListComment.rating} />
                </Card.Subtitle>
            </Card.Body>
        </StyledCard>
    );
};
