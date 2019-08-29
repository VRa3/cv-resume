import React from 'react'
import styled from 'styled-components'
import Speedometr from '../../images/icons/speedometr.png'


const StyledWrapper = styled.div`
    width: 100%;
    text-align: center;
    
    ${({theme}) => theme.mediaUp.lg} {
        width: 50%;
    }
    
    ${({theme}) => theme.mediaDown.lg} {
        &:not(:last-of-type) {
            margin-bottom: 30px;
        }
    }
`;

const StyledImg = styled.img`
    height: 36px;
    width: auto;
    transform: ${({type}) => type === 'basic' ? 'scale(1,-1) rotate(180deg)' : ''};
`;


const StyledDiv = styled.div`
    line-height: 1;
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.font};
    font-weight: 600;
`;

const PricingDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
    line-height: 1;
    font-size: 28px;
`;

const Sup = styled.sup`
    align-self: flex-start;
    font-size: 17px;
`;

const Sub = styled.sub`
    align-self: flex-end;
    font-size: 14px;
`;

const Price = styled.span`
    padding: 0 5px;
    color: ${({theme}) => theme.colors.font};
    font-weight: 500;
`;

const BenefitsList = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

const Benefit = styled.li`
    
`;

class PricingBlock extends React.Component {
    render() {
        return (
            <StyledWrapper>
                <StyledDiv>
                    <StyledImg type={this.props.type} src={Speedometr} alt=""/>
                </StyledDiv>
                <StyledDiv>
                    {this.props.type}
                </StyledDiv>

                <PricingDiv>
                    <Sup>$</Sup><Price>{this.props.price}</Price><Sub>hour</Sub>
                </PricingDiv>

                <BenefitsList>
                    {this.props.list.map(benefit => <Benefit>{benefit}</Benefit> )}
                </BenefitsList>

            </StyledWrapper>
        )
    }
}

export default PricingBlock