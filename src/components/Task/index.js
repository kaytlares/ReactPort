import React, { useState, useEffect, } from 'react';;

export default function DurationExercise({ name }) {
    let [startTime, setStartTime] = useState(new Date(0))
    let [timerStarted, setTimerStarted] = useState(false) //this is for our if else statement 
    let [frame, setFrame] = useState(0)

    useEffect(() => {
        let intervalId
        setInterval(() => {
            if (timerStarted) {
                setFrame(frame => frame + 1)
                console.log("Frame " + frame)
            }
        },
            1000 / 30)
        return () => clearInterval(intervalId)
    })
    let elapsedTime = startTime
    if (timerStarted) {
        elapsedTime = new Date(new Date().valueOf() - startTime.valueOf())
    }

    let tt = "When you are ready to start your homework, click the Start button below. When you are finish, click Reset. This timer helps you see how long it takes you to complete your homework."
    return (
        <>
            <h2> {name}</h2>
            <p class="small">{tt}</p>
            <p> Timer: {String(elapsedTime.getMinutes()).padStart(2, '0')}:{String(elapsedTime.getSeconds()).padStart(2, '0')}:{String(elapsedTime.getMilliseconds()).padStart(3, '0')}</p>
            {!timerStarted ? <button onClick={() => { setTimerStarted(true); setStartTime(new Date()) }}>Start</button>
                : <button onClick={() => { setStartTime(new Date(0)); setTimerStarted(false); }}>Reset</button>
            }

        </>
    )
}


