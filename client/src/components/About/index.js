import React, { useState, useCallback } from "react"
import {
    AboutContainer,
    LeftColumn,
    Content,
    Heading,
    Seperator,
    SummaryText,
    ImageContainer,
    Image,
    CounterRow,
    CounterComponent,
    CounterContainer,
    TabContainer,
    TabSelector,
    TabSelectors,
    Tabs,
    Tab,
} from "./AboutSection"
import Skill from "./Skill"
import Timeline from "./Timeline"
import Particles from "react-tsparticles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import AnimationContainer from "../animation-container";
import CountUp, { useCountUp } from 'react-countup'
import RevealContent from "../reveal-content";

const About = (props) => {
    const strapiAbout = props.data

    const [tab, setTab] = useState("")
    if (tab === "" || !strapiAbout.navigation.includes(tab)) setTab(strapiAbout.navigation[0])

    const numberOfYear = (startDateString, endDateString) => {
        var endDate = new Date()
        if (endDateString != null)  endDate = new Date(endDateString)

        var startDate = new Date(startDateString)
        var year = endDate.getFullYear() - startDate.getFullYear()
        var month = endDate.getMonth() - startDate.getMonth()

        if (month < 0 || (month === 0 && endDate.getDate() < startDate.getDate())) year--
        return year
    }

    const checkIf6Months = (dateString, isAge) => {
        if (isAge) return false
        var m = new Date().getMonth() - new Date(dateString).getMonth()
        if (m <= 5 && m >= -5) {
            return true
        }
        return false
    }

    const particlesInit = useCallback(async engine => {
        await loadTrianglesPreset(engine)
    }, [])

    const particleOptions = {
        fullScreen: { enable: false },
        preset: "triangles",
        particles: {
            number: {
                value: 100,
                density: {
                enable: true,
                value_area: 2000
                }
            },
            color: {
                value: ["#03afaf","#00e5ff"]
            },
            shape: {
                type: "circle",
                stroke: {
                width: 0,
                color: "#fff"
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.1,
                sync: false
                }
            },
            size: {
                value: 8.017060304327615,
                random: true,
                anim: {
                    enable: true,
                    speed: 12.181158184520175,
                    size_min: 0.1,
                    sync: true
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#555",
                opacity: 0.5,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "bounce",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: false,
                    mode: "repulse"
                },
                onclick: {
                    enable: false,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                    repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            detectRetina: true,
        }
    }

    useCountUp({
        ref: 'counter',
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
        start: 0
    })

    return (
        <>
            <AboutContainer className="container">
                <div className="row">
                    <LeftColumn className="col-md-6">
                        <AnimationContainer animation="fadeIn" duration={0.5}>
                            <ImageContainer>
                                    <RevealContent delay={500}>
                                        <Image src={strapiAbout.Photo.data.attributes.url} alt="Profile picture" />
                                    </RevealContent>
                            </ImageContainer>
                        </AnimationContainer>
                    </LeftColumn>
                    <div className="col-md-6">
                        <Content>
                            <Heading>{strapiAbout.title}</Heading>
                            <Seperator />
                            <SummaryText>{strapiAbout.description}</SummaryText>
                            <TabContainer>
                                <TabSelectors>
                                    {strapiAbout.navigation.map((e, index) => {
                                        return (
                                            <TabSelector key={index} className={tab === e ? "active" : ""} onClick={() => setTab(e)}>
                                                {e}
                                            </TabSelector>
                                        )
                                    })}
                                </TabSelectors>
                                <Tabs>
                                    <Tab style={{ display: tab === strapiAbout.navigation[0] ? "block" : "none" }}>
                                        {strapiAbout.skills.data.map((s, index) => {
                                            s = s.attributes
                                            return <Skill key={index} header={s.title} percentage={s.percentage}></Skill>
                                        })}
                                    </Tab>
                                    <Tab style={{ display: tab === strapiAbout.navigation[3] ? "block" : "none" }}>
                                        {strapiAbout.languages.data.map((l, index) => {
                                            l = l.attributes
                                            return <Skill key={index} header={l.title} percentage={l.percentage}></Skill>
                                        })}
                                    </Tab>
                                </Tabs>
                                <Tabs>
                                    <Tab style={{ display: tab === strapiAbout.navigation[1] ? "block" : "none" }}>
                                        <Timeline
                                            data={strapiAbout.experiences.data.map(e => {
                                                e = e.attributes
                                                return {
                                                    title: e.title,
                                                    institution: e.instittution,
                                                    description: e.description,
                                                    startDate: e.startDate,
                                                    endDate: e.endDate,
                                                }
                                            })}
                                        />
                                    </Tab>
                                    <Tab style={{ display: tab === strapiAbout.navigation[2] ? "block" : "none" }}>
                                        <Timeline
                                            data={strapiAbout.educations.data.map(e => {
                                                e = e.attributes
                                                return {
                                                    title: e.title,
                                                    institution: e.instittution,
                                                    description: e.description,
                                                    startDate: e.startDate,
                                                    endDate: e.endDate,
                                                }
                                            })}
                                        />
                                    </Tab>
                                </Tabs>
                            </TabContainer>
                        </Content>
                    </div>
                </div>
            </AboutContainer>
            <CounterRow>
                <Particles 
                    id="tsparticles"
                    init={particlesInit}
                    options={particleOptions}
                />
                <div className="container">
                    <div className="row">
                        {strapiAbout.about_counters.data.map((c, index) => {
                            c = c.attributes
                            return (
                                <div key={index} className="col-md-3">
                                    <AnimationContainer animation="fadeIn" delay={200} duration={2}>
                                        <CounterComponent>
                                            <CounterContainer>
                                                <div className="valueContainer">
                                                <CountUp className="value" enableScrollSpy duration={6} end={numberOfYear(c.startDate, c.endDate)}/>
                                                </div>
                                                <div className="symbolContainer">
                                                    {checkIf6Months(c.startDate, c.isAge) 
                                                    ? 
                                                    <span className="symbol">+</span> 
                                                    : 
                                                    <></>}
                                                </div>
                                                <div className="textContainer">
                                                    <span className="text">{c.fullText}</span>
                                                </div>
                                            </CounterContainer>
                                        </CounterComponent>
                                    </AnimationContainer>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </CounterRow>
        </>
    )
}

export default About
