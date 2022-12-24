import React from 'react'
import './HeroCSS.scss'
import { 
    HeroContainer, 
    Background,
    HeadingBox,
    Heading, 
    SubHeading, 
    HeadingText, 
    Type, 
    ResumeLink, 
    //FloatingIcon 
} from './HeroSection'
import Typewriter from 'typewriter-effect'
import { useStaticQuery, graphql } from "gatsby"
// import { FaDocker, FaJava, FaNodeJs, FaReact } from 'react-icons/fa'
// import { SiCsharp, SiGatsby, SiJavascript } from 'react-icons/si'
// import { DiMysql, DiPython } from 'react-icons/di'

const Hero = () => {
//     const upperSideMin = 80;
//     const upperSideMax = 90;
//     const lowerSideMin = 5;
//     const lowerSideMax = 10;

    const { strapiHero } = useStaticQuery(graphql`
        query {
            strapiHero {
                BeforeName
                name
                quotes {
                    strapi_json_value
                }
                Download {
                    title
                    url
                }
                Background {
                    localFile {
                        url
                    }
                }
            }
        }
    `)

    return (
        <>
        <HeroContainer>
            <Background autoPlay muted loop id="backgroundVideo">
                <source src={strapiHero.Background.localFile.url} type="video/mp4" />
            </Background>
            <HeadingBox>
                <SubHeading>
                    {strapiHero.BeforeName}
                </SubHeading>
                <Heading>
                    <HeadingText className="glitch" data-text={strapiHero.beforeName}>
                    {strapiHero.name}
                    </HeadingText>
                </Heading>
                <Type>
                    <Typewriter
                        options={{
                            strings: strapiHero.quotes.strapi_json_value,
                            autoStart: true,
                            loop: true,
                          }}
                    />
                </Type>
                <ResumeLink href={strapiHero.Download.url}>
                    {strapiHero.Download.title}
                </ResumeLink>
            </HeadingBox>
            {/* <FloatingIcon bottom={Math.random() * (upperSideMax - upperSideMin) + upperSideMin} left={10} className='move-up'><FaReact size="auto" fill="#61DBFB" /></FloatingIcon>
            <FloatingIcon bottom={Math.random() * (lowerSideMax - lowerSideMin) + lowerSideMin} left={20} className='move-up'><FaJava size="auto" fill="#f89820" /></FloatingIcon>
            <FloatingIcon bottom={Math.random() * (upperSideMax - upperSideMin) + upperSideMin} left={30} className='move-down'><SiJavascript size="auto" fill="#f7df1e" /></FloatingIcon>
            <FloatingIcon bottom={Math.random() * (lowerSideMax - lowerSideMin) + lowerSideMin} left={40} className='move-down'><FaDocker size="auto" fill="#0db7ed" /></FloatingIcon>
            <FloatingIcon bottom={Math.random() * (upperSideMax - upperSideMin) + upperSideMin} left={50} className='move-up'><SiCsharp size="auto" fill="#7503f3" /></FloatingIcon>
            <FloatingIcon bottom={Math.random() * (lowerSideMax - lowerSideMin) + lowerSideMin} left={60} className='move-up'><DiMysql size="auto" fill="#00758F" /></FloatingIcon>
            <FloatingIcon bottom={Math.random() * (upperSideMax - upperSideMin) + upperSideMin} left={70} className='move-up'><DiPython size="auto" fill="#FFE873" /></FloatingIcon>
            <FloatingIcon bottom={Math.random() * (lowerSideMax - lowerSideMin) + lowerSideMin} left={80} className='move-up'><SiGatsby size="auto" fill="#663399" /></FloatingIcon>
            <FloatingIcon bottom={Math.random() * (upperSideMax - upperSideMin) + upperSideMin} left={90} className='move-down'><FaNodeJs size="auto" fill="#3C873A" /></FloatingIcon> */}
        </HeroContainer>
        </>
    )
};

export default Hero;
