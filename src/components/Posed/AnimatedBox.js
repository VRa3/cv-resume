import React from 'react'
import posed from 'react-pose'
import styled from "styled-components";

const Box = posed.div({
    visible: {
        top: ({valueY}) => `${valueY}%`,
        left: ({valueX}) => `${valueX}%`,
        rotate: ({valueX}) => `${valueX}deg`,
        transition: {
            duration: 10000,
            ease: 'linear',
        }},

    hidden: {
        top: ({valueY}) => `${valueY}%`,
        left: ({valueX}) => `${valueX}%`,
        transition: {
            duration: 10000,
            ease: 'linear',
        }},
});

const Test = styled(Box)`
    position: fixed;
    border-radius: 25px;
    height: ${({height}) => height}px;
    min-height: 200px;
    width: ${({width}) => width}px;
    min-width: 200px;
    background: ${({theme}) => theme.colors.transparent.transparentWhite};
`;

const generateNumber = (maxNumber) => {
    return (Math.random() > 0.5 ? '1' : '-1' )*(Math.floor(Math.random() * maxNumber));
}

class AnimatedBox extends React.Component {
    state = {
        isVisible: true,
        valueX: generateNumber(200),
        valueY: generateNumber(200),
        rotateDeg: 0,
        height: Math.floor(Math.random() * 300),
        width: Math.floor(Math.random() * 300),
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                isVisible: !this.state.isVisible,
                valueX: Math.floor(Math.random() * 100),
                valueY: Math.floor(Math.random() * 100),
                rotateDeg: Math.floor(Math.random() * 360),
            });
        }, 10000);
    }

    render() {
        const {isVisible, valueX, valueY, rotateDeg, height, width} = this.state;

        return (
            <div>
                <Test pose={isVisible ? 'visible' : 'hidden'}
                      valueX={valueX}
                      valueY={valueY}
                      rotateDeg={rotateDeg}
                      height={height}
                      width={width}
                />
            </div>
        )
    }
}

export default AnimatedBox