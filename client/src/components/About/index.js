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

const About = () => {
    const birthDateStr = "2002-08-09"
    const experienceStartDateStr = "2018-6-05"
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
                                    <TabSelector>Skills</TabSelector>
                                    <TabSelector>Experience</TabSelector>
                                    <TabSelector>Education</TabSelector>
                                </TabSelectors>
                                <Tabs>
                                    <Tab display="block">
                                        <Skill header="React" percentage="65"></Skill>
                                        <Skill header="JavaScript" percentage="80"></Skill>
                                        <Skill header="Java" percentage="90"></Skill>
                                        <Skill header="C#" percentage="70"></Skill>
                                        <Skill header="MySQL" percentage="90"></Skill>
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