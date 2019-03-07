import styled from 'styled-components';

const ContentBlock = styled.article`
    position: relative;
    z-index: 0;
    display: flex;
    flex-direction: column;
    border-radius: 0 10px 10px 0;
    padding: 25px;
    width: 30%;
    min-height: 550px;
    background: #fff;
    
    ${ ({theme}) => theme.mediaDown.xl } {
        width: 60%;
        min-height: 0;
    }
    
    ${ ({theme}) => theme.mediaDown.sm } {
        width: 90%;
        min-height: 0;
    }
    
    ${ ({theme}) => theme.mediaUp.md } {
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            height: 100%;
            width: 15px;
            background-image: linear-gradient(to left, ${({theme}) => theme.colors.gradients.grayToTransparent});
        }
    }
`;

export default ContentBlock
