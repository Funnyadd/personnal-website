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
        myNav {
          data {
            attributes {
              navs
            }
          }
        }

        global {
            data {
              attributes {
                defaultSeo {
                    metaTitle
                    metaDescription
                  }
                favicon {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
        }

        hero {
            data {
                attributes {
                    BeforeName
                    name
                    quotes
                    Download {
                        title
                        url
                    }
                    Background {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                }
            }
        }
        
        about {
            data {
                attributes {
                    title
                    description
                    Photo {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                    skills {
                        data {
                            attributes {
                                title
                                percentage
                            }
                        }
                    }
                    educations {
                        data {
                            attributes {
                                endDate
                                description
                                institution
                                title
                                startDate
                            }
                        }
                    }
                    about_counters {
                        data {
                            attributes {
                                endDate
                                startDate
                                fullText
                                isAge
                            }
                        }
                    }
                    experiences {
                        data {
                            attributes {
                                endDate
                                description
                                institution
                                startDate
                                title
                            }
                        }
                    }
                    languages {
                        data {
                            attributes {
                                percentage
                                title
                            }
                        }
                    }
                    navigation
                }
            }
        }

        myService {
            data {
                attributes {
                    title
                    background {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                    services {
                        data {
                            attributes {
                                title
                                descriptionElements
                                image {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }  

        myProject {
            data {
                attributes {
                    title
                    projects {
                        data {
                            attributes {
                                title
                                category
                                link
                                source {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } 

        contacts {
            data {
                attributes {
                    title
                    value
                    textValue
                    source
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

    const global = data.global.data.attributes
    const navs = data.myNav.data.attributes.navs
    const hero = data.hero.data.attributes
    const about = data.about.data.attributes
    const services = data.myService.data.attributes
    const projects = data.myProject.data.attributes
    const contact = data.contacts.data

    return (
        <Layout>
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
