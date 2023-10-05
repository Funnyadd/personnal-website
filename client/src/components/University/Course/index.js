import React from "react"
import {
    CourseContainer,
    HyperlinkTile,
    CourseId
} from "./CourseSection"

const Course = (props) => {
    const COURSE_INFO_URL = "https://www.etsmtl.ca/etudes/cours/"

    const courseData = props.data;

    return (
        <CourseContainer md={2}>
            <HyperlinkTile className="mb-2" href={COURSE_INFO_URL + courseData.courseId}>
                <CourseId>{courseData.courseId}</CourseId>
                <p>{courseData.name}</p>
            </HyperlinkTile>
        </CourseContainer>
    )
}

export default Course
