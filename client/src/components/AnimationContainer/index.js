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
        if (!state.current.classChanged && state.current.inViewport !== inViewport && !state.current.animationComplete) {
            state.inViewport = inViewport;
            setTimeout(() => {
                state.current.classChanged = true
            }, delay)
            state.current.animationComplete = true;
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])

    return (
        <div
            ref={state}
            style={{
                animation: state.current.classChanged ? `${animation} ${duration || 1}s` : "",
                opacity: state.current.classChanged ? 1 : 0,
                height: height ? height : "auto",
            }}
            id={id}
        >
            {children}
        </div>
    )
}

export default handleViewport(AnimationContainer)
