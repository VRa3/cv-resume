import React from 'react'
import styled from 'styled-components'

import StyledStrong from '../StyledStrong'
import H3 from '../Headings/H3'

const StyledWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 15px 15px 15px;
    width: 50%;
    
    &:nth-child(-n+2) {
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: -5px;
            display: block;
            height: 1px;
            width: calc(100% + 25px);
            background: linear-gradient(to right, ${({theme}) => theme.colors.gradients.primaryToTransparent});
        }
    }
    
    &:nth-child(n+3) {
        padding: 15px 15px 0 15px;
    }
        
    &:nth-child(2) {
        &::after {
            content: '';
            position: absolute;
            top: -20px;
            left: -5px;
            display: block;
            height: 200%;
            width: 1px;
            background: linear-gradient(to bottom, ${({theme}) => theme.colors.gradients.primaryToTransparent});
        }
        
        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: -5px;
            display: block;
            height: 1px;
            width: 100%;
            background: linear-gradient(to right, ${({theme}) => theme.colors.gradients.primaryToTransparent});
        }
    }
`;

const StyledImg = styled.img`
    height: 45px;
`;

class ServiceCard extends React.Component {
    render () {
        return (
            <StyledWrapper>
                <StyledImg src={this.props.img} alt=""/>
                <H3>
                    <StyledStrong>
                        {this.props.heading}
                    </StyledStrong>
                </H3>
                <div>
                    {this.props.caption}
                </div>
            </StyledWrapper>
        )
    }
}

export default ServiceCard

