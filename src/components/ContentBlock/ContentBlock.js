import styled from 'styled-components';

const ContentBlock = styled.article`
    position: relative;
    z-index: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 90%;
    min-height: 550px;
    max-height: 550px;
    background: #fff;
    
    ${ ({theme}) => theme.mediaUp.md } {
        width: 45%;
        border-radius: 0 10px 10px 0;
    }
    
    ${ ({theme}) => theme.mediaUp.lg } {
        width: 40%;
    }
`;

export default ContentBlock
