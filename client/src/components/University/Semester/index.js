import React from "react"
import {
    SemesterContainer
} from "./SemesterSection"
import Course from "../Course"

const Semester = (props) => {
    const semesterData = props.data;

    let startSeason = semesterData.startSeason;
    if (semesterData.startSeason === "Ete") {
        startSeason = "Été" 
    }

    return (
        <SemesterContainer>
           <h2>Semester {semesterData.number} : {startSeason} {semesterData.year}</h2>
            {semesterData.courses.data.map((c, index) => <Course index={index} data={c.attributes}/> )}
        </SemesterContainer>
    )
}

export default Semester
