import React from "react";
import styled from "styled-components";

import Facebook from '../images/icons/facebook.png';
import Github from '../images/icons/github-logo.png';
import Twitter from '../images/icons/twitter.png';

const StyledIcon = styled.img`
    height: 16px;
    
    & + & {
        margin-left: 10px;
    }
`;

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const IconsHolder = () => (
    <StyledWrapper>
        <StyledIcon src={Facebook}/>
        <StyledIcon src={Github}/>
        <StyledIcon src={Twitter}/>
    </StyledWrapper>
)

export default IconsHolder