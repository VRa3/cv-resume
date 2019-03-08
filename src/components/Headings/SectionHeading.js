import styled from 'styled-components'

const SectionHeading = styled.header`
    position: relative;
    z-index: 5;
    padding: 0 0 25px 0;
    font-size: 17px;
    font-weight: 500;
    
    &::before {
        content: '';
        position: absolute;
        z-index: -5;
        top: -5px;
        left: -10px;
        display: block;
        border-radius: 50%;
        height: 30px;
        width: 30px;
        background: linear-gradient(to right, ${({theme}) => theme.colors.gradients.secondaryToTransparent});
    }
    
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: -40px;
        display: block;
        height: 1px;
        width: calc(100% + 25px);
        background: linear-gradient(to right, ${({theme}) => theme.colors.gradients.primaryToTransparent});
    }
`;

export default SectionHeading