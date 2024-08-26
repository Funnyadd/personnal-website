import React from "react";
import Row from "react-bootstrap/Row";
import Course from "../Course";
import {
    ActiveSemester,
    Courses,
    InternshipSemester,
    SemesterContainer,
    SpecialSemesterSeperator,
    Title
} from "./SemesterSection";

const Semester = (props) => {
    const semesterData = props.data;
    const isInternshipSemester = semesterData.isInternshipSemester;
    const isActiveSemester = props.activeSemester === props.index;
    const isActiveSemesterBefore = props.activeSemester - props.index === -1;
    const isActiveSemesterAfter = props.activeSemester - props.index === 1;

    let startSeason = semesterData.startSeason;
    if (semesterData.startSeason === "Ete") {
        startSeason = "Été" 
    }

    const getSpecialClasses = () => {
        let classes = "border-dark "
        if (props.index === 0) classes += ""
        else {
            classes += "border-top-0 "
            if (!props.isLastSemester) classes += "border-bottom-0 "
        }

        if (isActiveSemester) classes += "activeSemester "
        else if (isInternshipSemester) {
            classes += "internshipSemester "
            if (isActiveSemesterBefore) classes += "internshipSemesterBefore "
            if (isActiveSemesterAfter) classes += "internshipSemesterAfter "
        }
        else classes += "border-right border-left "

        if (props.isLastSemester) classes += "border-bottom border-2 "

        return classes.trim()
    }

    return (
        <SemesterContainer eventKey={props.index.toString()} className={getSpecialClasses()} >
            <Title>
                {semesterData.title} {semesterData.number} : {startSeason} {semesterData.year} 
                {isActiveSemester ? 
                    <ActiveSemester>
                        <SpecialSemesterSeperator>-</SpecialSemesterSeperator>{semesterData.activeSemesterTitle}
                    </ActiveSemester>
                :
                isInternshipSemester ?
                    <InternshipSemester>
                        <SpecialSemesterSeperator>-</SpecialSemesterSeperator>{semesterData.internshipSemesterTitle}
                    </InternshipSemester>
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
