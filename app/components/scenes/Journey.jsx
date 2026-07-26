"use client";

import { useEffect, useState } from "react";

export default function Journey() {

  const stages = [
    {
      icon: "🚶🏾",
      title: "The Beginning",
      message: "Every journey starts with one decision."
    },
    {
      icon: "🚗",
      title: "Momentum",
      message: "Movement creates opportunity."
    },
    {
      icon: "🏠",
      title: "Foundation",
      message: "Build stability before expansion."
    },
    {
      icon: "🏢",
      title: "Empire",
      message: "Create systems that grow."
    },
    {
      icon: "👑",
      title: "Legacy",
      message: "The mission outlives the moment."
    }
  ];


  const [stage,setStage] = useState(0);


  useEffect(() => {

    const timer = setInterval(() => {

      setStage((current) =>
        current === stages.length - 1
        ? 0
        : current + 1
      );

    },4000);


    return () => clearInterval(timer);

  },[]);



  return (

    <main className="journey">


      <div className="sky"></div>


      <div className="road">

        <div className="line"></div>

      </div>




      <div className="object">

        {stages[stage].icon}

      </div>




      <div className="buddy">

        🤖

        <div className="bubble">

          <strong>
            Road Buddy
          </strong>

          <p>
            {stages[stage].message}
          </p>

        </div>

      </div>




      <div className="stageInfo">

        <h1>
          {stages[stage].title}
        </h1>

        <p>
          SethCloud Journey
        </p>

      </div>





      <div className="progress">

        {stages.map((item,index)=>(

          <div
            key={index}
            className={
              index === stage
              ? "dot active"
              : "dot"
            }
          >

            {index + 1}

          </div>

        ))}

      </div>




      <style jsx>{`

        .journey {

          min-height:100vh;
          background:#050505;
          color:white;
          display:flex;
          justify-content:center;
          align-items:center;
          position:relative;
          overflow:hidden;

        }



        .sky {

          position:absolute;
          inset:0;

          background:
          radial-gradient(circle at top,#333,#050505 70%);

        }




        .road {

          position:absolute;
          bottom:-200px;

          width:160%;
          height:500px;

          background:#111;

          transform:
          perspective(900px)
          rotateX(60deg);

        }




        .line {

          width:10px;
          height:100%;
          background:#555;
          margin:auto;

        }





        .object {

          position:absolute;

          font-size:100px;

          bottom:240px;

          z-index:3;

          animation:

          appear .8s ease;

        }





        .stageInfo {

          position:relative;

          z-index:5;

          text-align:center;

        }




        h1 {

          font-size:

          clamp(40px,7vw,85px);

          letter-spacing:12px;

          margin:0;

        }




        .stageInfo p {

          font-size:24px;

          opacity:.7;

        }





        .buddy {

          position:absolute;

          right:40px;

          bottom:30%;

          z-index:6;

          display:flex;

          gap:15px;

          align-items:center;

          font-size:45px;

        }




        .bubble {

          background:#111;

          border:1px solid #444;

          padding:15px;

          border-radius:15px;

          max-width:220px;

          font-size:16px;

        }




        .bubble p {

          margin:8px 0 0;

          opacity:.8;

        }





        .progress {

          position:absolute;

          bottom:50px;

          display:flex;

          gap:20px;

          z-index:5;

        }




        .dot {

          width:35px;

          height:35px;

          border-radius:50%;

          border:1px solid #555;

          display:flex;

          align-items:center;

          justify-content:center;

          opacity:.4;

        }




        .dot.active {

          opacity:1;

          transform:scale(1.2);

        }




        @keyframes appear {

          from {

            opacity:0;

            transform:translateY(50px) scale(.7);

          }


          to {

            opacity:1;

            transform:translateY(0) scale(1);

          }

        }


      `}</style>


    </main>

  );

}
