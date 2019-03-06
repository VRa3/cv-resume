import styled from 'styled-components';

const PersonBlock = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin: 0 auto;
    width: 30%;
    min-height: 600px;
    background: #fff;
    
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
`;

export default PersonBlock
