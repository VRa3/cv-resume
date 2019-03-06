import React from "react"
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import {theme} from "../utils/theme";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Montserrat';
        font-weight: 500;
        color: ${theme.colors.font};
    }
    
    html, body {
        height: 100%;
    }
    
    *, *::before, *::after {
        box-sizing: border-box;
    }
`;

const AnimatedBackground = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom right, #50a3a2 0%, #2eca7f 100%);
`;

const AnimatedItem = styled.div`
    position: absolute;
    top: 15%;
    left: 15%;
    border-radius: 25px;
    height: 25%;
    padding-top: 25%;
    width: 6px;
    background: ${ ({props}) => theme.colors.transparentWhite };
    transform: rotate(6deg);
`;


const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle/>
            <AnimatedBackground>
                {children}
                <AnimatedItem/>

            </AnimatedBackground>
        </>
    </ThemeProvider>
)

export default Layout
