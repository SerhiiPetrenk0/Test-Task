import styled from 'styled-components';
import { Form } from 'react-bootstrap';

import { colors } from '../globalStyled';

export const StyledValidEmail = styled(Form.Text)<{check: undefined | string}>`
    color: ${({ check }) => check === undefined ? colors.starDisable : colors.invalidForm }; 
    font-size: .85em
`;
