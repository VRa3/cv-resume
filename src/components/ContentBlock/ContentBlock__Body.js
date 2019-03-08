import styled from 'styled-components'

const ContentBlock__Body = styled.div`
    position: relative;
    padding: 20px 0;
    color: ${({theme}) => theme.colors.fontLighter};
    line-height: 1.6;
    font-size: 14px;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -20px;
        height: 100%;
        width: 1px;
        background: linear-gradient(to bottom, ${({theme}) => theme.colors.gradients.primaryToTransparent});
    }
`;

export default ContentBlock__Body