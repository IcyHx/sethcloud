"use client";

import { useEffect, useState } from "react";

export default function Journey() {

  const scenes = [
    {
      icon: "🚶🏾",
      title: "THE WALK",
      quote: "Every empire begins with a first step."
    },
    {
      icon: "🚗",
      title: "THE DRIVE",
      quote: "Control your direction."
    },
    {
      icon: "🏠",
      title: "THE FOUNDATION",
      quote: "Build what can support the future."
    },
    {
      icon: "🏢",
      title: "THE EMPIRE",
      quote: "Create systems bigger than yourself."
    },
    {
      icon: "👑",
      title: "THE LEGACY",
      quote: "Leave something meaningful behind."
    }
  ];


  const [scene, setScene] = useState(0);


  useEffect(() => {

    const timer = setInterval(() => {

      setScene((current) =>
        current === scenes.length - 1
          ? 0
          : current + 1
      );

    }, 4500);


    return () => clearInterval(timer);

  }, []);



  return (

    <main className="journey">


      <div className="sky"></div>


      <div className="stars"></div>



      <div className="mountains">

        <div></div>
        <div></div>
        <div></div>

      </div>




      <div className="road">

        <div className="roadLine"></div>

      </div>




      <div className="sceneObject">

        {scenes[scene].icon}

      </div>





      <div className="camera">

        <section>

          <h1>
            SETH CLOUD
          </h1>

          <p>
            {scenes[scene].title}
          </p>

        </section>

      </div>





      <div className="buddy">

        <div className="robot">
          🤖
        </div>


        <div className="message">

          <strong>
            Road Buddy
          </strong>

          <p>
            {scenes[scene].quote}
          </p>

        </div>


      </div>





      <div className="controls">

        {scenes.map((item,index)=>(

          <span
            key={index}
            className={
              index === scene
              ? "active"
              : ""
            }
          />

        ))}

      </div>





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
          linear-gradient(
          to bottom,
          #222,
          #050505
          );

        }



        .stars {

          position:absolute;
          inset:0;

          opacity:.25;

          background-image:
          radial-gradient(
          white 1px,
          transparent 1px
          );

          background-size:90px 90px;

        }




        .mountains {

          position:absolute;
          bottom:180px;
          width:100%;
          height:250px;

          display:flex;
          justify-content:center;
          gap:40px;

        }



        .mountains div {

          width:300px;
          height:250px;

          background:#111;

          clip-path:
          polygon(
          50% 0,
          100% 100%,
          0 100%
          );

          opacity:.8;

        }




        .road {

          position:absolute;
          bottom:-250px;

          width:170%;
          height:550px;

          background:#111;

          transform:
          perspective(1000px)
          rotateX(60deg);

          animation:drive 8s infinite linear;

        }




        .roadLine {

          height:100%;
          width:12px;
          background:#666;
          margin:auto;

        }





        .sceneObject {

          position:absolute;
          bottom:260px;

          font-size:110px;

          z-index:3;

          animation:
          enter .8s ease;

        }




        .camera {

          position:relative;
          z-index:5;

          text-align:center;

        }




        h1 {

          font-size:
          clamp(50px,9vw,120px);

          letter-spacing:20px;

          margin:0;

        }




        .camera p {

          font-size:30px;
          opacity:.8;

        }




        .buddy {

          position:absolute;

          right:50px;
          bottom:30%;

          display:flex;

          align-items:center;

          gap:15px;

          z-index:6;

        }




        .robot {

          font-size:55px;

        }




        .message {

          background:#111;

          border:1px solid #444;

          border-radius:15px;

          padding:15px;

          max-width:240px;

        }




        .message p {

          margin:8px 0 0;

          opacity:.8;

        }





        .controls {

          position:absolute;

          bottom:40px;

          display:flex;

          gap:15px;

          z-index:5;

        }




        .controls span {

          width:15px;
          height:15px;

          border-radius:50%;

          border:1px solid white;

          opacity:.3;

        }




        .controls .active {

          opacity:1;

          transform:scale(1.3);

        }





        @keyframes drive {

          from {

            background-position:0 0;

          }

          to {

            background-position:0 500px;

          }

        }




        @keyframes enter {

          from {

            opacity:0;

            transform:translateY(80px) scale(.5);

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
