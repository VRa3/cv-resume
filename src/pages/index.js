import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

import React from "react"
import styled from 'styled-components'
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

import PricingBlock from '../components/PricingBlock/PricingBlock'



const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 25px 0;
    min-height: 100vh;
    width: 100%;
    max-width: 1400px;
    
    ${({theme}) => theme.mediaUp.md } {
        flex-direction: row;
    }
`;

const ServiceCardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
`;

const PricingCardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
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

const generatePricingBlocks = () => {
    const content = [
        {
            type: 'basic',
            price: 22,
            list: [
                'Web Development',
                'Game Development',
                'Music Writing',
                'Advertising',
            ]
        },
        {
            type: 'pro',
            price: 48,
            list: [
                'Web Development',
                'Game Development',
                'Music Writing',
                'Advertising',
                'Copywriting',
                'Photography'
            ]
        },
    ];

    return (
        content.map(item => {
            return (
                <PricingBlock
                    type={item.type}
                    price={item.price}
                    list={item.list}
                    key={item.type}
                />
            )
        })
    )
}


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
                        <SimpleBar className={'custom-scroll'}>
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
                                    Pricing plans
                                </SectionHeading>

                                <ContentBlock__Body>
                                    <PricingCardsWrapper>
                                        {generatePricingBlocks()}
                                    </PricingCardsWrapper>
                                </ContentBlock__Body>
                            </ContentBlock__Section>
                        </SimpleBar>

                    </ContentBlock>
                </StyledWrapper>
            </Layout>
        )
    }
}

export default IndexPage
