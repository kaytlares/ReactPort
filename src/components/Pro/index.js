//Repetition status
import React, { useState } from 'react';

export default function Reps({ name }) {
    const [oneUp, setOneUp] = useState(0);

    const increase = () => {
        setOneUp(oneUp + 1);
    }

    const reset = () => {
        setOneUp(0);
    }

    let instruct = "Whenever you get sidetracked doing something else besides your homework, press the increase button for every different task."
    let examp = "Example: Being on your phone, online shopping. Press the increase button twice."

    return (
        <div className='App'>
            <h2>{name}</h2>
            <p class="small">{instruct}</p>
            <p class="bold">{examp}</p>
            <p> Distracted {oneUp} Times</p>
            <button onClick={increase}> Increase </button>
            <button onClick={reset}> Reset</button>
        </div>
    );
}
