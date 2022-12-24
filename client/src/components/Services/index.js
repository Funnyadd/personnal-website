import React from 'react'
import { ServiceContainer, ServiceElement, ServiceIcon, ServiceHeading, ServiceSeparator, ServiceList, ServiceListElement, BackgroundContainer } from './ServicesSection'
import { Container, Row, Col } from 'react-bootstrap'
import AnimatedHeading from '../animated-heading'
import { useStaticQuery, graphql } from "gatsby"

const Services = () => {
    const { strapiMyService } = useStaticQuery(graphql`
        query {
            strapiMyService {
                background {
                  localFile {
                    url
                  }
                }
                title
                services {
                  title
                  image {
                    localFile {
                      url
                    }
                  }
                  descriptionElements {
                    strapi_json_value
                  }
                }
            }
        }
    `)

  return (
    <BackgroundContainer url={strapiMyService.background.localFile.url}>
        <ServiceContainer>
            <Container>
                <AnimatedHeading text="My Services" />
                <Row>
                    {strapiMyService.services.map((e,index) => {
                        return(
                            <Col key={index} md={4}>
                                <ServiceElement>
                                    <ServiceIcon>
                                        <img src={e.image.localFile.url} alt={e.title} />
                                    </ServiceIcon>
                                    <ServiceHeading>
                                        {e.title}
                                    </ServiceHeading>
                                    <ServiceSeparator/>
                                    <ServiceList>
                                        {e.descriptionElements.strapi_json_value.map((d, i) => {
                                            return(
                                                <ServiceListElement key={i}>
                                                    - {d}
                                                </ServiceListElement>
                                            )
                                        })}
                                    </ServiceList>
                                </ServiceElement>
                            </Col>
                        )
                    })}
                </Row>
            </Container> 
        </ServiceContainer>
    </BackgroundContainer>
  )
}

export default Services