import React from "react"
import {
    UniversityContainer,
    BachelorContainer,
    Heading,
    Seperator,
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
                {bachelorData.semesters.data.map((s, index) => <Semester index={index} data={s.attributes } />)}
            </BachelorContainer>
        </UniversityContainer>
    )
}

export default University
