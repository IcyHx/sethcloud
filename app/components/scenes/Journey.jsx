"use client";

import { useEffect, useState } from "react";

export default function Journey() {

  const moments = [
    {
      title: "BUILD",
      icon: "🛠️",
      quote: "Create value before you ask for value."
    },
    {
      title: "ADAPT",
      icon: "⚡",
      quote: "The ability to adjust creates advantage."
    },
    {
      title: "CREATE",
      icon: "🚀",
      quote: "Turn ideas into reality."
    },
    {
      title: "LEAD",
      icon: "👑",
      quote: "Influence through example."
    }
  ];


  const [active,setActive] = useState(0);


  useEffect(()=>{

    const timer = setInterval(()=>{

      setActive((current)=>
        current === moments.length - 1
        ? 0
        : current + 1
      );

    },4000);


    return ()=>clearInterval(timer);

  },[]);



  return (

    <main className="journey">


      <div className="background"></div>


      <div className="road">

        <div className="lane"></div>

      </div>



      <div className="character">

        <div className="person">
          🚶🏾
        </div>

        <div className="shadow"></div>

      </div>




      <div className="identity">

        <h1>
          SETH CLOUD
        </h1>

        <p>
          BUILD. ADAPT. CREATE.
        </p>

      </div>




      <div className="philosophy">

        {moments.map((item,index)=>(

          <div

            key={index}

            className={
              index === active
              ? "card active"
              : "card"
            }

          >

            <div className="icon">

              {item.icon}

            </div>


            <h2>

              {item.title}

            </h2>


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
            {moments[active].quote}
          </p>

        </div>

      </div>




      <style jsx>{`

        .journey {

          min-height:100vh;
          background:#050505;
          color:white;
          overflow:hidden;
          position:relative;
          display:flex;
          align-items:center;
          justify-content:center;

        }



        .background {

          position:absolute;
          inset:0;

          background:
          radial-gradient(
          circle at top,
          #333,
          #050505 70%
          );

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

        }




        .lane {

          height:100%;

          width:10px;

          background:#666;

          margin:auto;

        }




        .character {

          position:absolute;

          bottom:230px;

          z-index:3;

        }




        .person {

          font-size:90px;

          animation:

          walk 5s infinite alternate;

        }




        .shadow {

          height:15px;

          width:70px;

          background:#000;

          border-radius:50%;

          margin:auto;

        }





        .identity {

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




        .identity p {

          font-size:32px;

          letter-spacing:10px;

          opacity:.8;

        }




        .philosophy {

          position:absolute;

          top:50px;

          width:90%;

          display:flex;

          justify-content:center;

          gap:30px;

          z-index:5;

        }




        .card {

          width:150px;

          padding:20px;

          border:1px solid #333;

          background:#090909;

          text-align:center;

          opacity:.3;

          transition:.5s;

        }




        .card.active {

          opacity:1;

          transform:translateY(-15px);

          border-color:white;

        }




        .icon {

          font-size:40px;

        }




        .card h2 {

          letter-spacing:4px;

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

          font-size:55px;

        }




        .speech {

          background:#111;

          border:1px solid #444;

          border-radius:15px;

          padding:15px;

          width:220px;

        }




        .speech p {

          opacity:.8;

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
