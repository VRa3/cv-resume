import styled from 'styled-components'

const ContentBlock__Section = styled.section`
    & + & {
        margin-top: 25px;
    }
`;

export default ContentBlock__Section