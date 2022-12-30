import React from "react"
import {
    ServiceContainer,
    ServiceElement,
    ServiceIcon,
    ServiceHeading,
    ServiceSeparator,
    ServiceList,
    ServiceListElement,
    BackgroundContainer,
} from "./ServicesSection"
import { Container, Row, Col } from "react-bootstrap"
import AnimatedHeading from "../animated-heading"
import { gql, useQuery } from "@apollo/client"

const Services = () => {
    const { loading, error, data } = useQuery(gql`
        {
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

    const strapiMyService = data.myService.data.attributes

    return (
        <BackgroundContainer
            url={strapiMyService.background.data.attributes.url}
        >
            <ServiceContainer>
                <Container>
                    <AnimatedHeading text={strapiMyService.title} />
                    <Row>
                        {strapiMyService.services.data.map((e, index) => {
                            e = e.attributes
                            return (
                                <Col key={index} md={4}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                            <img
                                                src={
                                                    e.image.data.attributes.url
                                                }
                                                alt={e.title}
                                            />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            {e.title}
                                        </ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceList>
                                            {e.descriptionElements.map(
                                                (d, i) => {
                                                    return (
                                                        <ServiceListElement
                                                            key={i}
                                                        >
                                                            - {d}
                                                        </ServiceListElement>
                                                    )
                                                }
                                            )}
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
