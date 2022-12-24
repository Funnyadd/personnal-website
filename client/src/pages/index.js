
import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import About from "../components/About"
import Contact from "../components/Contact"
import Services from "../components/Services"
import Portfolio from "../components/Portfolio"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const navName = useStaticQuery(graphql`
    query {
        allStrapiNav {
            edges {
                node {
                    navLinks
                }
            }
        }
    }
  `)

  const navLabels = []

    navName.allStrapiNav.edges.forEach(element => {
        navLabels.push(element.node.navLinks)
    });

  return (
    <Layout>
      <Seo seo={{ metaTitle: "Adam Mihajlovic", metaDescription: "website"}} />
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

export default IndexPage