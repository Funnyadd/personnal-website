import React, { useState }  from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import About from "../components/About"
import Contact from "../components/Contact"
import Services from "../components/Services"
import Portfolio from "../components/Portfolio"
import { useQuery } from "@apollo/client"
import { QUERY } from "../data/data"
import PageRevealer from '../components/page-revealer'

const Index = () => {
    const { loading, error, data } = useQuery(QUERY)    
    const [isFrontPage, setIsFrontPage] = useState(true);

    setTimeout(() => {
        setIsFrontPage(false)
    }, 2500)

    if (loading || isFrontPage) {
        return (
            <div>
                <PageRevealer />
            </div>
        )
    }

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

    const global = data.global.data.attributes
    const navs = data.myNav.data.attributes.navs
    const hero = data.hero.data.attributes
    const about = data.about.data.attributes
    const services = data.myService.data.attributes
    const projects = data.myProject.data.attributes
    const contact = data.contacts.data

    return (
        <Layout data={global}>
            <Seo seo={{
                    metaTitle: global.defaultSeo.metaTitle,
                    metaDescription: global.defaultSeo.metaDescription,
                }}
            />
            <Navbar navLabels={navs} favicon={global.favicon.data.attributes.url} />
            <section id={navs[0]}>
                <Hero data={hero} />
            </section>
            <section id={navs[1]}>
                <About data={about} />
            </section>
            <section id={navs[2]}>
                <Services data={services} />
            </section>
            <section id={navs[3]}>
                <Portfolio data={projects} />
            </section>
            <section id={navs[4]}>
                <Contact data={contact} />
            </section>
        </Layout>
    )
}

export default Index
