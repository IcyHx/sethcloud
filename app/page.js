"use client";

import { useState, useEffect } from "react";
import Journey from "./components/scenes/Journey";

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
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        overflow: "hidden",
        fontFamily: "Arial, Helvetica, sans-serif"
      }}
    >

      {!entered ? (

        <Journey />

      ) : (

        <section

          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "40px"
          }}

        >

          <h1

            style={{
              fontSize: "clamp(45px, 8vw, 90px)",
              letterSpacing: "15px",
              marginBottom: "20px"
            }}

          >

            SETH CLOUD

          </h1>


          <p

            style={{
              fontSize: "clamp(20px, 3vw, 32px)",
              opacity: 0.8,
              marginBottom: "40px"
            }}

          >

            Build. Adapt. Create.

          </p>


          <div

            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "15px"
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



          <style jsx>{`

            button {

              padding:18px 25px;
              background:#111;
              color:white;
              border:1px solid #444;
              border-radius:12px;
              font-size:18px;
              cursor:pointer;
              transition:.3s;

            }


            button:hover {

              transform:scale(1.05);
              border-color:white;

            }


          `}</style>


        </section>

      )}

    </main>

  );

}
