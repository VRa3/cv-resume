import React from "react";
import styled from "styled-components";

import Avatar from '../images/avatar.jpeg';

const StyledWrapper = styled.div`
    position: relative;
`;

const StyledPhoto = styled.img`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -65%);
    border: 5px solid ${ props => props.theme.colors.secondary};
    border-radius: 50%;
    width: 180px;
    height: 180px;
`;

const PersonBlock__Body = () => (
    <StyledWrapper>
        <StyledPhoto src={Avatar}/>
    </StyledWrapper>
)


export default PersonBlock__Body
