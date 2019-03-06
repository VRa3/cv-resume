import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
    display: flex;
`;

const StyledButton = styled.button`
    border: 1px solid red;
    padding: 16px 12px;
    width: 50%;
    background: transparent;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 16px;
`;


const PersonBlock__Footer = () => (
    <StyledWrapper>
        <StyledButton>
            Download CV
        </StyledButton>
        <StyledButton>
            Contact Me
        </StyledButton>
    </StyledWrapper>
)


export default PersonBlock__Footer
