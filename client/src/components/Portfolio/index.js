import React from "react"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import AnimatedHeading from "../animated-heading"
import AnimationContainer from "../animation-container"
import { PortfolioContainer } from "./PortfolioSection"
import PortfolioItem from "./parts/PortfolioItem.js"

const Portfolio = (props) => {
    const strapiMyProject = props.data

    const settings = {
        dots: true,
        swipe: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10000,
        loop: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <Col md={12} style={{ padding: 0 }} className="container">
            <Container>
                <AnimatedHeading text={strapiMyProject.title} />
            </Container>
            <PortfolioContainer>
                <AnimationContainer animation="fadeIn" duration={2}>
                    <Slider {...settings}>
                        {strapiMyProject.projects.data.map((p, index) => {
                            p = p.attributes
                            return (
                                <PortfolioItem 
                                    key={index} 
                                    index={index} 
                                    image={p.source.data.attributes.url} 
                                    text={p.title} category={p.category} 
                                    link={p.link} 
                                    type="slider" />
                            )
                        })}
                    </Slider>
                </AnimationContainer>
            </PortfolioContainer>
        </Col>
    )
}

export default Portfolio
