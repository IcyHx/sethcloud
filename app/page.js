"use client";

import { useState } from "react";

export default function Home() {
  const [mindset, setMindset] = useState("");

  const responses = {
    Builder: {
      title: "THE BUILDER 🌉",
      text: "You naturally create solutions. You see obstacles as things to solve. Your challenge: remember that strong foundations take patience."
    },

    Navigator: {
      title: "THE NAVIGATOR 🧭",
      text: "You adapt and read situations well. You notice opportunities others miss. Your challenge: don't stay searching forever when it is time to commit."
    },

    Driver: {
      title: "THE DRIVER 🚙",
      text: "You create momentum through action. You move when others hesitate. Your challenge: make sure speed does not replace strategy."
    }
  };


  return (
    <main style={{
      minHeight:"100vh",
      background:"#050505",
      color:"white",
      padding:"40px 60px",
      fontFamily:"Arial, sans-serif"
    }}>

      <h1 style={{
        letterSpacing:"4px"
      }}>
        SETH CLOUD
      </h1>


      <section style={{
        marginTop:"70px",
        textAlign:"center"
      }}>

        <h2>
          🤖 Road Buddy
        </h2>

        <p>
          Before the next road begins,
          <br/>
          understand how you move.
        </p>


        <div style={{
          marginTop:"40px"
        }}>

          <button 
          onClick={() => setMindset("Builder")}
          style={{margin:"10px", padding:"15px"}}>
            🌉 Build
          </button>


          <button 
          onClick={() => setMindset("Navigator")}
          style={{margin:"10px", padding:"15px"}}>
            🧭 Adapt
          </button>


          <button 
          onClick={() => setMindset("Driver")}
          style={{margin:"10px", padding:"15px"}}>
            🚙 Drive
          </button>

        </div>


        {mindset && (
          <div style={{
            marginTop:"50px",
            border:"1px solid #333",
            borderRadius:"25px",
            padding:"40px"
          }}>

            <h2>
              {responses[mindset].title}
            </h2>

            <p style={{
              fontSize:"20px",
              lineHeight:"1.6"
            }}>
              {responses[mindset].text}
            </p>


            <p style={{
              marginTop:"30px",
              opacity:.7
            }}>
              — Road Buddy
            </p>

          </div>
        )}

      </section>

    </main>
  );
}
