import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import About from "../components/About"
import Contact from "../components/Contact"
import Services from "../components/Services"
import Portfolio from "../components/Portfolio"
import { gql, useQuery } from "@apollo/client"

const Index = () => {
    const { loading, error, data } = useQuery(gql`
        {
            navs {
                data {
                    attributes {
                        navLinks
                    }
                }
            }
        }
    `)

    if (loading) return <div>Loading content...</div>
    if (error) {
        return (
            <>
                <div>Something broke...</div>
                {error.clientErrors.map((err, index) => (
                    <p key={index}>{err.message}</p>
                ))}
            </>
        )
    }

    const navLabels = []

    data.navs.data.forEach(element => {
        navLabels.push(element.attributes.navLinks)
    })

    return (
        <Layout>
            <Seo
                seo={{
                    metaTitle: "Adam Mihajlovic",
                    metaDescription: "website",
                }}
            />
            <Navbar />
            <section id={navLabels[0]}>
                <Hero />
            </section>
            <section id={navLabels[1]}>
                <About />
            </section>
            <section id={navLabels[2]}>
                <Services />
            </section>
            <section id={navLabels[3]}>
                <Portfolio />
            </section>
            <section id={navLabels[4]}>
                <Contact />
            </section>
        </Layout>
    )
}

export default Index
