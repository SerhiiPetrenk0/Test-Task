import React from 'react';
import { StyledBsStarFill, StyledStars } from '../../styled/components/StarBar';
const colors = {
    orange: '#FFBA5A',
    grey: '#a9a9a9'
};

export const StarBar = props => {
    const stars = Array(5).fill(0)
    const { count } = props
    return (
        <StyledStars>
          {stars.map((_, index) => (
              <StyledBsStarFill
                key={index}
                size={20}
                color={count > index ? colors.orange : colors.grey}
              />
            ))}
        </StyledStars>
    );
}
