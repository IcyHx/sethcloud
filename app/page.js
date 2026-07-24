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
  const [vehicle,setVehicle] = useState("");


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
      terrain:"🌎 Every Environment",
      mission:"Master every road."
    },

    Founder:{
      name:"THE FOUNDER 🏢",
      terrain:"🏙️ Expanding City",
      mission:"Build your empire."
    },

    Explorer:{
      name:"THE EXPLORER 🌎",
      terrain:"🌲 Unknown Wilderness",
      mission:"Choose your vehicle."
    },

    Architect:{
      name:"THE ARCHITECT 🏗️",
      terrain:"🏗️ Construction Zone",
      mission:"Create the blueprint."
    },

    Build:{
      name:"THE BUILDER 🌉",
      terrain:"🛠️ New Ground",
      mission:"Create the bridge."
    },

    Adapt:{
      name:"THE NAVIGATOR 🧭",
      terrain:"🌲 Changing Terrain",
      mission:"Find the route."
    },

    Drive:{
      name:"THE DRIVER 🚙",
      terrain:"🛣️ Open Highway",
      mission:"Keep moving."
    }

  };


  const vehicles = {

    Bike:{
      name:"🏍️ THE AGILE PATH",
      message:"You value speed, flexibility, and learning through experience."
    },

    Truck:{
      name:"🚙 THE FOUNDATION PATH",
      message:"You value preparation, reliability, and carrying bigger missions."
    },

    Future:{
      name:"🏎️ THE VISION PATH",
      message:"You value innovation, ambition, and creating new possibilities."
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

    <h1>
      SETH CLOUD
    </h1>


    {!result ? (

    <section style={{
      marginTop:"70px",
      textAlign:"center"
    }}>

    <h2>🤖 Road Buddy</h2>

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


    ) : !vehicle ? (

    <section style={{
      marginTop:"70px",
      textAlign:"center"
    }}>

    <h2>
      🤖 ROAD BUDDY CHECKPOINT
    </h2>

    <h1>
      {profiles[result].name}
    </h1>

    <p>
      Current Terrain:
      <br/>
      {profiles[result].terrain}
    </p>

    <h3>
      The terrain has changed.
      Choose your vehicle.
    </h3>


    {Object.keys(vehicles).map(item=>(

      <button
      key={item}
      onClick={()=>setVehicle(item)}
      style={{
        display:"block",
        margin:"20px auto",
        padding:"15px 40px"
      }}
      >

      {vehicles[item].name}

      </button>

    ))}


    </section>


    ) : (

    <section style={{
      marginTop:"70px",
      textAlign:"center",
      border:"1px solid #333",
      borderRadius:"30px",
      padding:"40px"
    }}>


    <h2>
      🚙 VEHICLE SELECTED
    </h2>

    <h1>
      {vehicles[vehicle].name}
    </h1>

    <p>
      Road Buddy:
      <br/>
      "{vehicles[vehicle].message}"
    </p>


    <h3>
      Next Road Loading...
    </h3>


    </section>

    )}

    </main>

  );

}
