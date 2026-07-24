"use client";

import { useEffect, useState } from "react";

export default function Journey() {

  const [scene, setScene] = useState(0);


  useEffect(() => {

    const timer = setInterval(() => {

      setScene((current) => {

        if (current === 4) {
          return 0;
        }

        return current + 1;

      });

    }, 6000);


    return () => clearInterval(timer);

  }, []);



  const scenes = [

    {
      name: "Origin",
      background: "linear-gradient(#172033,#243447)",
      terrain: "🌅",
    },

    {
      name: "Wilderness",
      background: "linear-gradient(#102010,#182818)",
      terrain: "🌲",
    },

    {
      name: "Storm",
      background: "linear-gradient(#202020,#101010)",
      terrain: "🌧️",
    },

    {
      name: "Crossing",
      background: "linear-gradient(#102030,#204060)",
      terrain: "🌊",
    },

    {
      name: "Expansion",
      background: "linear-gradient(#111,#252525)",
      terrain: "🏙️",
    }

  ];



  const currentScene = scenes[scene];



  return (

    <section
      style={{
        height:"100vh",
        width:"100%",
        overflow:"hidden",
        position:"relative",
        background:currentScene.background,
        transition:"background 2s ease"
      }}
    >


      {/* Environment */}

      <div
        style={{
          position:"absolute",
          top:"80px",
          width:"100%",
          textAlign:"center",
          fontSize:"90px",
          opacity:.7
        }}
      >

        {currentScene.terrain}

      </div>



      {/* Traveler */}

      <div
        style={{
          position:"absolute",
          bottom:"180px",
          left:"50%",
          transform:"translateX(-50%)",
          animation:"walk 2s infinite"
        }}
      >

        <div
          style={{
            width:"45px",
            height:"45px",
            background:"#8b5a3c",
            borderRadius:"50%",
            margin:"auto"
          }}
        />


        <div
          style={{
            width:"70px",
            height:"90px",
            background:"#222",
            borderRadius:"20px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            color:"white"
          }}
        >

          ☁️

        </div>


      </div>



      {/* Road */}

      <div
        style={{
          position:"absolute",
          bottom:0,
          width:"120%",
          height:"180px",
          background:
          "repeating-linear-gradient(90deg,transparent,transparent 70px,#444 70px,#444 75px)",
          animation:"road 2s linear infinite"
        }}
      />



      {/* Scene Title (temporary) */}

      <div
        style={{
          position:"absolute",
          bottom:"40px",
          width:"100%",
          textAlign:"center",
          color:"white",
          opacity:.7,
          fontSize:"20px"
        }}
      >

        {currentScene.name}

      </div>



      <style jsx>{`

        @keyframes walk {

          0% {
            transform:translateX(-20px);
          }

          50% {
            transform:translateX(20px);
          }

          100% {
            transform:translateX(-20px);
          }

        }


        @keyframes road {

          from {
            transform:translateY(0);
          }

          to {
            transform:translateY(80px);
          }

        }


      `}</style>


    </section>

  );

}
