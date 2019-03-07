import styled from 'styled-components';

const PersonBlock = styled.section`
    position: relative;
    z-index: 100;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 30%;
    min-height: 600px;
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
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(-18px, -12px);
            border-radius: 10px;
            width: 100%;
            height: 100%;
            background: ${ props => props.theme.colors.secondary };
        }
    }
`;

export default PersonBlock
