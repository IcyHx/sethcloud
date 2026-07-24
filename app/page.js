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
        {text:"Create a new solution", type:"Build"},
        {text:"Find another route", type:"Adapt"},
        {text:"Push forward immediately", type:"Drive"}
      ]
    },
    {
      question: "A plan fails. Your reaction?",
      answers:[
        {text:"Improve the system", type:"Build"},
        {text:"Change the strategy", type:"Adapt"},
        {text:"Take action quickly", type:"Drive"}
      ]
    },
    {
      question:"A new opportunity appears. How do you respond?",
      answers:[
        {text:"Build something around it", type:"Build"},
        {text:"Study the situation first", type:"Adapt"},
        {text:"Move before others do", type:"Drive"}
      ]
    }
  ];


  function choose(type){

    const newScores = {
      ...scores,
      [type]: scores[type] + 1
    };

    setScores(newScores);


    if(step < questions.length - 1){
      setStep(step + 1);
    } else {

      const highest = Object.keys(newScores)
      .reduce((a,b)=>
        newScores[a] > newScores[b] ? a : b
      );

      setResult(highest);

    }
  }


  const results = {

    Build:
    "THE BUILDER 🌉 — You create. You solve. Your next level is patience and stronger systems.",

    Adapt:
    "THE NAVIGATOR 🧭 — You read situations. Your next level is commitment and confidence.",

    Drive:
    "THE DRIVER 🚙 — You create momentum. Your next level is strategy and timing."
  };


  return (

    <main style={{
      minHeight:"100vh",
      background:"#050505",
      color:"white",
      padding:"50px",
      fontFamily:"Arial"
    }}>


      <h1>
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
            padding:"15px 30px"
          }}
          >

          {answer.text}

          </button>

        ))}


      </section>

      ) : (

      <section style={{
        marginTop:"80px",
        border:"1px solid #333",
        borderRadius:"25px",
        padding:"40px",
        textAlign:"center"
      }}>

        <h2>
          Your Road Profile
        </h2>

        <p style={{
          fontSize:"24px"
        }}>
          {results[result]}
        </p>

        <p>
          — Road Buddy
        </p>

      </section>

      )}

    </main>

  );
}
