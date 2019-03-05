import React from "react"
import Layout from '../layout/Layout'
import PersonBlock from '../components/PersonBlock'
import Navigation from '../components/Navigation'

const IndexPage = () => (
    <Layout>
        <>
            <h1>hello, gatsby</h1>
            <PersonBlock>
                <Navigation/>
                Hejka
            </PersonBlock>
        </>
    </Layout>
)

export default IndexPage
