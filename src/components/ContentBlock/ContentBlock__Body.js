import styled from 'styled-components'

const ContentBlock__Body = styled.div`
    position: relative;
    padding: 25px 0;
    color: ${({theme}) => theme.colors.fontLighter};
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -10px;
        height: 100%;
        width: 1px;
        background: linear-gradient(to bottom, ${({theme}) => theme.colors.gradients.primaryToTransparent});
    }
`;

export default ContentBlock__Body