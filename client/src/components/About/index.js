import React, { useState } from "react"
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
    RevealContainer,
} from "./AboutSection"
import Skill from "./Skill"
import Timeline from "./Timeline"

const About = (props) => {
    const strapiAbout = props.data

    const [tab, setTab] = useState("")
    if(tab === "") setTab(strapiAbout.navigation[0])

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

    return (
        <>
            <AboutContainer className="container">
                <div className="row">
                    <LeftColumn className="col-md-6">
                        <Content>
                            <ImageContainer>
                                <div>
                                    <RevealContainer className="animate">
                                        <Image src={strapiAbout.Photo.data.attributes.url} alt="Profile picture" />
                                    </RevealContainer>
                                </div>
                            </ImageContainer>
                        </Content>
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
                                            return <Skill key={index} header={s.attributes.title} percentage={s.attributes.percentage}></Skill>
                                        })}
                                    </Tab>
                                    <Tab style={{ display: tab === strapiAbout.navigation[3] ? "block" : "none" }}>
                                        {strapiAbout.languages.data.map((l, index) => {
                                            return <Skill key={index} header={l.attributes.title} percentage={l.attributes.percentage}></Skill>
                                        })}
                                    </Tab>
                                </Tabs>
                                <Tabs>
                                    <Tab style={{ display: tab === strapiAbout.navigation[1] ? "block" : "none" }}>
                                        <Timeline
                                            data={strapiAbout.experiences.data.map(e => {
                                                return {
                                                    title: e.attributes.title,
                                                    institution: e.attributes.instittution,
                                                    description: e.attributes.description,
                                                    startDate: e.attributes.startDate,
                                                    endDate: e.attributes.endDate,
                                                }
                                            })}
                                        />
                                    </Tab>
                                    <Tab style={{ display: tab === strapiAbout.navigation[2] ? "block" : "none" }}>
                                        <Timeline
                                            data={strapiAbout.educations.data.map(e => {
                                                return {
                                                    title: e.attributes.title,
                                                    institution: e.attributes.instittution,
                                                    description: e.attributes.description,
                                                    startDate: e.attributes.startDate,
                                                    endDate: e.attributes.endDate,
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
                <div className="container">
                    <div className="row">
                        {strapiAbout.about_counters.data.map((c, index) => {
                            return (
                                <div key={index} className="col-md-3">
                                    <CounterComponent>
                                        <CounterContainer>
                                            <div className="valueContainer">
                                                <span className="value">
                                                    {numberOfYear(c.attributes.startDate, c.attributes.endDate)}
                                                </span>
                                            </div>
                                            <div className="symbolContainer">
                                                {checkIf6Months(c.attributes.startDate, c.attributes.isAge) 
                                                ? 
                                                <span className="symbol">+</span> 
                                                : 
                                                <></>}
                                            </div>
                                            <div className="textContainer">
                                                <span className="text">{c.attributes.fullText}</span>
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
}

export default About
