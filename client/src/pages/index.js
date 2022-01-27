
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import About from "../components/About"

const IndexPage = () => {
  
  return (
    <Layout>
      <Seo title="Home" />
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>

    </Layout>
  )
}

export default IndexPage