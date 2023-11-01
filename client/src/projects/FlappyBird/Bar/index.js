import React from "react"
import { BarContainer } from "./Bar"

const Bar = (props) => {

    return (
        <BarContainer>
            <Pipe className={props.isTopBar ? "topBar" : "bottomBar"} style={{"height": props.height}} />
            <Pipe className={props.isTopBar ? "topBar" : "bottomBar"} style={{"height": props.height}} />
        </BarContainer>
    )
}

export default Bar