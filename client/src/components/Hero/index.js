import React from 'react';
import './HeroCSS.scss'
import { HeroContainer, Background, HeadingBox, Heading, SubHeading, HeadingText, Type, ResumeLink } from './HeroSection'
import Typewriter from 'typewriter-effect';

const Hero = () => {
    
    return (
        <>
        <HeroContainer>
            <Background autoPlay muted loop id="backgroundVideo">
                <source src="./background-loop.mp4" type="video/mp4" />
            </Background>
            <HeadingBox>
                <SubHeading>
                    Hello, I'm
                </SubHeading>
                <Heading>
                    <HeadingText className="glitch" data-text="Adam Mihajlovic">
                        Adam Mihajlovic
                    </HeadingText>
                </Heading>
                <Type>
                    <Typewriter
                        options={{
                            strings: ['I am creative', 'I love to develop', 'I love design'],
                            autoStart: true,
                            loop: true,
                          }}
                    />
                </Type>
                <ResumeLink href="#">
                    Download Resume
                </ResumeLink>
            </HeadingBox>
        </HeroContainer>
        </>
    )
};

export default Hero;
