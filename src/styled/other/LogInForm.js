import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import { colors } from '../globalStyled';

export const StyledValidEmail = styled(Form.Text)`
    color: ${({ check }) => check === undefined ? colors.starDisable : colors.invaidForm }; 
    font-size: .85em
`;
