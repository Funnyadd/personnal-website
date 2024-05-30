import baffle from 'baffle';
import React, { useEffect, useRef } from 'react';

const BaffleText = (props) => {
    const state = useRef(null)
    useEffect(() => {
        if (!state.isComponnentLoaded) {
            state.isComponnentLoaded = true
            const target = baffle('.obfuscated', {
                characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*",
                speed: 50
            })
            target.start()
            target.reveal(props.revealDuration, props.revealDelay)
    
            if (typeof props.parentMethod === 'function') {
                setTimeout(() => { 
                    props.parentMethod()
                }, props.callMethodTime);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])

    return (
        <div ref={state} className = "col obfuscated">
            {props.text}
        </div>
    )  
}

export default BaffleText