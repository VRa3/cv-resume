import styled from 'styled-components';

const Heading = styled.h2`
    margin-bottom: 14px;
    font-size: 28px;    
    color: ${(props) => props.theme.colors.font};
    text-align: center;
    line-height: 1;
`;

export default Heading
