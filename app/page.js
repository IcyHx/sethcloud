"use client";

import { useState } from "react";

export default function Home() {

  const [scores, setScores] = useState({
    Build:0,
    Adapt:0,
    Drive:0
  });

  const [step,setStep] = useState(0);
  const [result,setResult] = useState("");


  const questions = [
    {
      question:"The road disappears into unknown terrain. What do you do?",
      answers:[
        {text:"Build a new path 🌉", type:"Build"},
        {text:"Study the terrain 🧭", type:"Adapt"},
        {text:"Move forward 🚙", type:"Drive"}
      ]
    },

    {
      question:"Your vehicle struggles. What is your response?",
      answers:[
        {text:"Upgrade the system 🌉", type:"Build"},
        {text:"Change the strategy 🧭", type:"Adapt"},
        {text:"Push through 🚙", type:"Drive"}
      ]
    },

    {
      question:"You discover a new opportunity.",
      answers:[
        {text:"Create something from it 🌉", type:"Build"},
        {text:"Analyze the opportunity 🧭", type:"Adapt"},
        {text:"Take action immediately 🚙", type:"Drive"}
      ]
    }
  ];


  const profiles = {

    Cloud:{
      name:"THE CLOUD MINDSET ☁️",
      role:"The Complete Road",
      terrain:"🌎 Every Environment",
      mission:"Master every road.",
      message:"You create, adapt, and move forward."
    },

    Founder:{
      name:"THE FOUNDER 🏢",
      role:"The Execution Builder",
      terrain:"🏙️ Expanding City",
      mission:"Build your empire.",
      message:"Ideas become reality through action."
    },

    Explorer:{
      name:"THE EXPLORER 🌿",
      role:"The Adaptive Driver",
      terrain:"🌲 Unknown Wilderness",
      mission:"Choose your vehicle.",
      message:"You learn by moving through uncertainty."
    },

    Architect:{
      name:"THE ARCHITECT 🏗️",
      role:"The Strategic Creator",
      terrain:"🏗️ Construction Zone",
      mission:"Create the blueprint.",
      message:"Great visions need strong foundations."
    },

    Build:{
      name:"THE BUILDER 🌉",
      role:"The Creator",
      terrain:"🛠️ New Ground",
      mission:"Create the bridge.",
      message:"You turn ideas into reality."
    },

    Adapt:{
      name:"THE NAVIGATOR 🧭",
      role:"The Adaptive Mind",
      terrain:"🌲 Changing Terrain",
      mission:"Find the safest route.",
      message:"You understand the environment."
    },

    Drive:{
      name:"THE DRIVER 🚙",
      role:"The Momentum Builder",
      terrain:"🛣️ Open Highway",
      mission:"Keep moving forward.",
      message:"You create momentum."
    }

  };


  function choose(type){

    const updated={
      ...scores,
      [type]:scores[type]+1
    };


    setScores(updated);


    if(step < questions.length-1){

      setStep(step+1);

    } else {

      const build=updated.Build;
      const adapt=updated.Adapt;
      const drive=updated.Drive;

      let profile="Drive";


      if(build>0 && adapt>0 && drive>0)
      profile="Cloud";

      else if(build>0 && drive>0)
      profile="Founder";

      else if(adapt>0 && drive>0)
      profile="Explorer";

      else if(build>0 && adapt>0)
      profile="Architect";

      else if(build>0)
      profile="Build";

      else if(adapt>0)
      profile="Adapt";


      setResult(profile);

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


    <h1 style={{letterSpacing:"5px"}}>
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


    {questions[step].answers.map(answer=>(

      <button
      key={answer.type}
      onClick={()=>choose(answer.type)}
      style={{
        display:"block",
        margin:"20px auto",
        padding:"15px 40px"
      }}
      >

      {answer.text}

      </button>

    ))}


    </section>


    ):(


    <section style={{
      marginTop:"70px",
      maxWidth:"700px",
      marginLeft:"auto",
      marginRight:"auto",
      border:"1px solid #333",
      borderRadius:"35px",
      padding:"50px",
      textAlign:"center"
    }}>


    <h2>
      🤖 ROAD BUDDY CHECKPOINT
    </h2>


    <h1>
      {profiles[result].name}
    </h1>


    <h3>
      {profiles[result].role}
    </h3>


    <hr/>


    <p>
      Current Terrain:
      <br/>
      {profiles[result].terrain}
    </p>


    <p>
      Road Buddy:
      <br/>
      "{profiles[result].message}"
    </p>


    <h3>
      NEXT MISSION
    </h3>

    <p>
      {profiles[result].mission}
    </p>


    </section>

    )}


    </main>

  );

}
