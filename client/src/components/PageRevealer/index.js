import React, { useCallback, useEffect, useRef, useState } from 'react'
import AnimationContainer from '../AnimationContainer'
import BaffleText from '../baffle-text'
import { Reveal, RevealContainer } from './PageRevealer'

const PageRevealer = (props) => {
    const [animation, setAnimation] = useState(false);
    const [complete, setComplete] = useState(false);
    const [hide, setHide] = useState(false);

    const timeoutRef = useRef()

    const reveal = useCallback(
        () => {
            if(!complete) {
                setAnimation(true)
                setComplete(true)

                timeoutRef.current = setTimeout(() => { 
                    setAnimation(false)
                    setHide(true)
                }, 950)
            }
        }, [complete]
    )

    useEffect(() => {
        return () => {
            clearTimeout(timeoutRef.current)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    })

    const baffle = () => {
        if (!complete) {
            return (
                <AnimationContainer animation="fadeIn" duration={2}>
                        <BaffleText
                        text={props.text}
                        revealDuration={500}
                        revealDelay={1000}
                        parentMethod={reveal}
                        callMethodTime={2000}
                    />
                </AnimationContainer>
            )
        }
    }

    return (
        <RevealContainer id="reveal_container" style={{display: hide ? "hide" : "flex"}}>
            {baffle()}
            <Reveal id="revealer" className={animation ? "animate" : ""} />
        </RevealContainer>
    )
}

export default PageRevealer