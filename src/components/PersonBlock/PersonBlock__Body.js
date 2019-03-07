import React from "react";
import styled from "styled-components";
import Avatar from '../../images/avatar.jpeg';

import Heading from "../../components/Headings/Heading"
import IconsHolder from '../../components/IconsHolder'

const StyledWrapper = styled.div`
    position: relative;
    flex: 1 1 auto;
    padding: 0 15px 15px 15px;
    background: #fff;
    text-align: center;
`;

const StyledPhotoWrapper = styled.div`
    position: relative;
    border-radius: 50%;
    margin: -75px auto 0;
    width: 140px;
    height: 140px;
    background: red;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-8px, 8px);
        border-radius: 50%;
        width: 140px;
        height: 140px;
        background: ${ props => props.theme.colors.transparent.transparentPrimary };
    }
`;

const StyledPhoto = styled.img`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    border: 4px solid ${ props => props.theme.colors.secondary };
    border-radius: 50%;
    width: 140px;
    height: 140px;
`;

const StyledSpan = styled.span`
    display: block;
    text-align: center;
    color: ${({theme}) => theme.colors.secondary};
    font-size: 14px;
    margin-bottom: ${({smallMargin}) => smallMargin ? '14px;' : '0;'}
`;

const PersonBlock__Body = () => (
    <StyledWrapper>
        <StyledPhotoWrapper>
            <StyledPhoto src={Avatar}/>
        </StyledPhotoWrapper>

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
