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
    const bachelorData = strapiUniversity.degrees[0]

    let activeSemester = 0
    bachelorData.semesters.forEach(semester => {
        if (semester.isCurrentSemester) {
            activeSemester = semester.number
        }
    })

    return (
        <UniversityContainer>
            <AnimatedHeading text={bachelorData.title} />
            <BachelorContainer>
                <AnimationContainer animation={"fadeInLeft"} delay={100} duration={1}>
                    <Heading>{strapiUniversity.informationTitle}</Heading>
                    <Seperator />
                    <InformationContainer>
                        <Info><InfoTitle>{bachelorData.schoolNameTitle} :</InfoTitle>{bachelorData.schoolName}</Info>
                        <Info><InfoTitle>{bachelorData.cumulativeAverageTitle} :</InfoTitle>{bachelorData.cumulativeAverage} / {MAX_CUMULATIVE_AVERAGE}</Info>
                        <Info><InfoTitle>{bachelorData.expectedGraduationDateTitle} :</InfoTitle>{bachelorData.expectedGraduationDate}</Info>
                    </InformationContainer>
                </AnimationContainer>
                <AnimationContainer animation={"fadeInLeft"} delay={400} duration={1}>
                    <Heading>{strapiUniversity.coursesTitle}</Heading>
                    <Seperator />
                    <SemesterAccordion defaultActiveKey={activeSemester.toString()} >
                        {bachelorData.semesters.map((s, index) =>
                            <Semester
                                key={index}
                                index={index}
                                activeSemester={activeSemester}
                                data={s}
                                isLastSemester={s.number === bachelorData.semesters.length.toString()} />
                        )}
                    </SemesterAccordion>
                </AnimationContainer>
            </BachelorContainer>
        </UniversityContainer>
    )
}

export default University
