"use client";

import { useState, useEffect } from "react";

export default function Journey() {

  const stages = [
    {
      icon:"🧠",
      title:"Vision",
      description:"The idea begins."
    },
    {
      icon:"🛠️",
      title:"Skill",
      description:"The builder is created."
    },
    {
      icon:"🚗",
      title:"Momentum",
      description:"Movement creates freedom."
    },
    {
      icon:"🏠",
      title:"Foundation",
      description:"Build something lasting."
    },
    {
      icon:"🏢",
      title:"Empire",
      description:"Systems create scale."
    },
    {
      icon:"👑",
      title:"Legacy",
      description:"The mission continues."
    }
  ];


  const [active,setActive] = useState(0);


  useEffect(()=>{

    const timer = setInterval(()=>{

      setActive(prev => 
        prev < stages.length - 1 ? prev + 1 : 0
      );

    },3000);


    return ()=>clearInterval(timer);

  },[]);



  return (

    <main className="journey">


      <div className="sky"></div>


      <div className="stars"></div>



      <div className="road">

        <div className="roadStripe"></div>

      </div>




      <div className="traveler">

        🚶🏾

      </div>




      <div className="progress">


        {stages.map((stage,index)=>(

          <div
            key={index}
            className={
              index <= active 
              ? "stage active"
              : "stage"
            }
          >

            <div className="circle">

              {stage.icon}

            </div>


            <h3>
              {stage.title}
            </h3>


            <p>
              {stage.description}
            </p>


          </div>


        ))}


      </div>





      <div className="roadBuddy">

        🤖

        <div className="message">

          <strong>
            Road Buddy
          </strong>

          <p>
            Stage {active + 1}: {stages[active].title}
          </p>

        </div>

      </div>





      <section className="hero">

        <h1>
          SETH CLOUD
        </h1>

        <p>
          From one step to an empire.
        </p>

      </section>






      <style jsx>{`

        .journey {

          min-height:100vh;
          background:#050505;
          color:white;
          overflow:hidden;
          position:relative;
          display:flex;
          justify-content:center;
          align-items:center;

        }



        .sky {

          position:absolute;
          inset:0;

          background:
          radial-gradient(circle at top,#292929,#050505 70%);

        }




        .stars {

          position:absolute;
          inset:0;

          opacity:.3;

          background-image:
          radial-gradient(white 1px,transparent 1px);

          background-size:70px 70px;

        }




        .road {

          position:absolute;
          bottom:-180px;

          width:150%;
          height:450px;

          background:#111;

          transform:
          perspective(900px)
          rotateX(60deg);

        }




        .roadStripe {

          width:10px;
          height:100%;
          background:#555;
          margin:auto;

        }





        .traveler {

          position:absolute;
          bottom:220px;

          font-size:85px;

          animation:
          walk 5s infinite alternate;

          z-index:3;

        }




        .progress {

          position:absolute;

          top:50px;

          width:95%;

          display:flex;

          justify-content:space-around;

          z-index:4;

        }




        .stage {

          width:130px;

          text-align:center;

          opacity:.25;

          transition:.5s;

        }




        .stage.active {

          opacity:1;

          transform:translateY(-10px);

        }




        .circle {

          width:55px;
          height:55px;

          margin:auto;

          border-radius:50%;

          border:1px solid #555;

          display:flex;

          justify-content:center;
          align-items:center;

          font-size:30px;

        }




        .stage p {

          font-size:13px;
          opacity:.7;

        }




        .roadBuddy {

          position:absolute;

          right:40px;
          bottom:35%;

          font-size:45px;

          display:flex;

          gap:10px;

          align-items:center;

          z-index:5;

        }




        .message {

          background:#111;

          border:1px solid #444;

          padding:12px;

          border-radius:12px;

          font-size:14px;

        }




        .hero {

          position:relative;

          z-index:5;

          text-align:center;

        }




        h1 {

          font-size:
          clamp(45px,8vw,100px);

          letter-spacing:18px;

          margin:0;

        }




        .hero p {

          font-size:28px;

          opacity:.8;

        }




        @keyframes walk {

          from {

            transform:translateX(-180px);

          }


          to {

            transform:translateX(180px);

          }

        }


      `}</style>


    </main>

  );

}
