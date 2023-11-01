import React, { useEffect, useState, useRef } from "react"
import { useQueueState } from "rooks"; 
import { FlappyBirdContainer } from "./FlappyBird"
import Bar from "./Bar";

const FlappyBird = () => {
    const MAX_BARS = 3

    const [barList, { enqueue, dequeue, peek, length }] = useQueueState([]); 

    const createAndDeleteBars = () => {
        if (barList.length <= MAX_BARS) {
            let bar = {
                height: 30
            }
    
            barList.push(bar);
        }

        if (barList.length >= MAX_BARS) {
            barList.shift();
        }
    }

    const [play, setPlay] = useState(true)
    
    let intervalRef = useRef()
    
    const handleClick = () => {
        if (!play) {
            clearInterval(intervalRef.current)
        } else {
            intervalRef.current = setInterval(createAndDeleteBars, 1000)
        }
        setPlay((prev) => !prev)
    }

    useEffect(() => {
        intervalRef.current = setInterval(createAndDeleteBars, 1000)

        return () => clearInterval(intervalRef.current)
    }, [])

    return (
        <FlappyBirdContainer>
            <p>{barList.lenght}</p>
            <button onClick={handleClick}>play</button>
            {barList.map((bar, index) => {
                console.log(barList)
                return <Bar key={index} height={bar.top.height} isTopBar={true} />
            })}
        </FlappyBirdContainer>
    )
}

export default FlappyBird
