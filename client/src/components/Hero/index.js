import React, { useEffect } from "react"
import "./HeroCSS.scss"
import {
    HeroContainer,
    Background,
    // BackgroundThumbnail,
    HeadingBox,
    Heading,
    SubHeading,
    HeadingText,
    Type,
    ResumeLink,
} from "./HeroSection"
import Typewriter from "typewriter-effect"
import background_loop from '../../images/background_loop.mp4'
// import background_thumnail from '../../images/background-loop-thumbnail.png'

const Hero = (props) => {
    const strapiHero = props.data

    useEffect(() => {
        document.body.addEventListener('mousemove', (e) => {
            var amountMovedX = (e.clientX * -.1 / 8);
            var amountMovedY = (e.clientY * -.1 / 8);
            var x = document.getElementsByClassName("parallax-hero-item");
            var i;
            for (i = 0; i < x.length; i++) {
                if (window.innerWidth >= 850) {
                    x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
                } else {
                    x[i].style.transform='none'
                }
            }
        });
    }, [])

    return (
        <>
            <HeroContainer>
                <Background autoPlay muted loop playsInline id="backgroundVideo">
                    <source src={background_loop} type="video/mp4" />
                </Background>
                {/* <BackgroundThumbnail id="backgroundThumbnail" src={background_thumnail} type="png" /> */}
                <HeadingBox className={"parallax-hero-item"}>
                    <SubHeading>{strapiHero.beforeName}</SubHeading>
                    <Heading>
                        <HeadingText className="glitch" data-text={strapiHero.name}>
                            {strapiHero.name}
                        </HeadingText>
                    </Heading>
                    <Type>
                        <Typewriter
                            options={{
                                strings: strapiHero.quotes,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </Type>
                    <ResumeLink href={strapiHero.Download.url}>{strapiHero.Download.title}</ResumeLink>
                </HeadingBox>
            </HeroContainer>
        </>
    )
}

export default Hero
