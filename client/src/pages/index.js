import { useQuery } from "@apollo/client";
import { inject } from '@vercel/analytics';
import { SpeedInsights } from "@vercel/speed-insights/react"
import React, { useCallback, useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import University from "../components/University";
import Layout from "../components/layout";
import PageRevealer from "../components/PageRevealer";
import Seo from "../components/seo";
import { QUERY } from "../data/data";
 
const Index = () => {
    // Injects vercel's analytics
    inject();

    const getLangs = (lngs) => {
        if (lngs === 'fr-CA' || lngs === 'fr-FR' || lngs === 'fr') return 'fr'
        else return 'en'
    }

    const [language, setLanguage] = useState('en')
    const [isReloadingLang, setIsReloadingLang] = useState(false)
    const [isFrontPage, setIsFrontPage] = useState(true)

    const changeLanguage = useCallback(
        () => {
            setLanguage(localStorage.getItem('Language'))

            setIsReloadingLang(true)
            setTimeout(() => {
                setIsReloadingLang(false)
            }, 2800)

            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [language]
    )

    useEffect(() => {
        if (!localStorage.getItem('Language')) {
            localStorage.setItem('Language', getLangs(navigator.language))
        }
        setLanguage(localStorage.getItem('Language'))
    }, [])


    // Query
    const { loading, error, data } = useQuery(QUERY(language))    

    // Need 2500ms or more to contain the animation on the front page
    setTimeout(() => {
        setIsFrontPage(false)
    }, 2800)
    
    if (isFrontPage || loading || isReloadingLang) {
        return (
            <div>
                <Seo/>
                <PageRevealer text={isReloadingLang ? 
                (
                    language === 'en' ? 
                    "Changing Language" :
                    "Changement de la langue"
                ) : "Adam Mihajlovic"
                } />
            </div>
        )
    }

    if (error) {
        return (
            <>
                <Seo/>
                <div>Something broke...</div>
                {error.graphQLErrors.map(({ message }, index) => (
                    <p key={index}>{message}</p>
                ))}
            </>
        )
    }

    const global = data.global
    const navs = data.myNav.navs
    const hero = data.hero
    const about = data.about
    const services = data.myService
    const projects = data.myProject
    const contact = data.myContact
    const university = data.myUniversity
    const copyrights = data.myFooter

    return (
        <Layout data={global}>
            <Seo/>
            <SpeedInsights/>
            <Navbar navLabels={navs} favicon={global.favicon.url} />
            <section id={navs[0]}>
                <Hero data={hero} />
            </section>
            <section id={navs[1]}>
                <About data={about} />
            </section>
            <section id={navs[2]}>
                <University data={university} />
            </section>
            <section id={navs[3]}>
                <Services data={services} />
            </section>
            <section id={navs[4]}>
                <Portfolio data={projects} />
            </section>
            <section id={navs[5]}>
                <Contact data={contact} />
            </section>
            <Footer data={copyrights} changeLanguage={changeLanguage}/>
        </Layout>
    )
}

export default Index
