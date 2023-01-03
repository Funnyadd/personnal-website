import * as React from "react"
import styled from "styled-components"

import Layout from "../components/layout"

const Heading = styled.div`
    text-align: center;
    margin-top: 100px;
    margin-bottom: 50px;
    font-size: 50pt;
`

const Text = styled.p`
    text-align: center;
    font-size: 16pt;
    margin-bottom: 100px;
`

const NotFoundPage = () => (
    <Layout>
        <Heading>404: Not Found</Heading>
        <Text>
            You just hit a route that doesn&#39;t exist... <br></br>Sorry for that, please try to go back to <br></br>
            <a href="adammihajlovic.ca">adammihajlovic.ca</a>
        </Text>
    </Layout>
)

export default NotFoundPage
