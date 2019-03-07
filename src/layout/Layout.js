import React from "react"
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import {theme} from "../utils/theme";

import AnimatedBox from '../components/Posed/AnimatedBox'

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
    
    .boxo {
        height: 200px;
        width: 200px;
        background: red;
    }
`;

const AnimatedBackground = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom right, #50a3a2 0%, #2eca7f 100%);
`;

const RelativeParent = styled.div`
    position: relative;
`;


const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <RelativeParent>
            <GlobalStyle/>
            <AnimatedBackground>
                <AnimatedBox/>
                <AnimatedBox/>
                <AnimatedBox/>
                <AnimatedBox/>
                <AnimatedBox/>
            </AnimatedBackground>

            {children}

        </RelativeParent>
    </ThemeProvider>
)

export default Layout
