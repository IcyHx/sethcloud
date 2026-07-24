"use client";

import { useState, useEffect } from "react";
import Journey from "./components/scenes/Journey";


export default function Home() {

  const [entered, setEntered] = useState(false);


  useEffect(() => {

    const timer = setTimeout(() => {

      setEntered(true);

    }, 30000);


    return () => clearTimeout(timer);

  }, []);



  return (

    <main
      style={{
        minHeight:"100vh",
        background:"#050505",
        color:"white",
        overflow:"hidden",
        fontFamily:"Arial"
      }}
    >


      {!entered ? (

        <Journey />

      ) : (


        <section

          style={{

            minHeight:"100vh",

            display:"flex",

            flexDirection:"column",

            justifyContent:"center",

            alignItems:"center",

            textAlign:"center",

            padding:"40px"

          }}

        >


          <h1

          style={{

            fontSize:"80px",

            letterSpacing:"15px"

          }}

          >

            SETH CLOUD

          </h1>



          <p

          style={{

            fontSize:"28px",

            opacity:.8

          }}

          >

            Build. Adapt. Create.

          </p>



          <div>


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


        </section>


      )}



      <style jsx>{`

      button {

        padding:18px;

        margin:10px;

        background:#111;

        color:white;

        border:1px solid #444;

        border-radius:12px;

        font-size:18px;

        cursor:pointer;

      }


      button:hover {

        transform:scale(1.05);

      }


      `}</style>


    </main>

  );

}
