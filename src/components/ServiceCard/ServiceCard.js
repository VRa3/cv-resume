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
    
    &:nth-child(n+3) {
        padding: 15px;
    }
    
    &:nth-child(-n+2) {
        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: -5px;
            width: 200%;
            height: 1px;
            background: linear-gradient(to right, ${({theme}) => theme.colors.gradients.primaryToTransparent});
        }
    }

    &:nth-child(2) {
        &::before {
            content: '';
            position: absolute;
            top: -20px;
            left: 0;
            height: calc(200% + 20px);
            width: 1px;
            background: linear-gradient(to bottom, ${({theme}) => theme.colors.gradients.primaryToTransparent});
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

