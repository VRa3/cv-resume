import React from "react";
import styled from "styled-components";
import Avatar from '../images/avatar.jpeg';

import Heading from "../components/Headings/Heading"
import IconsHolder from '../components/IconsHolder'

const StyledWrapper = styled.div`
    position: relative;
    flex: 1 1 auto;
    padding: 50px 15px 15px 15px;
`;

const StyledPhoto = styled.img`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -65%);
    border: 4px solid ${ props => props.theme.colors.secondary};
    border-radius: 50%;
    width: 140px;
    height: 140px;
`;

const StyledSpan = styled.span`
    display: block;
    text-align: center;
    color: ${({theme}) => theme.colors.secondary};
    font-size: 16px;
    margin-bottom: ${({smallMargin}) => smallMargin ? '14px;' : '0;'}
`;

const PersonBlock__Body = () => (
    <StyledWrapper>
        <StyledPhoto src={Avatar}/>
        <Heading>
            Carl Benson
        </Heading>
        <StyledSpan smallMargin>
            Web Designer
        </StyledSpan>
        <IconsHolder/>
    </StyledWrapper>
)


export default PersonBlock__Body
