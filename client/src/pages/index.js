
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import About from "../components/About"
import Contact from "../components/Contact"
import Services from "../components/Services"
import Portfolio from "../components/Portfolio"

const IndexPage = () => {
  const { Nav } = useStaticQuery(graphql`
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

  return (
    <Layout>
      <Seo seo={{ metaTitle: "Adam Mihajlovic", metaDescription: "website"}} />
      <Navbar sections={ Nav }/>
      <section id={ Nav[0] }>
        <Hero />
      </section>
      <section id={ Nav[1] }>
        <About />
      </section>
      <section id={ Nav[2] }>
        <Services />
      </section>
      <section id={ Nav[3] }>
        <Portfolio />
      </section>
      <section id={ Nav[4] }>
        <Contact />
      </section>
    </Layout>
  )
}

export default IndexPage