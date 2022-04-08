import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import { colors } from '../globalStyled';

export const StyledValidEmail = styled(Form.Text)`
    color: ${({ check }) => check ? colors.invaidForm : colors.validForm}; 
    font-size: .85em
`;
