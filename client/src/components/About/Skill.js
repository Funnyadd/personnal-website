import React from "react"
import { ProgressBarContainer, ProgressBarProgress, ProgressBarText, ProgressBarValue } from "./AboutSection"

const Skill = props => {
    return (
        <ProgressBarContainer>
            <ProgressBarText>{props.header}</ProgressBarText>
            <ProgressBarValue>{props.percentage}%</ProgressBarValue>
            <ProgressBarProgress width={props.percentage}></ProgressBarProgress>
        </ProgressBarContainer>
    )
}

export default Skill
