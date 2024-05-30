import React, { useEffect, useRef } from "react"
import handleViewport, { useInViewport } from "react-in-viewport"

const AnimationContainer = ({ children, delay, height, id, animation, duration }) => {
    const state = useRef({
        animationComplete: false,
        classChanged: false,
        inViewport: false
    });

    const { inViewport } = useInViewport(state, {}, { disconnectOnLeave: false });

    useEffect(() => {
        if (!state.classChanged && state.inViewport !== inViewport && !state.animationComplete) {
            state.inViewport = inViewport;
            setTimeout(() => {
                state.classChanged = true
            }, delay)
            state.animationComplete = true;
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])

    return (
        <div
            ref={state}
            style={{
                animation: state.classChanged ? `${animation} ${duration || 1}s` : "",
                opacity: state.classChanged ? 1 : 0,
                height: height ? height : "auto",
            }}
            id={id}
        >
            {children}
        </div>
    )
}

export default handleViewport(AnimationContainer)
