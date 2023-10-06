import React from "react"
import {
    SemesterContainer,
    Title,
    Courses
} from "./SemesterSection"
import Course from "../Course"
import { Row } from "react-bootstrap";

const Semester = (props) => {
    const semesterData = props.data;

    let startSeason = semesterData.startSeason;
    if (semesterData.startSeason === "Ete") {
        startSeason = "Été" 
    }

    // if (semesterData.isCurrentSemester) {
    //     setTimeout(() => {
    //         document.getElementsByClassName("accordion-collapse")[props.index]
    //             .classList.add("show")

    //             document.getElementsByClassName("accordion-button")[props.index]
    //             .classList.add("currentSemester")
    //     }, 800)
    // }

    return (
        <SemesterContainer eventKey={props.index} >
           <Title>Semester {semesterData.number} : {startSeason} {semesterData.year}</Title>
           <Courses>
                <Row>
                    {semesterData.courses.data.map((c, index) => <Course key={index} data={c.attributes} /> )}
                </Row>
            </Courses>
        </SemesterContainer>
    )
}

export default Semester
