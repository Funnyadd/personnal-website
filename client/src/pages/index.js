import React, { useState, useEffect, useCallback }  from "react"
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
import Footer from "../components/Footer"

const Index = () => {
    const getLangs = (lngs) => {
        if(lngs === 'fr-CA' || lngs === 'fr-FR' || lngs === 'fr') return 'fr'
        else return 'en'
    }

    const [language, setLanguage] = useState('en')

    const changeLanguage = useCallback(
        () => {
            localStorage.setItem('Language', 
                localStorage.getItem('Language') === 'en' ? 'fr' : 'en');
            setLanguage(localStorage.getItem('Language'))
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [language]
    )

    useEffect(() => {
        if(!localStorage.getItem('Language')) {
            localStorage.setItem('Language', getLangs(navigator.language))
        }
        setLanguage(localStorage.getItem('Language'))
    }, [])


    // Query
    const { loadingData, error, data } = useQuery(QUERY(language))    

    // We need 2500ms or more to contain the animation on the front page
    const DELAY_ANIMATION = 2500
    const [isFrontPage, setIsFrontPage] = useState(true)

    setTimeout(() => {
        setIsFrontPage(false)
    }, DELAY_ANIMATION)

    if (loadingData || isFrontPage) {
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
                {error.graphQLErrors.map(({ message }, index) => (
                    <p key={index}>{message}</p>
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
            <Seo data={global} />
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
            <Footer changeLanguage={changeLanguage}/>
        </Layout>
    )
}

export default Index
