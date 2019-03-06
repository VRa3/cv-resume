import React from "react"
import styled from 'styled-components';
import Layout from '../layout/Layout'

import PersonBlock from '../components/PersonBlock'
import PersonBlock__Header from '../components/PersonBlock__Header'
import PersonBlock__Body from '../components/PersonBlock__Body'
import Navigation from '../components/Navigation'

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
`;

const IndexPage = () => (
    <Layout>
        <StyledWrapper>
            <PersonBlock>
                <Navigation/>

                <PersonBlock__Header/>
                <PersonBlock__Body/>
            </PersonBlock>
        </StyledWrapper>
    </Layout>
)

export default IndexPage
