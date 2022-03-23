import React from 'react';
import DurationExercise from '../Task';
import Reps from '../Pro';

export default function Timer({ name, }) {
    let together = "The combination tracker is best if you want to see how long it takes to do your homework because of all the distractions that are happening"
    return (
        <>
            <h2>{name}</h2>
            <p class="small">{together}</p>
            <DurationExercise></DurationExercise>
            <Reps></Reps>
        </>)
}; 
