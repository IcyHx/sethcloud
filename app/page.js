"use client";

import { useState, useEffect } from "react";

export default function Home() {

  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEntered(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);


  return (

    <main
      style={{
        minHeight:"100vh",
        background:"#050505",
        color:"white",
        fontFamily:"Arial",
        overflow:"hidden"
      }}
    >

      {!entered ? (

        <section
          style={{
            height:"100vh",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            textAlign:"center"
          }}
        >

          <div
            style={{
              fontSize:"60px",
              marginBottom:"40px",
              animation:"float 3s infinite"
            }}
          >
            ☁️
          </div>


          <h1
            style={{
              fontSize:"40px",
              letterSpacing:"8px"
            }}
          >
            EVERY PERSON HAS A ROAD
          </h1>


          <p
            style={{
              fontSize:"20px",
              opacity:.7
            }}
          >
            Understand the terrain. Choose your direction.
          </p>


        </section>


      ) : (

        <section
          style={{
            padding:"60px",
            textAlign:"center"
          }}
        >

          <h1
            style={{
              fontSize:"70px",
              letterSpacing:"12px"
            }}
          >
            SETH CLOUD
          </h1>


          <p
            style={{
              fontSize:"24px",
              marginBottom:"50px"
            }}
          >
            Build. Adapt. Create.
          </p>


          <div
            style={{
              display:"grid",
              gap:"25px",
              maxWidth:"600px",
              margin:"auto"
            }}
          >


            <button>
              📚 Learn The Principles
            </button>


            <button>
              🛣️ Explore The Journey
            </button>


            <button>
              🤖 Meet Road Buddy
            </button>


            <button>
              📂 View The Work
            </button>


          </div>


          <div
            style={{
              marginTop:"100px",
              opacity:.5
            }}
          >

            <h3>
              THE ROAD CONTINUES
            </h3>

            <p>
              Every destination begins with a decision.
            </p>

          </div>


        </section>

      )}

    </main>

  );
}
