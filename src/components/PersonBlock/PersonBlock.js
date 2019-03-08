import styled from 'styled-components';

const PersonBlock = styled.section`
    position: relative;
    z-index: 100;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin-bottom: 25px;
    width: 90%;
    min-height: 600px;
    
    ${ ({theme}) => theme.mediaUp.md } {
        width: 45%;
        margin-bottom: 0;
    }
    
    ${ ({theme}) => theme.mediaUp.lg } {
        width: 40%;
        
        &::before {
            content: '';
            position: absolute;
            z-index: -10;
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
