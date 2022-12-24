import React from 'react'
import { Container, Col } from 'react-bootstrap'
import AnimatedHeading from '../animated-heading'
import AnimationContainer from '../animation-container'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import PortfolioItem from './parts/PortfolioItem.js'
import { PortfolioContainer } from './PortfolioSection'
import { useStaticQuery, graphql } from "gatsby"

const Portfolio = () => {  
    const { strapiMyProject } = useStaticQuery(graphql`
        query {
            strapiMyProject {
                title
                projects {
                    title
                    category
                    link
                    source {
                      localFile {
                        url
                      }
                    }
                }
            }
        }
    `)
     
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
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <Col md={12} style={{padding: 0}} className='container'>
            <Container>
                <AnimatedHeading text={strapiMyProject.title} />
            </Container>
            <PortfolioContainer>
                <AnimationContainer animation="fadeIn">
                    <Slider {...settings}>
                        {strapiMyProject.projects.map((p, index) => {
                            return(
                                <PortfolioItem 
                                    key={index}
                                    index={index} 
                                    image={p.source.localFile.url} 
                                    text={p.title} 
                                    category={p.category}
                                    link={p.link}
                                    type="slider"
                                />
                            )
                        })}
                    </Slider>
                </AnimationContainer>
            </PortfolioContainer>
        </Col>
    )
}

export default Portfolio        