"use client";

import { useState } from "react";

export default function Home() {

  const [scores, setScores] = useState({
    Build: 0,
    Adapt: 0,
    Drive: 0
  });

  const [step, setStep] = useState(0);
  const [result, setResult] = useState("");

  const questions = [
    {
      question: "The road is blocked. What do you do?",
      answers: [
        { text:"Create a new solution", type:"Build" },
        { text:"Find another route", type:"Adapt" },
        { text:"Push forward immediately", type:"Drive" }
      ]
    },

    {
      question: "A plan fails. What happens next?",
      answers:[
        { text:"Improve the system", type:"Build" },
        { text:"Change the strategy", type:"Adapt" },
        { text:"Take action quickly", type:"Drive" }
      ]
    },

    {
      question:"A new opportunity appears. How do you respond?",
      answers:[
        { text:"Build something around it", type:"Build" },
        { text:"Study the situation first", type:"Adapt" },
        { text:"Move before others do", type:"Drive" }
      ]
    }
  ];


  const profiles = {

    Build:{
      name:"THE BUILDER 🌉",
      role:"The Creator",
      strength:"You turn ideas into something real. You create solutions instead of waiting for them.",
      growth:"Your next level is patience, consistency, and building stronger systems.",
      advice:"A strong foundation creates a stronger future."
    },

    Adapt:{
      name:"THE NAVIGATOR 🧭",
      role:"The Adaptive Mind",
      strength:"You read situations, adjust quickly, and find opportunities in changing environments.",
      growth:"Your next level is commitment and trusting your decisions.",
      advice:"The road changes. Your vision stays."
    },

    Drive:{
      name:"THE DRIVER 🚙",
      role:"The Momentum Builder",
      strength:"You create movement. You take action when others hesitate.",
      growth:"Your next level is strategy, timing, and knowing when to slow down.",
      advice:"Speed creates motion. Direction creates success."
    }

  };


  function choose(type){

    const updated = {
      ...scores,
      [type]: scores[type] + 1
    };

    setScores(updated);


    if(step < questions.length - 1){
      setStep(step + 1);
    } else {

      const highest = Object.keys(updated)
      .reduce((a,b)=>
        updated[a] >= updated[b] ? a : b
      );

      setResult(highest);
    }

  }



  return (

    <main style={{
      minHeight:"100vh",
      background:"#050505",
      color:"white",
      padding:"50px",
      fontFamily:"Arial"
    }}>

      <h1 style={{
        letterSpacing:"4px"
      }}>
        SETH CLOUD
      </h1>


      {!result ? (

        <section style={{
          marginTop:"80px",
          textAlign:"center"
        }}>

          <h2>
            🤖 Road Buddy
          </h2>

          <p>
            Discover your current road style.
          </p>


          <h3>
            {questions[step].question}
          </h3>


          {questions[step].answers.map((answer)=>(

            <button
              key={answer.type}
              onClick={()=>choose(answer.type)}
              style={{
                display:"block",
                margin:"20px auto",
                padding:"15px 35px",
                cursor:"pointer"
              }}
            >
              {answer.text}
            </button>

          ))}

        </section>


      ) : (

        <section style={{
          marginTop:"70px",
          maxWidth:"700px",
          marginLeft:"auto",
          marginRight:"auto",
          border:"1px solid #333",
          borderRadius:"30px",
          padding:"45px"
        }}>


          <h2>
            🤖 ROAD BUDDY PROFILE UNLOCKED
          </h2>


          <h1>
            {profiles[result].name}
          </h1>


          <h3>
            {profiles[result].role}
          </h3>


          <hr/>


          <h3>
            Your Strength
          </h3>

          <p>
            {profiles[result].strength}
          </p>


          <h3>
            Your Growth Challenge
          </h3>

          <p>
            {profiles[result].growth}
          </p>


          <h3>
            Road Buddy Advice
          </h3>

          <p>
            "{profiles[result].advice}"
          </p>


        </section>

      )}

    </main>

  );
}
