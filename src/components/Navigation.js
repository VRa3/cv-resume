import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const StyledWrapper = styled.nav`
    position: absolute;
    top: 10px;
    right: calc(100% + 10px);
    display: flex;
    flex-direction: column;
`;

const StyledItem = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    height: 75px;
    width: 75px;
    text-decoration: none;
    color: #323232;
    font-weight: 600;
    
    & + & {
        border-top: 1px solid silver;
    }
    
    &:first-child {
        border-radius: 5px 5px 0 0;
    }
    &:last-child {
    border-radius: 0 0 5px 5px;
`;

const Navigation = () => (
    <StyledWrapper>
        <StyledItem>About</StyledItem>
        <StyledItem>Resume</StyledItem>
        <StyledItem>Works</StyledItem>
        <StyledItem>Blog</StyledItem>
        <StyledItem>Contact</StyledItem>
    </StyledWrapper>
)

export default Navigation


