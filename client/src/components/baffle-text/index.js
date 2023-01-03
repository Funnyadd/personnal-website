import React, { useEffect } from 'react'
import baffle from 'baffle';

const BaffleText = (props) => {
    useEffect(() => {
        const target = baffle('.obfuscated')
        target.set({
            characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*",
            speed: 50
        })
        target.start()
        target.reveal(props.revealDuration, props.revealDelay)

        if(typeof props.parentMethod === 'function') {
            setTimeout(() => { 
                props.parentMethod()
            }, props.callMethodTime);
        }
    })

    return(
        <div className = "col obfuscated">
            {props.text}
        </div>
    )  
}

export default BaffleText