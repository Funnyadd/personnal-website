import React from "react"
import {
    UniversityContainer,
    BachelorContainer,
    Heading,
    Seperator,
    SemesterAccordion
} from "./UniversitySection"
import Semester from "./Semester"
import AnimatedHeading from "../animated-heading"

const University = (props) => {
    const strapiUniversity = props.data;
    const bachelorData = strapiUniversity.degrees.data[0].attributes

    return (
        <UniversityContainer>
            <AnimatedHeading text={bachelorData.title} />
            <BachelorContainer>
                <h2>School: {strapiUniversity.title}</h2>
                <h2>Cumulative Average: {bachelorData.cumulativeAverage}/4.3</h2>
                <Heading>Courses</Heading>
                <Seperator />
                <SemesterAccordion >
                    {bachelorData.semesters.data.map((s, index) => <Semester key={index} index={index} data={s.attributes} />)}
                </SemesterAccordion>
            </BachelorContainer>
        </UniversityContainer>
    )
}

export default University
