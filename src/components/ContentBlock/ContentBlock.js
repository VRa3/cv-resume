import styled from 'styled-components';

const ContentBlock = styled.article`
    position: relative;
    z-index: 0;
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding: 30px 40px;
    width: 40%;
    min-height: 550px;
    max-height: 550px;
    background: #fff;
    
    ${ ({theme}) => theme.mediaDown.xl } {
        width: 37%;
        min-height: 0;
    }
    
    ${ ({theme}) => theme.mediaDown.sm } {
        width: 90%;
        min-height: 0;
    }
    
    ${ ({theme}) => theme.mediaUp.md } {
        border-radius: 0 10px 10px 0;
    }
`;

export default ContentBlock
