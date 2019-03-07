import styled from 'styled-components';
import Motion from '../images/backgrounds/motion.jpg';

const PersonBlock__Header = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 270px;
    border-radius: 10px 10px 0 0;
    background-image: url(${Motion});
    background-size: cover;
    
    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        transform: rotate(10deg);
        transform-origin: top left;
        padding-top: 13%;
        width: 100%;
        height: 0;
        background: #fff;
    }
    &::after {
        content: '';
        position: absolute;
        bottom: -10%;
        right: -50px;
        transform: rotate(-5deg);
        transform-origin: top right;
        padding-top: 15%;
        width: 100%;
        height: 0;
        background: #fff;
    }
    
    ${({theme}) => theme.mediaDown.md} {
        border-radius: 0;
        height: 180px;
    }
`;

export default PersonBlock__Header
