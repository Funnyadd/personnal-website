
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import About from "../components/About"
import Contact from "../components/Contact"
import Services from "../components/Services"

const IndexPage = () => {
  
  return (
    <Layout>
      <Seo title="Adam Mihajlovic" />
      <Navbar sections={ ['home', 'about', 'services', 'contact'] }/>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </Layout>
  )
}

export default IndexPage