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

import List from '../components/List'

import ServiceCard from '../components/ServiceCard/ServiceCard'
import Coding from '../images/icons/coding.png'
import Console from '../images/icons/console.png'
import Megaphone from '../images/icons/megaphone.png'
import MusicalNote from '../images/icons/musical-note.png'

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px 0;
    min-height: 100vh;
    width: 100%;
    
    ${({theme}) => theme.mediaUp.md } {
        flex-direction: row;
    }
`;

const ServiceCardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
`;

const generateServiceCards = () => {
    const content = [
        {
            src: Coding,
            heading: 'Web development',
            caption: 'Dive deeper into different topics around building with Gatsby, like sourcing.'
        },
        {
            src: Console,
            heading: 'Game development',
            caption: 'Check out libraries for Gatsby starters and plugins, as well.'
        },
        {
            src: Megaphone,
            heading: 'Music writing',
            caption: 'Gatsby provides multiple solutions for adding images and files into your projects.'
        },
        {
            src: MusicalNote,
            heading: 'Advertising',
            caption: 'Localization is a common problem and there are many solutions, each'
        },
    ];

    return (
        content.map(item => {
            return (
                <ServiceCard
                    img={item.src}
                    heading={item.heading}
                    caption={item.caption}
                    key={item.heading}
                />
            )
        })
    )
};


class IndexPage extends React.Component {
    render() {
        return (
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
                                About Gatsby
                            </SectionHeading>

                            <ContentBlock__Body>
                                Gatsby is a blazing fast modern site generator for React. Gatsby is a blazing fast modern site generator for React.

                                <List hasTopMargin />
                            </ContentBlock__Body>
                        </ContentBlock__Section>

                        <ContentBlock__Section>
                            <SectionHeading>
                                Getting started
                            </SectionHeading>

                            <ContentBlock__Body>
                                <ServiceCardsWrapper>
                                    {generateServiceCards()}
                                </ServiceCardsWrapper>
                            </ContentBlock__Body>
                        </ContentBlock__Section>

                        <ContentBlock__Section>
                            <SectionHeading>
                                Getting started
                            </SectionHeading>

                            <ContentBlock__Body>
                                <ServiceCardsWrapper>
                                    {generateServiceCards()}
                                </ServiceCardsWrapper>
                            </ContentBlock__Body>
                        </ContentBlock__Section>
                    </ContentBlock>
                </StyledWrapper>
            </Layout>
        )
    }
}

export default IndexPage
