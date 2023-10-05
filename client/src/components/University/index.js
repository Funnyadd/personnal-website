import React, { useEffect, useState } from "react"
import {
    UniversityContainer,
    BachelorContainer,
    Heading,
    Seperator,
} from "./UniversitySection"
import AnimatedHeading from "../animated-heading"
import { Row, Col } from "react-bootstrap"

const University = (props) => {
    const COURSE_INFO_URL = "https://www.etsmtl.ca/etudes/cours/"

    const strapiUniversity = props.data;
    const bachelorData = strapiUniversity.degrees.data[0].attributes

    return (
        <UniversityContainer>
            <AnimatedHeading text={bachelorData.title} />
            <BachelorContainer>
                <h2>School: {strapiUniversity.title}</h2>
                <h2>Cumulative Average: 3.33/4.3</h2>
                <Heading>Courses</Heading>
                <Seperator />
                <Row>
                    {bachelorData.semesters.data.map((s, index) => {
                        s = s.attributes
                        console.log(s)
                        return (
                            <Col key={index} md={4}>
                                <h2>Semester {s.number} : {s.startSeason}</h2>
                                {s.courses.data.map((c, i) => {
                                    c = c.attributes
                                    return <a href={COURSE_INFO_URL + c.courseId}>{c.courseId} : {c.name}</a>
                                })}
                            </Col>
                        )
                    })}
                </Row>
            </BachelorContainer>
        </UniversityContainer>
    )
}

export default University
