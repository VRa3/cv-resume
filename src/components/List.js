import React from 'react';
import styled from 'styled-components'

import StyledStrong from '../components/StyledStrong'

const StyledList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0 0 0;
    padding: 0;
    list-style-type: none;
    color: ${ ({theme}) => theme.colors.font };
    font-size: 13px;
`;

const StyledListItem = styled.li`
    width: 50%;
`;

const List = () => (
    <StyledList>
        <StyledListItem>
            <StyledStrong>
                Age......
            </StyledStrong>
                25
        </StyledListItem>
        <StyledListItem>
            <StyledStrong>
                Residence......
            </StyledStrong>
                Netherland
        </StyledListItem>
        <StyledListItem>
            <StyledStrong>
                Freelance......
            </StyledStrong>
                Available
        </StyledListItem>
        <StyledListItem>
            <StyledStrong>
                Location......
            </StyledStrong>
                Amsterdam, NL
        </StyledListItem>
    </StyledList>
)

export default List