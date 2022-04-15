import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';

export const GlobalStyle = createGlobalStyle`
    *,
    ::after,
    ::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    },
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    },
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
`;

export const devices: TypeDevices = {
    XSmall: '(max-width: 575.98px)',
    Small: '(min-width: 576px)',
    Medium: '(min-width: 768px)',
    Large: '(min-width: 992px)',
    ELarge: '(min-width: 1200px)',
    EElarge: '(min-width: 1400px)'
  };

export const colors: TypeColors = {
    cardSubtitle: '#323232',
    link: '#000000',
    starActive: '#FFBA5A',
    starDisable: '#a9a9a9',
    invaidForm: '#BC0300',
    validForm: '#00BC10'
};
export const PageSpinner = styled(Spinner)`
    position: absolute;
    left: 45%;
    top: 45%;
    width: 100px;
    height: 100px;
`;

//Type for globalStyled
type TypeDevices = {
    XSmall: string,
    Small: string,
    Medium: string,
    Large: string,
    ELarge: string,
    EElarge: string
};
type TypeColors = {
    cardSubtitle: string,
    link: string,
    starActive: string,
    starDisable: string,
    invaidForm: string,
    validForm: string
};
