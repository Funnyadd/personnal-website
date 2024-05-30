import React, { useEffect, useRef } from "react"
import handleViewport, { useInViewport } from "react-in-viewport"
import { AnimatedLetter, Space } from "./AnimatedHeading"

const AnimatedHeading = ({ text, color, fontSize, lineHeight, space }) => {
    const state = useRef({
        animationComplete: false,
        animate: false,
        force: false,
        inViewport: false
    });

    const { inViewport } = useInViewport(state, {}, { disconnectOnLeave: false });

    useEffect(() => {
        if (!state.current.animationComplete && inViewport && state.current.inViewport !== inViewport) {
            if (!state.current.force) {
                state.current.inViewport = inViewport;
                state.current.animate = true;
                state.current.force = true;
                let delay = 1;
                text.split(" ").forEach((value, index) => {
                    value.split("").forEach((v, i) => {
                        ++delay
                    })
                })
                setTimeout(() => {
                    state.current.animationComplete = true;
                }, delay * 200 + 500)
            }
            if (state.current.force) {
                state.current.animationComplete = true; 
                state.current.force = false;
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])

    const animate = () => {
        let time = 0
        return text.split(" ").map((value, index) => {
            return value.split("").map((v, i) => {
                ++time
                console.log(state.animationComplete)
                return i + 1 !== value.length ? (
                    <AnimatedLetter
                        lineHeight={lineHeight}
                        fontSize={fontSize}
                        key={i}
                        style={{
                            animationDelay: `${time * 100}ms`,
                            color: index % 2 !== 0 || color ? "rgb(12, 148, 0)" : "#fff",
                        }}
                        className={!state.current.animationComplete ? (state.current.animate ? "animate" : "") : "animationComplete"}
                    >
                        {v}
                    </AnimatedLetter>
                ) : (
                    <span key={i}>
                        <AnimatedLetter
                            lineHeight={lineHeight}
                            fontSize={fontSize}
                            style={{
                                animationDelay: `${time * 100}ms`,
                                color: index % 2 !== 0 || color ? "rgb(12, 148, 0)" : "#fff",
                            }}
                            className={!state.current.animationComplete ? (state.current.animate ? "animate" : "") : "animationComplete"}
                        >
                            {v}
                        </AnimatedLetter>
                        <Space space={space} />
                    </span>
                )
            })
        })
    }

    return (
        <h2 ref={state} style={{ textAlign: "center", marginBottom: "20px" }} className="heading">
            {animate()}
        </h2>
    )
}

export default handleViewport(AnimatedHeading)