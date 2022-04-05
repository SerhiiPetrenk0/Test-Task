import React from 'react';
import { StyledBsStarFill, StyledStars } from '../../styled/components/StarBar';
import { colors } from '../../styled/globalStyled';

export const StarBar = props => {
    const stars = Array(5).fill(0);
    const { count } = props;
    return (
        <StyledStars>
          {stars.map((_, index) => (
              <StyledBsStarFill
                key={index}
                size={20}
                color={count > index ? colors.starActive : colors.starDisable}
              />
            ))}
        </StyledStars>
    );
};
