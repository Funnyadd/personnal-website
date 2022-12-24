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
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
    const { strapiAbout } = useStaticQuery(graphql`
        query {
            strapiAbout {
                skills {
                  title
                  percentage
                }
                title
                Photo {
                  localFile {
                    url
                  }
                }
                educations {
                  endDate
                  description
                  institution
                  title
                  startDate
                }
                description
                about_counters {
                  endDate
                  startDate
                  fullText
                  isAge
                }
                experiences {
                  endDate
                  description
                  institution
                  startDate
                  title
                }
                languages {
                  percentage
                  title
                }
                navigation {
                  strapi_json_value
                }
              }
        }
    `)

    const [tab, setTab] = useState(strapiAbout.navigation.strapi_json_value[0]);

    const numberOfYear = (startDateString, endDateString) => {
        var endDate = new Date ()
        if(endDateString != null) {
            endDate = new Date(endDateString)
        }
        var startDate = new Date(startDateString)
        var year = endDate.getFullYear() - startDate.getFullYear()
        var m = endDate.getMonth() - startDate.getMonth()
        if (m < 0 || (m === 0 && endDate.getDate() < startDate.getDate())) {
            year--
        }
        return year
    }

    const checkIf6Months = (dateString, isAge) => {
        if (isAge) return false
        var m = new Date().getMonth() - new Date(dateString).getMonth()
        if (m <= 5 && m >= -5 ) {
            return true
        }
        return false
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
                                        <Image src={strapiAbout.Photo.localFile.url} alt="Profile picture" />
                                    </RevealContainer>
                                </div>
                            </ImageContainer>
                        </Content>
                    </LeftColumn>
                    <div className='col-md-6'>
                        <Content>
                            <Heading>
                                {strapiAbout.title}
                            </Heading>
                            <Seperator />
                            <SummaryText>
                                {strapiAbout.description} 
                            </SummaryText>
                            <TabContainer>
                                <TabSelectors>
                                    {
                                        strapiAbout.navigation.strapi_json_value.map((e, index) => {
                                            var value = strapiAbout.navigation.strapi_json_value[index]
                                            return(
                                                <TabSelector key={index} className={tab === value ? "active" : ""} onClick={() => setTab(value)}>
                                                    {value}
                                                </TabSelector>
                                            )
                                        })
                                    }
                                </TabSelectors>
                                <Tabs>
                                    <Tab style={{
                                        display: tab === strapiAbout.navigation.strapi_json_value[0] ? "block" : "none"
                                    }}>
                                        {strapiAbout.skills.map((s, index) => {
                                            return(
                                                <Skill key={index} header={s.title} percentage={s.percentage}></Skill>
                                            )
                                        })}
                                    </Tab>
                                    <Tab style={{
                                        display: tab === strapiAbout.navigation.strapi_json_value[3] ? "block" : "none"
                                    }}>
                                        {strapiAbout.languages.map((l, index) => {
                                            return(
                                                <Skill key={index} header={l.title} percentage={l.percentage}></Skill>
                                            )
                                        })}
                                    </Tab>
                                </Tabs>
                                <Tabs>
                                    <Tab style={{
                                            display: tab === strapiAbout.navigation.strapi_json_value[1] ? "block" : "none"
                                        }}>
                                        <Timeline data={ strapiAbout.experiences.map((e) => {
                                            return(
                                                {
                                                    title: e.title,
                                                    institution: e.instittution,
                                                    description: e.description,
                                                    startDate: e.startDate,
                                                    endDate: e.endDate
                                                }
                                            )
                                        })}/>
                                    </Tab>
                                    <Tab style={{
                                            display: tab === strapiAbout.navigation.strapi_json_value[2] ? "block" : "none"
                                        }}>
                                        <Timeline data={ strapiAbout.educations.map((e) => {
                                            return(
                                                {
                                                    title: e.title,
                                                    institution: e.instittution,
                                                    description: e.description,
                                                    startDate: e.startDate,
                                                    endDate: e.endDate
                                                }
                                            )
                                        })}/>
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
                        {strapiAbout.about_counters.map((c, index) => {
                            return(
                                <div key={index} className="col-md-3">
                                    <CounterComponent>
                                        <CounterContainer>
                                            <div className='valueContainer'>
                                                <span className='value'>
                                                    {numberOfYear(c.startDate, c.endDate)}
                                                </span>
                                            </div>
                                            <div className='symbolContainer'>
                                                {
                                                    checkIf6Months(c.startDate, c.isAge)
                                                        ?
                                                        <span className='symbol'>+</span>
                                                        :
                                                        <></>
                                                }
                                            </div>
                                            <div className='textContainer'>
                                                <span className='text'>{c.fullText}</span>
                                            </div>
                                        </CounterContainer>
                                    </CounterComponent>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </CounterRow>
        </>
    )
};

export default About;