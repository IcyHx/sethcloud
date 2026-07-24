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
        background:"linear-gradient(#050505,#111827)",
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
            textAlign:"center",
            position:"relative",
            overflow:"hidden"
          }}
        >

          {/* Moving Road */}

          <div
            style={{
              position:"absolute",
              bottom:"0",
              width:"100%",
              height:"160px",
              background:
              "repeating-linear-gradient(90deg, transparent, transparent 80px, #333 80px, #333 85px)",
              animation:"moveRoad 4s linear infinite"
            }}
          />


          {/* Traveler */}

          <div
            style={{
              fontSize:"80px",
              marginBottom:"20px",
              animation:"walk 4s infinite",
              zIndex:2
            }}
          >
            👤
          </div>


          {/* Cloud Symbol */}

          <div
            style={{
              fontSize:"65px",
              marginBottom:"30px",
              animation:"float 3s infinite",
              zIndex:2
            }}
          >
            ☁️
          </div>


          <h1
            style={{
              fontSize:"42px",
              letterSpacing:"8px",
              zIndex:2
            }}
          >
            EVERY PERSON HAS A ROAD
          </h1>


          <p
            style={{
              fontSize:"20px",
              opacity:.75,
              zIndex:2
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
              fontSize:"26px",
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

            <button style={buttonStyle}>
              📚 Learn The Principles
            </button>


            <button style={buttonStyle}>
              🛣️ Explore The Journey
            </button>


            <button style={buttonStyle}>
              🤖 Meet Road Buddy
            </button>


            <button style={buttonStyle}>
              📂 View The Work
            </button>


          </div>


          <div
            style={{
              marginTop:"100px",
              opacity:.6
            }}
          >

            <h2>
              THE ROAD CONTINUES
            </h2>

            <p>
              Every destination begins with a decision.
            </p>

          </div>


          <style jsx>{`

          @keyframes moveRoad {

            from {
              transform:translateY(0);
            }

            to {
              transform:translateY(80px);
            }

          }


          @keyframes walk {

            0% {
              transform:translateX(-25px);
            }

            50% {
              transform:translateX(25px);
            }

            100% {
              transform:translateX(-25px);
            }

          }


          @keyframes float {

            0% {
              transform:translateY(0);
            }

            50% {
              transform:translateY(-15px);
            }

            100% {
              transform:translateY(0);
            }

          }

          `}</style>


        </section>

      )}

    </main>

  );
}


const buttonStyle = {

  padding:"18px",
  fontSize:"18px",
  cursor:"pointer",
  borderRadius:"12px",
  background:"#111",
  color:"white",
  border:"1px solid #444"

};
