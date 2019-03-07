import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

import Person from '../images/icons/user.png'
import Document from '../images/icons/contract.png'
import Website from '../images/icons/website.png'
import Mail from '../images/icons/mail.png'

const StyledWrapper = styled.nav`
    position: absolute;
    top: 10px;
    right: calc(100% + 10px);
    display: flex;
    flex-direction: column;
    
    ${ ({theme}) => theme.mediaDown.md } {
        position: static;
        flex-direction: row;
        justify-content: space-between;
    }
`;

const StyledItem = styled(Link)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    height: 75px;
    width: 75px;
    text-decoration: none;
    color: ${props => props.theme.colors.font};
    font-weight: 600;
    font-size: 13px;
    
    &:first-child {
        border-radius: 5px 0 0 0;
        }
    &:last-child {
        border-radius: 0 5px 0 0;
    }
    
    ${ ({theme}) => theme.mediaUp.md } {
        &:not(:last-child) {
            &::before {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                display: block;
                width: 100%;
                height: 3px;
                background-image: linear-gradient(to right,
                ${ props => props.theme.colors.gradients.whiteToPrimary });
                background-size: 200%;
                transition: all 0.5s;
            }
        }
        
        &:hover {
            &::before {
                background-position: top right;
            }
        }
        
        &:first-child {
        border-radius: 5px 5px 0 0;
        }
        &:last-child {
            border-radius: 0 0 5px 5px;
        }
    }
`;

const StyledIcon = styled.img`
    max-width: 100%;
    width: 20px;
    margin-bottom: 6px;
`;

const Navigation = () => (
    <StyledWrapper>
        <StyledItem to={'/page-2.js'}>
            <StyledIcon src={Person}/>
            About
        </StyledItem>
        <StyledItem to={'/page-2.js'}>
            <StyledIcon src={Document}/>
            Resume
        </StyledItem>
        <StyledItem to={'/page-2.js'}>
            <StyledIcon src={Website}/>
            Works
        </StyledItem>
        <StyledItem to={'/page-2.js'}>
            <StyledIcon src={Mail}/>
            Contact
        </StyledItem>
    </StyledWrapper>
)

export default Navigation


