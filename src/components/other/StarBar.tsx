import React from 'react';

import { StyledBsStarFill, StyledStars } from '../../styled/other/StarBar';
import { colors } from '../../styled/globalStyled';

interface TypeProps {
  count: string
}

export const StarBar: React.FC<TypeProps> = props => {
    const stars: number[] = Array(5).fill(0);
    const { count } = props;
    return (
        <StyledStars>
          {stars.map((_: number, index: number) => (
              <StyledBsStarFill
                key={index}
                size={20}
                color={parseInt(count, 10) > index ? colors.starActive : colors.starDisable}
              />
            ))}
        </StyledStars>
    );
};
