import React from "react"
import styled from 'styled-components';
import Layout from '../layout/Layout'

import SectionHeading from '../components/Headings/SectionHeading'

import PersonBlock from '../components/PersonBlock/PersonBlock'
import PersonBlock__Header from '../components/PersonBlock/PersonBlock__Header'
import PersonBlock__Body from '../components/PersonBlock/PersonBlock__Body'
import PersonBlock__Footer from '../components/PersonBlock/PersonBlock__Footer'
import Navigation from '../components/Navigation'

import ContentBlock from '../components/ContentBlock/ContentBlock'
import ContentBlock__Section from '../components/ContentBlock/ContentBlock__Section'
import ContentBlock__Body from '../components/ContentBlock/ContentBlock__Body'

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px 0;
    min-height: 100vh;
    width: 100%;
`;

const IndexPage = () => (
    <Layout>
        <StyledWrapper>
            <PersonBlock>
                <Navigation/>

                <PersonBlock__Header/>
                <PersonBlock__Body/>
                <PersonBlock__Footer/>

            </PersonBlock>
            <ContentBlock>
                <ContentBlock__Section>
                    <SectionHeading>
                        Hello
                    </SectionHeading>

                    <ContentBlock__Body>
                        Gatsby is a blazing fast modern site generator for React. Gatsby is a blazing fast modern site generator for React.
                    </ContentBlock__Body>
                </ContentBlock__Section>
                <ContentBlock__Section>
                    <SectionHeading>
                        Hello2
                    </SectionHeading>

                    <ContentBlock__Body>
                        To get started with Gatsby, you’ll need to make sure you have the following software tools installed:
                        To get started with Gatsby, you’ll need to make sure you have the following software tools installed:
                    </ContentBlock__Body>
                </ContentBlock__Section>
            </ContentBlock>
        </StyledWrapper>
    </Layout>
)

export default IndexPage
