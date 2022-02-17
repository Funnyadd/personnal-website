import React from 'react'
import { ServiceContainer, ServiceElement, ServiceIcon, ServiceHeading, ServiceSeparator, ServiceList, ServiceListElement } from './ServicesSection'
import { Container, Row, Col } from 'react-bootstrap'
import AnimatedHeading from '../animated-heading'

const Services = () => {
  return (
    <ServiceContainer>
        <Container>
            <AnimatedHeading text="My Services" />
            <Row>
                <Col md={4}>
                    <ServiceElement>
                        <ServiceIcon>
                            <img src="./icons-services/web.png" alt="Web Development" />
                        </ServiceIcon>
                        <ServiceHeading>
                            Web  Development
                        </ServiceHeading>
                        <ServiceSeparator/>
                        <ServiceList>
                            <ServiceListElement>
                                - Building applications accessible anywhere in the world.
                            </ServiceListElement>
                            <ServiceListElement>
                                - With ReactJs, GatsbyJS, NextJS, and more!
                            </ServiceListElement>
                        </ServiceList>
                    </ServiceElement>
                </Col>
                <Col md={4}>
                    <ServiceElement>
                        <ServiceIcon>
                            <img src="./icons-services/software.png" alt="Software Development" />
                        </ServiceIcon>
                        <ServiceHeading>
                            Software  Development
                        </ServiceHeading>
                        <ServiceSeparator/>
                        <ServiceList>
                            <ServiceListElement>
                                - Building applications accessible on computers.
                            </ServiceListElement>
                            <ServiceListElement>
                                - With Java, C#, C++ and more!
                            </ServiceListElement>
                            <ServiceListElement>
                                - Creation of micro services and/or any full stack application.
                            </ServiceListElement>
                        </ServiceList>
                    </ServiceElement>
                </Col>
                <Col md={4}>
                    <ServiceElement>
                        <ServiceIcon>
                            <img src="./icons-services/sketch.png" alt="UI/UX Development" />
                        </ServiceIcon>
                        <ServiceHeading>
                            Ui/UX Development
                        </ServiceHeading>
                        <ServiceSeparator/>
                        <ServiceList>
                            <ServiceListElement>
                                - Building beautiful interfaces for the world to see and enjoy.
                            </ServiceListElement>
                            <ServiceListElement>
                                - With Sass, css, html, JavaScript and more!
                            </ServiceListElement>
                            <ServiceListElement>
                                - Prototyping part of UI/UX development made in Figma or JustInMind.
                            </ServiceListElement>
                        </ServiceList>
                    </ServiceElement>
                </Col>
            </Row>
        </Container> 
    </ServiceContainer>
  )
}

export default Services