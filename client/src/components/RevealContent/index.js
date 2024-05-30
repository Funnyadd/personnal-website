import React, { useEffect, useRef } from "react"
import handleViewport, { useInViewport } from "react-in-viewport"
import { RevealContainer } from './RevealContent'

const RevealContent = ({ children, className, parentMethod, delay = 0, callParentMethod = false }) => {
    const state = useRef({
        inViewport: false,
        animationComplete: false,
        classChanged: false,
        animate: false,
        running: false,
        delay: delay
    })

    const { inViewport } = useInViewport(state, {}, { disconnectOnLeave: false });

    const callParent = () => {
        if (callParentMethod) parentMethod()
    }

    const animate = () => {
        state.animate = true;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 2000)
        })
    }


    useEffect(() => {
        if (!state.animationComplete && state.inViewport !== inViewport && !state.animationComplete) {
            state.inViewport = inViewport;
            if (!state.delay) state.delay = 0

            state.running = true;

            setTimeout(() => {
                callParent()
                animate()
                .then(() => {
                    state.animationComplete = true;
                    state.animate = false;
                    state.running = false;
                })
            }, delay)
        }

        if (!state.animationComplete && state.inViewport !== inViewport && state.running) {
            state.animationComplete = true;
            state.animate = false;
            state.running = false;
            callParent();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])

    return (
        <div className={className} ref={state}>
            <RevealContainer className={!state.animationComplete ? (state.animate && state.running ? "animate" : "") : "animation-complete"}>
                {children}
            </RevealContainer>
        </div>
    )
}

export default handleViewport(RevealContent)
