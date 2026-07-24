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
        background:"linear-gradient(#050505,#162015)",
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

          {/* Fog */}

          <div className="fog"></div>


          {/* Sky Clouds */}

          <div className="cloud cloudOne">
            ☁️
          </div>

          <div className="cloud cloudTwo">
            ☁️
          </div>


          {/* Forest Background */}

          <div className="forest">

            <span>🌲</span>
            <span>🌲</span>
            <span>🌲</span>
            <span>🌲</span>
            <span>🌲</span>

          </div>


          {/* Road */}

          <div className="road"></div>


          {/* Traveler */}

          <div className="traveler">

            <div className="hair"></div>

            <div className="head"></div>

            <div className="hoodie">

              ☁️

            </div>

            <div className="legs"></div>

          </div>


          <h1
            style={{
              fontSize:"42px",
              letterSpacing:"8px",
              zIndex:5
            }}
          >
            EVERY PERSON HAS A ROAD
          </h1>


          <p
            style={{
              opacity:.75,
              fontSize:"20px",
              zIndex:5
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


          <div>

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


        </section>

      )}


<style jsx>{`

.fog {

position:absolute;
width:100%;
height:100%;

background:
linear-gradient(
rgba(255,255,255,.04),
transparent
);

animation:fogMove 8s infinite alternate;

}


.cloud {

position:absolute;
font-size:90px;
opacity:.12;

}


.cloudOne {

top:80px;
left:15%;
animation:cloudMove 12s infinite alternate;

}


.cloudTwo {

top:180px;
right:15%;
animation:cloudMove 18s infinite alternate;

}


.forest {

position:absolute;
bottom:130px;
width:100%;
display:flex;
justify-content:space-around;

font-size:90px;
opacity:.25;

z-index:1;

}


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
justify-content:center;
align-items:center;

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


@keyframes fogMove {

from {
opacity:.2;
}

to {
opacity:.5;
}

}


`}</style>


    </main>

  );

}
