import React from 'react'
import baffle from 'baffle';
import handleViewport from 'react-in-viewport'

class Baffle_Text extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            obfuscate: true
        }
    }

    shouldComponentUpdate() {
        const { revealDuration, revealDelay } = this.props
        const target = baffle('.obfuscated')
        target.set({
            characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*",
            speed: 50
        })
        target.start()
        target.reveal(revealDuration, revealDelay)

        const { callMethodTime } = this.props
        setTimeout(() => { 
            this.props.parentMethod()
        }, callMethodTime);
    }

    render() {
        return(
            <>
                {this.text()}
            </>
        )
    }

    text() {
        const { text } = this.props
        
        return (
            <div className = "col obfuscated">
                {text}
            </div>
        )
    }
    
}
const BaffleText = handleViewport(Baffle_Text);

export default BaffleText