import React, { useState } from 'react';
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
    const [tab, setTab] = useState("skills");

    const skills = [
        {
            header: 'React',
            percentage: 55
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
    ];

    const birthDateStr = "2002-08-09"
    const experienceStartDateStr = "2018-06-05"
    const decoluminaireExperienceStartDateStr = '2017-06-18'

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
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </SummaryText>
                            <TabContainer>
                                <TabSelectors>
                                <TabSelector className={tab === "skills" ? "active" : ""} onClick={() => setTab("skills")}>
                                    Skills
                                </TabSelector>
                                <TabSelector className={tab === "experience" ? "active" : ""} onClick={() => setTab("experience")}>
                                    Experience
                                </TabSelector>
                                <TabSelector className={tab === "education" ? "active" : ""} onClick={() => setTab("education")}>
                                    Education
                                </TabSelector>
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
                                </Tabs>
                                <Tabs>
                                    <Tab style={{
                                            display: tab === "experience" ? "block" : "none"
                                        }}>
                                        <Timeline data={{
                                                "2001 - 2005" :  {
                                                    title: "Junior Developer",
                                                    institution: "Lorem Softwares",
                                                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
                                                },
                                                "2007 - 2010" : {
                                                    title: "Senior Developer",
                                                    institution: "Ipsum Technologies",
                                                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
                                                },
                                                "2012 - 2018" : {
                                                    title: "Data Scientist",
                                                    institution: "Dolor AI",
                                                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
                                                },
                                                "2018 - Now" : {
                                                    title: "AI Scientist",
                                                    institution: "Ipsum AI",
                                                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
                                                }
                                            }
                                        }
                                    />
                                    </Tab>
                                    <Tab style={{
                                            display: tab === "education" ? "block" : "none"
                                        }}>
                                        <Timeline data={{
                                                "2001 - 2005" :  {
                                                    title: "High School Degree",
                                                    institution: "Lorem High School",
                                                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
                                                },
                                                "2007 - 2010" : {
                                                    title: "College Degree",
                                                    institution: "Ipsum College",
                                                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
                                                },
                                                "2012 - 2018" : {
                                                    title: "B.Sc in Computer Science",
                                                    institution: "Dolor University",
                                                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
                                                },
                                                "2018 - Now" : {
                                                    title: "PhD in AI",
                                                    institution: "Amet University",
                                                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
                                                },
                                                "2019 - Now" : {
                                                    title: "PhD in Data Science",
                                                    institution: "Dolor University",
                                                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"
                                                },
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
                                        <span className='value'>{numberOfYear(decoluminaireExperienceStartDateStr)}</span>
                                    </div>
                                    <div className='symbolContainer'>
                                    {
                                            checkIf6Months(decoluminaireExperienceStartDateStr)
                                                ?
                                                <span className='symbol'>+</span>
                                                :
                                                <></>
                                        }
                                    </div>
                                    <div className='textContainer'>
                                        <span className='text'>{numberOfYear(decoluminaireExperienceStartDateStr)} Years in the Lights Industry</span>
                                    </div>
                                </CounterContainer>
                            </CounterComponent>
                        </div>
                        <div className="col-md-3">
                            <CounterComponent>
                                <CounterContainer>
                                    <div className='valueContainer'>
                                        <span className='value'>0</span>
                                    </div>
                                    <div className='symbolContainer'>
                                        <span className='symbol'>+</span>
                                    </div>
                                    <div className='textContainer'>
                                        <span className='text'>Text Here</span>
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