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
            position:"relative",
            textAlign:"center"
          }}
        >

          {/* Clouds */}

          <div className="cloud cloudOne">
            ☁️
          </div>

          <div className="cloud cloudTwo">
            ☁️
          </div>


          {/* Road */}

          <div className="road"></div>


          {/* Traveler */}

          <div className="traveler">

            {/* Hair */}

            <div className="hair"></div>

            {/* Head */}

            <div className="head"></div>

            {/* Hoodie */}

            <div className="hoodie">

              <span>
                ☁
              </span>

            </div>

            {/* Legs */}

            <div className="legs"></div>

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
              opacity:.75,
              fontSize:"20px",
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
              fontSize:"26px"
            }}
          >
            Build. Adapt. Create.
          </p>


          <div className="buttons">

            <button>📚 Learn The Principles</button>

            <button>🛣️ Explore The Journey</button>

            <button>🤖 Meet Road Buddy</button>

            <button>📂 View The Work</button>

          </div>


        </section>

      )}


<style jsx>{`

.road {

position:absolute;
bottom:0;
width:100%;
height:160px;

background:
repeating-linear-gradient(
90deg,
transparent,
transparent 80px,
#333 80px,
#333 85px
);

animation:roadMove 4s linear infinite;

}


.cloud {

position:absolute;
opacity:.15;
font-size:90px;

}


.cloudOne {

top:80px;
left:15%;
animation:cloudMove 12s infinite alternate;

}


.cloudTwo {

top:220px;
right:15%;
animation:cloudMove 18s infinite alternate;

}


.traveler {

position:relative;
width:90px;
height:180px;
z-index:3;

animation:walk 3s infinite;

}


.head {

position:absolute;
top:25px;
left:30px;

width:35px;
height:35px;

border-radius:50%;
background:#8b5a3c;

}


.hair {

position:absolute;
top:15px;
left:25px;

width:45px;
height:18px;

background:#111;

border-radius:20px;

}


.hoodie {

position:absolute;
top:65px;
left:15px;

width:60px;
height:70px;

background:#222;

border-radius:15px;

display:flex;
align-items:center;
justify-content:center;

font-size:22px;

}


.legs {

position:absolute;
top:135px;
left:32px;

width:25px;
height:45px;

border-left:8px solid #222;
border-right:8px solid #222;

}


button {

padding:18px;
margin:10px;

background:#111;
color:white;

border:1px solid #444;

border-radius:12px;

font-size:18px;

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


@keyframes cloudMove {

from {
transform:translateX(-40px);
}

to {
transform:translateX(40px);
}

}


@keyframes roadMove {

from {
transform:translateY(0);
}

to {
transform:translateY(80px);
}

}


`}</style>


    </main>

  );
}
