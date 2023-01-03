import React from "react"
import { ServiceContainer, ServiceElement, ServiceIcon, ServiceHeading, ServiceSeparator, ServiceList, ServiceListElement, BackgroundContainer } from "./ServicesSection"
import { Container, Row, Col } from "react-bootstrap"
import AnimatedHeading from "../animated-heading"
import AnimationContainer from "../animation-container"

const Services = (props) => {
    const strapiMyService = props.data

    const animations = ["fadeInLeft", "fadeInUp", "fadeInRight"]

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
                                    <AnimationContainer animation={animations[index]} delay={(index + 1) * 200} duration={2}>
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
                                    </AnimationContainer>
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
