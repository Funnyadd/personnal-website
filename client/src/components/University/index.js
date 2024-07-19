import React from "react"
import AnimatedHeading from "../AnimatedHeading"
import AnimationContainer from "../AnimationContainer"
import Semester from "./Semester"
import {
    BachelorContainer,
    Heading,
    Info,
    InfoTitle,
    InformationContainer,
    SemesterAccordion,
    Seperator,
    UniversityContainer
} from "./UniversitySection"

const University = (props) => {
    const MAX_CUMULATIVE_AVERAGE = "4.3";

    const strapiUniversity = props.data;
    const bachelorData = strapiUniversity.degrees.data[0].attributes

    let activeSemester = 0
    bachelorData.semesters.data.forEach(semester => {
        if (semester.attributes.isCurrentSemester) {
            activeSemester = semester.attributes.number - 1
        }
    })

    return (
        <UniversityContainer>
            <AnimatedHeading text={bachelorData.title} />
            <BachelorContainer>
                <AnimationContainer animation={"fadeInLeft"} delay={200} duration={2}>
                    <Heading>{strapiUniversity.informationTitle}</Heading>
                    <Seperator />
                    <InformationContainer>
                        <Info><InfoTitle>{bachelorData.schoolNameTitle} :</InfoTitle>{bachelorData.schoolName}</Info>
                        <Info><InfoTitle>{bachelorData.cumulativeAverageTitle} :</InfoTitle>{bachelorData.cumulativeAverage} / {MAX_CUMULATIVE_AVERAGE}</Info>
                        <Info><InfoTitle>{bachelorData.expectedGraduationDateTitle} :</InfoTitle>{bachelorData.expectedGraduationDate}</Info>
                    </InformationContainer>
                </AnimationContainer>
                <AnimationContainer animation={"fadeInLeft"} delay={600} duration={2}>
                    <Heading>{strapiUniversity.coursesTitle}</Heading>
                    <Seperator />
                    <SemesterAccordion defaultActiveKey={activeSemester.toString()} >
                        {bachelorData.semesters.data.map((s, index) =>
                            <Semester key={index} index={index} activeSemester={activeSemester} data={s.attributes} isLastSemester={s.attributes.number.toString() === bachelorData.semesters.data.length.toString()} />
                        )}
                    </SemesterAccordion>
                </AnimationContainer>
            </BachelorContainer>
        </UniversityContainer>
    )
}

export default University
