"use client";

export default function Journey() {

  const steps = [
    {
      icon: "🧠",
      title: "Vision",
      text: "See the destination before the world does."
    },
    {
      icon: "🛠️",
      title: "Skills",
      text: "Build the tools to create value."
    },
    {
      icon: "🚗",
      title: "Momentum",
      text: "Movement creates opportunity."
    },
    {
      icon: "🏢",
      title: "Empire",
      text: "Turn principles into systems."
    }
  ];


  return (

    <main className="journey">


      <div className="backgroundGlow"></div>


      <div className="road">

        <div className="lane"></div>

      </div>



      <div className="traveler">

        🚶🏾

      </div>



      <div className="roadBuddy">

        <div className="bot">
          🤖
        </div>

        <div className="bubble">

          <h3>
            Road Buddy
          </h3>

          <p>
            Stay focused. The road rewards consistency.
          </p>

        </div>

      </div>




      <div className="timeline">


        {steps.map((step,index)=>(

          <div 
            className="checkpoint"
            key={index}
          >

            <div className="icon">
              {step.icon}
            </div>

            <h3>
              {step.title}
            </h3>

            <p>
              {step.text}
            </p>

          </div>

        ))}


      </div>





      <section className="intro">

        <h1>
          THE ROAD IS YOURS
        </h1>


        <p>
          Build the vision. Master the process. Create the legacy.
        </p>


      </section>





      <style jsx>{`

        .journey {

          min-height:100vh;
          background:#050505;
          color:white;
          position:relative;
          overflow:hidden;
          display:flex;
          align-items:center;
          justify-content:center;

        }



        .backgroundGlow {

          position:absolute;
          inset:0;

          background:
          radial-gradient(circle at top,#303030,#050505 70%);

        }



        .road {

          position:absolute;
          bottom:-180px;

          width:150%;
          height:420px;

          background:#111;

          transform:
          perspective(800px)
          rotateX(60deg);

        }



        .lane {

          width:8px;
          height:100%;
          background:#555;
          margin:auto;

        }




        .traveler {

          position:absolute;
          bottom:210px;

          font-size:80px;

          animation:

          walk 5s infinite alternate ease-in-out;

          z-index:3;

        }




        .roadBuddy {

          position:absolute;
          right:8%;
          bottom:35%;

          display:flex;
          align-items:center;
          gap:15px;

          z-index:4;

        }




        .bot {

          font-size:45px;

        }




        .bubble {

          background:#111;
          border:1px solid #444;

          padding:15px;

          border-radius:15px;

          max-width:220px;

        }




        .bubble h3 {

          margin:0 0 5px;

        }



        .bubble p {

          margin:0;
          opacity:.8;

        }




        .timeline {

          position:absolute;

          top:60px;

          width:90%;

          display:flex;

          justify-content:space-between;

          z-index:3;

        }




        .checkpoint {

          width:180px;

          text-align:center;

          opacity:.85;

        }




        .icon {

          font-size:40px;

        }




        .checkpoint p {

          font-size:14px;
          opacity:.7;

        }




        .intro {

          position:relative;

          z-index:5;

          text-align:center;

          padding:20px;

        }




        h1 {

          font-size:
          clamp(40px,7vw,85px);

          letter-spacing:15px;

          margin:0;

        }




        .intro p {

          font-size:24px;

          opacity:.75;

        }




        @keyframes walk {

          from {

            transform:translateX(-150px);

          }


          to {

            transform:translateX(150px);

          }

        }



      `}</style>


    </main>

  );

}
