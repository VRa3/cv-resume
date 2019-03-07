import React from "react";
import styled from "styled-components";

import Download from '../../images/icons/download.png'
import Arrow from '../../images/icons/arrow-right.png'

const StyledWrapper = styled.div`
    position: relative;
    display: flex;
    border-radius: 0 0 10px 10px;
    background: #fff;
        
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-image: linear-gradient(to right,
        ${ props => props.theme.colors.gradients.whiteToPrimary });
    }
`;

const StyledButton = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 16px 12px;
    width: 50%;
    background: transparent;
    font-family: 'Montserrat';
    font-weight: 600;
    letter-spacing: 1.5px;
    font-size: 14px;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 1px;
        background-image: linear-gradient(to top,
        ${ props => props.theme.colors.gradients.whiteToPrimaryLighter });
    }

`;

const StyledImg = styled.img`
    height: 16px;
    margin-left: 10px;
`;


const PersonBlock__Footer = () => (
    <StyledWrapper>
        <StyledButton>
            Download CV
            <StyledImg src={Download}/>
        </StyledButton>
        <StyledButton>
            Contact Me
            <StyledImg src={Arrow}/>
        </StyledButton>
    </StyledWrapper>
)


export default PersonBlock__Footer
