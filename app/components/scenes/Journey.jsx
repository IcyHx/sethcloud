"use client";

import { useEffect, useState } from "react";

export default function Journey() {

  const stages = [
    {
      icon: "🧠",
      title: "Vision",
      quote: "Every empire begins as an idea."
    },
    {
      icon: "🛠️",
      title: "Discipline",
      quote: "Consistency turns ideas into reality."
    },
    {
      icon: "🚗",
      title: "Momentum",
      quote: "Movement creates opportunity."
    },
    {
      icon: "🏠",
      title: "Foundation",
      quote: "Build something that lasts."
    },
    {
      icon: "🏢",
      title: "Empire",
      quote: "Systems create scale."
    },
    {
      icon: "👑",
      title: "Legacy",
      quote: "The mission lives beyond you."
    }
  ];


  const [active, setActive] = useState(0);


  useEffect(() => {

    const timer = setInterval(() => {

      setActive((current) =>
        current === stages.length - 1
          ? 0
          : current + 1
      );

    }, 3500);


    return () => clearInterval(timer);

  }, []);



  return (

    <main className="journey">


      <div className="sun"></div>

      <div className="stars"></div>



      <div className="road">

        <div className="centerLine"></div>

      </div>




      <div className="traveler">

        🚶🏾

      </div>




      <div className="timeline">


        {stages.map((stage,index)=>(

          <div
            key={index}
            className={
              index <= active
              ? "stage active"
              : "stage"
            }
          >

            <div className="icon">

              {stage.icon}

            </div>


            <h3>

              {stage.title}

            </h3>


          </div>

        ))}


      </div>





      <div className="buddy">


        <div className="robot">

          🤖

        </div>


        <div className="speech">

          <strong>
            Road Buddy
          </strong>

          <p>
            {stages[active].quote}
          </p>

        </div>


      </div>





      <section className="hero">


        <h1>
          SETH CLOUD
        </h1>


        <p>
          Build. Adapt. Create.
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



        .sun {

          position:absolute;
          width:500px;
          height:500px;

          background:
          radial-gradient(circle,#444,transparent 70%);

          top:-250px;

          animation:pulse 6s infinite alternate;

        }



        .stars {

          position:absolute;
          inset:0;

          background-image:
          radial-gradient(white 1px,transparent 1px);

          background-size:90px 90px;

          opacity:.25;

        }




        .road {

          position:absolute;

          bottom:-200px;

          width:160%;

          height:500px;

          background:#101010;

          transform:
          perspective(900px)
          rotateX(60deg);

        }




        .centerLine {

          height:100%;

          width:10px;

          background:#555;

          margin:auto;

        }





        .traveler {

          position:absolute;

          bottom:240px;

          font-size:90px;

          z-index:3;

          animation:

          walk 6s infinite alternate ease-in-out;

        }




        .timeline {

          position:absolute;

          top:50px;

          width:95%;

          display:flex;

          justify-content:space-around;

          z-index:5;

        }




        .stage {

          opacity:.25;

          transition:.5s;

          text-align:center;

        }




        .stage.active {

          opacity:1;

          transform:translateY(-15px);

        }




        .icon {

          font-size:38px;

        }




        .stage h3 {

          font-size:15px;

        }





        .buddy {

          position:absolute;

          right:40px;

          bottom:30%;

          display:flex;

          gap:15px;

          align-items:center;

          z-index:6;

        }




        .robot {

          font-size:50px;

        }




        .speech {

          background:#111;

          border:1px solid #444;

          padding:15px;

          border-radius:15px;

          max-width:240px;

        }




        .speech p {

          margin:5px 0 0;

          opacity:.75;

        }





        .hero {

          z-index:4;

          text-align:center;

        }





        h1 {

          font-size:

          clamp(45px,8vw,100px);

          letter-spacing:18px;

          margin:0;

        }





        .hero p {

          font-size:30px;

          opacity:.8;

        }





        @keyframes walk {

          from {

            transform:translateX(-220px);

          }


          to {

            transform:translateX(220px);

          }

        }




        @keyframes pulse {

          from {

            opacity:.3;

          }


          to {

            opacity:.8;

          }

        }


      `}</style>


    </main>

  );

}
