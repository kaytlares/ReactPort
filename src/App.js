
import './App.css';
import React, { useState } from 'react';
import Pepe from './components/Pro';
import Click from './components/Break';
import DurationExercise from './components/Task';
import Top from './components/Comb'



let openName = "A More Productive You" // Title of the page it get's returned down below in the function
function UserGreeting() {
  return (
    <h1>{openName}</h1>
  )
}

let speech = "Sometimes, when people have homework to do, they tend to get sidetracked, avoid doing it, or even struggle to complete it. The truth of the matter is that homework is not something we want to do, but something we have to do. We understand that homework could take hours away from the things you actually want to do! So, in order to better assist with this issue, we've created different ways in which we can help you be more productive. Each button below has a different feature. To get started, read the instructions and then click on the button."
let instructions = "For the ultimate use of this website, whether you're using the timer or the repeat counter, before hitting the reset button, write down how long it took you to complete your work or how many times you procrastinated. You'll want to do this about five times for the timer and five times for the repeat counter. Once you have these numbers, add the five numbers altogether and then divide them by the number of values."
let example = " Example: According to the repeat counter, I procrastinated yesterday 4 times, 9 times, 10 times, 15 times, and 12 times. When added together, the total is 50. I then divide the 50 by the number of digits, which is five. So, on average, while completing a single homework assignment, I procrastinate 10 times."
let task = "The task timer measures the amount of time it takes you to complete homework assignments."
let repeat = "The procrastination counter keeps track of every time you get distracted from your homework."
let comb = "This button combines the procrastination counter and the task timer together."
let fun = "The break button timer measures the amount of time you've been away from your homework."

//Call timer down here, or it will be undefined. 
function App() {
  let [displayComponent, setDisplayComponent] = useState(-1)
  let components = [
    /*Remember these are arrays. We later call these array below for the buttons, so make sure 
    their in order according to how it's supposed to called or different content would be displayed */
    <DurationExercise name="Task Timer"></DurationExercise>,
    <Pepe name="Procrastination Repeat Counter"></Pepe>,
    <Click></Click>,
    <Top name="Combination Counter and Task Timer"></Top>
  ]

  //Remeber to change the number within parantheses
  return (

    (displayComponent !== -1 ?
      <>
        {displayComponent !== -1 ? components[displayComponent] : undefined}
      </>
      : <>
        <UserGreeting></UserGreeting>
        <p class="small">{speech}</p>
        <p class="small">{instructions}</p>
        <p class="bold">{example}</p>
        <p class="middle">{task}</p>
        <p>
          <button onClick={() => setDisplayComponent(0)}>Task Timer</button>
        </p>
        <p class="middle">{repeat}</p>
        <p>
          <button onClick={() => setDisplayComponent(1)}>Procrastination Counter</button>
        </p>
        <p class="middle">{fun}</p>
        <p>
          <button onClick={() => setDisplayComponent(2)}>Break Timer</button>
        </p>
        <p class="middle">{comb}</p>
        <p>
          <button onClick={() => setDisplayComponent(3)}>Combination Counter and Timer</button>
        </p>
      </>
    )
  );


}

export default App;
