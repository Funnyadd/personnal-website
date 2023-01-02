import React from "react"
import { ServiceContainer, ServiceElement, ServiceIcon, ServiceHeading, ServiceSeparator, ServiceList, ServiceListElement, BackgroundContainer } from "./ServicesSection"
import { Container, Row, Col } from "react-bootstrap"
import AnimatedHeading from "../animated-heading"

const Services = (props) => {
    const strapiMyService = props.data

    return (
        <BackgroundContainer url={strapiMyService.background.data.attributes.url}>
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
                                            <img src={e.image.data.attributes.url} alt={e.title} />
                                        </ServiceIcon>
                                        <ServiceHeading>{e.title}</ServiceHeading>
                                        <ServiceSeparator />
                                        <ServiceList>
                                            {e.descriptionElements.map((d, i) => {
                                                return <ServiceListElement key={i}>- {d}</ServiceListElement>
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
