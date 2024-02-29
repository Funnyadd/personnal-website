import React from "react";
import Row from "react-bootstrap/Row";
import Course from "../Course";
import {
    ActiveSemester,
    ActiveSemesterSeperator,
    Courses,
    SemesterContainer,
    Title
} from "./SemesterSection";

const Semester = (props) => {
    const semesterData = props.data;
    const isActiveSemester = props.activeSemester === props.index;

    let startSeason = semesterData.startSeason;
    if (semesterData.startSeason === "Ete") {
        startSeason = "Été" 
    }

    const getSpecialClasses = () => {
        let classes = ""
        if (props.index === 0) classes += "border-dark"

        if (isActiveSemester) classes += "activeSemester"
        else classes += "border-top-0"

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
