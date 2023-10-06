import React from "react"
import {
    CourseContainer,
    HyperlinkTile,
    CourseId,
    CourseName
} from "./CourseSection"

const Course = (props) => {
    const COURSE_INFO_URL = "https://www.etsmtl.ca/etudes/cours/"

    const courseData = props.data;

    return (
        <CourseContainer lg={3} md={4} sm={4} xs={6} >
            <HyperlinkTile className="mb-2" href={COURSE_INFO_URL + courseData.courseId}>
                <CourseId>{courseData.courseId}</CourseId>
                <CourseName>{courseData.name}</CourseName>
            </HyperlinkTile>
        </CourseContainer>
    )
}

export default Course
