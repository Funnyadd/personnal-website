import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
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
    RevealContainer
} from './AboutSection';
import Skill from './Skill';
import Timeline from './Timeline'

const About = () => {
    const { navigation } = useStaticQuery(graphql`
    {
        allStrapiAboutNavigationJsonnode {
            edges {
            node {
                strapi_json_value
                }
            }
        }
    }
      
  `)

    const [tab, setTab] = useState("skills");

    const skills = [
        {
            header: 'React',
            percentage: 70
        },
        {
            header: 'JavaScript',
            percentage: 75
        },
        {
            header: 'Java',
            percentage: 80
        },
        {
            header: 'C#',
            percentage: 70
        },
        {
            header: 'MySQL',
            percentage: 85
        }
    ]

    const languages = [
        {
            header: 'French',
            percentage: 100
        },
        {
            header: 'English',
            percentage: 100
        }
    ]

    const birthDateStr = "2002-08-09"
    const experienceStartDateStr = "2018-06-05"

    const numberOfYear = (dateString) => {
        var today = new Date()
        var startDate = new Date(dateString)
        var year = today.getFullYear() - startDate.getFullYear()
        var m = today.getMonth() - startDate.getMonth()
        if (m < 0 || (m === 0 && today.getDate() < startDate.getDate())) {
            year--
        }
        return year
    }

    const checkIf6Months = (dateString) => {
        var today = new Date()
        var startDate = new Date(dateString)
        var m = today.getMonth() - startDate.getMonth()
        if (m <= 5 && m >= -5 ) {
            return true
        }
        else {
            return false
        }
    }

    return (
        <>
            <AboutContainer className='container'>
                <div className='row'>
                    <LeftColumn className='col-md-6'>
                        <Content>
                            <ImageContainer>
                                <div>
                                    <RevealContainer className='animate'>
                                        <Image src="./profile-picture.png" alt="Profile picture" />
                                    </RevealContainer>
                                </div>
                            </ImageContainer>
                        </Content>
                    </LeftColumn>
                    <div className='col-md-6'>
                        <Content>
                            <Heading>
                                About Me
                            </Heading>
                            <Seperator />
                            <SummaryText>
                                Ambitious student pursuing a computer Science degree eager to contribute developed knowledge in relation to the software development world. Skilled in many languages and currently learning more about JavaScript. Adaptable and driven with strong work ethic and motivation to thrive in team-based or individually motivated settings. 
                            </SummaryText>
                            <TabContainer>
                                <TabSelectors>
                                    { navigation.map(t => {
                                        return(
                                            <TabSelector className={tab === "skills" ? "active" : ""} onClick={() => setTab("skills")}>
                                                Skills
                                            </TabSelector>
                                        )
                                    })}
                                </TabSelectors>
                                <Tabs>
                                    <Tab style={{
                                        display: tab === "skills" ? "block" : "none"
                                    }}>
                                        {skills.map((s, index) => {
                                            return(
                                                <Skill key={index} header={s.header} percentage={s.percentage}></Skill>
                                            )
                                        })}
                                    </Tab>
                                    <Tab style={{
                                        display: tab === "languages" ? "block" : "none"
                                    }}>
                                        {languages.map((l, index) => {
                                            return(
                                                <Skill key={index} header={l.header} percentage={l.percentage}></Skill>
                                            )
                                        })}
                                    </Tab>
                                </Tabs>
                                <Tabs>
                                    <Tab style={{
                                            display: tab === "experience" ? "block" : "none"
                                        }}>
                                        <Timeline data={{
                                                "2022 - Now" : {
                                                    title: "Intern Software Developer",
                                                    institution: "Desjardins",
                                                    description: "Developing software with Java Spring and Angular. This is an intership which starts in March 2022 and ends in Mai 2022."
                                                },
                                                "2019 - 2022" : {
                                                    title: "Light Salesman",
                                                    institution: "Deco Luminaire",
                                                    description: "Educated customers on product features and technical details to highlight benefits. Negotiated prices and set up contracts to finalize sales agreements. Answered customer questions in-person, through email and over phone to maximize customer service."
                                                },
                                                "2017 - 2019" :  {
                                                    title: "Back-store Employee",
                                                    institution: "Deco Luminaire",
                                                    description: "Assembled lights to hang them in the showroom. Wrapped lights and furniture for customers. Organized store by returning merchandise to proper areas and restocked displays. Also, I learned proper work ethics which are still useful to this day. As a first job, it made me learn so much and think that this attitude with carry on to future job opportunities."
                                                }
                                            }
                                        }
                                    />
                                    </Tab>
                                    <Tab style={{
                                            display: tab === "education" ? "block" : "none"
                                        }}>
                                        <Timeline data={{
                                                 "2022 - Now" : {
                                                    title: "Bachelor in Software Engineering",
                                                    institution: "ETS University",
                                                    description: "I am very excited for university. I will spend 4 years doing my bachelor and it will be rough but, lucky me, I am prepared!"
                                                },
                                                "2019 - 2022" : {
                                                    title: "Dec in Computer Science",
                                                    institution: "Champlain College Saint-Lambert",
                                                    description: "These 3 years at champlain college were amazing. I learned so much in computer science and I would say with confidence that it made me love software development even more. During these 3 years at the school, I learned many languages and frameworks and how they apply to real world situations."
                                                },
                                                "2014 - 2019" : {
                                                    title: "High School",
                                                    institution: "Monseigneur-A.-M.-Parent",
                                                    description: "Went to high school for 5 years and had even more fun then previously. Went to parties and enjoyed the high school life to the fullest while maintaining good grades. In my 5th year, I created a mirror which had a screen built-in with voice control commands to ask questions to the mirror or change what you saw on the screen itself."
                                                },
                                                "2008 - 2014" :  {
                                                    title: "Elementary School",
                                                    institution: "Des Milles-Fleurs",
                                                    description: "Went to elementary school for 6 years and remember it to be a very fun time. This is when I knew that I wanted to be an engineer and make the future a better place for the next generations to come."
                                                }
                                            }
                                        }
                                    />
                                    </Tab>
                                </Tabs>
                            </TabContainer>
                        </Content>
                    </div>
                </div>
            </AboutContainer>
            <CounterRow>
                <div className="container">
                    <div className='row'>
                        <div className="col-md-3">
                            <CounterComponent>
                                <CounterContainer>
                                    <div className='valueContainer'>
                                        <span className='value'>
                                            {numberOfYear(birthDateStr)}
                                        </span>
                                    </div>
                                    <div className='symbolContainer' />
                                    <div className='textContainer'>
                                        <span className='text'>{numberOfYear(birthDateStr)} Years Old</span>
                                    </div>
                                </CounterContainer>
                            </CounterComponent>
                        </div>
                        <div className="col-md-3">
                            <CounterComponent>
                                <CounterContainer>
                                    <div className='valueContainer'>
                                        <span className='value'>
                                            {numberOfYear(experienceStartDateStr)}
                                        </span>
                                    </div>
                                    <div className='symbolContainer'>
                                        {
                                            checkIf6Months(experienceStartDateStr)
                                                ?
                                                <span className='symbol'>+</span>
                                                :
                                                <></>
                                        }
                                    </div>
                                    <div className='textContainer'>
                                        <span className='text'>{numberOfYear(experienceStartDateStr)} Years of Experience In Development</span>
                                    </div>
                                </CounterContainer>
                            </CounterComponent>
                        </div>
                        <div className="col-md-3">
                            <CounterComponent>
                                <CounterContainer>
                                    <div className='valueContainer'>
                                        <span className='value'>{4}</span>
                                    </div>
                                    <div className='symbolContainer'>
                                        <span className='symbol'>+</span>
                                    </div>
                                    <div className='textContainer'>
                                        <span className='text'>{4} Years in the Interiror Design Industry</span>
                                    </div>
                                </CounterContainer>
                            </CounterComponent>
                        </div>
                        <div className="col-md-3">
                            <CounterComponent>
                                <CounterContainer>
                                    <div className='valueContainer'>
                                        <span className='value'>8</span>
                                    </div>
                                    <div className='symbolContainer'>
                                        <span className='symbol'>+</span>
                                    </div>
                                    <div className='textContainer'>
                                        <span className='text'>8 Years performing Martial Arts</span>
                                    </div>
                                </CounterContainer>
                            </CounterComponent>
                        </div>
                    </div>
                </div>
            </CounterRow>
        </>
    )
};

export default About;