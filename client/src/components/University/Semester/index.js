import React from "react"
import {
    SemesterContainer,
    Title,
    Courses,
    ActiveSemester,
    ActiveSemesterSeperator
} from "./SemesterSection"
import Course from "../Course"
import { Row } from "react-bootstrap";

const Semester = (props) => {
    const semesterData = props.data;
    const isActiveSemester = props.activeSemester === props.index;

    let startSeason = semesterData.startSeason;
    if (semesterData.startSeason === "Ete") {
        startSeason = "Été" 
    }

    const getSpecialClasses = () => {
        let classes = ""
        if (props.index === 0) classes += "border-top border-gray"
        if (isActiveSemester) classes += "activeSemester"
        return classes
    }

    return (
        <SemesterContainer eventKey={props.index.toString()} className={getSpecialClasses()} >
            <Title>
                {semesterData.title} {semesterData.number} : {startSeason} {semesterData.year} 
                {isActiveSemester ? 
                    <ActiveSemester>
                        <ActiveSemesterSeperator>-</ActiveSemesterSeperator>{semesterData.activeSemesterTitle}
                    </ActiveSemester>
                : <></>}
            </Title>
            <Courses>
                <Row>
                    {semesterData.courses.data.map((c, index) => <Course key={index} data={c.attributes} /> )}
                </Row>
            </Courses>
        </SemesterContainer>
    )
}

export default Semester
