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
          justifyContent:"center",
          alignItems:"center",
          flexDirection:"column",
          position:"relative",
          textAlign:"center"
        }}
      >


      {/* Atmosphere */}

      <div className="fog"></div>


      <div className="cloud cloudOne">
        ☁️
      </div>


      <div className="cloud cloudTwo">
        ☁️
      </div>



      {/* Forest */}

      <div className="forest">

        🌲 🌲 🌲 🌲 🌲

      </div>



      {/* Road */}

      <div className="road"></div>



      {/* CLOUD TRAVELER */}

      <div className="traveler">


        <div className="shadow"></div>


        <div className="backpack"></div>


        <div className="hair"></div>


        <div className="head"></div>


        <div className="hood"></div>


        <div className="body">

          ☁️

        </div>


        <div className="leg left"></div>

        <div className="leg right"></div>


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
rgba(255,255,255,.05),
transparent
);

animation:fogMove 8s infinite alternate;

}



.cloud {

position:absolute;

font-size:90px;

opacity:.15;

}



.cloudOne {

top:80px;

left:15%;

animation:cloudMove 12s infinite alternate;

}



.cloudTwo {

top:200px;

right:15%;

animation:cloudMove 18s infinite alternate;

}




.forest {

position:absolute;

bottom:140px;

width:100%;

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




/* TRAVELER */


.traveler {

position:relative;

width:100px;

height:220px;

z-index:4;

animation:walk 3s infinite;

}



.shadow {

position:absolute;

bottom:0;

left:20px;

width:65px;

height:15px;

background:rgba(0,0,0,.5);

border-radius:50%;

}




.head {

position:absolute;

top:35px;

left:35px;

width:38px;

height:42px;

border-radius:50%;

background:#8b5a3c;

}




.hair {

position:absolute;

top:25px;

left:30px;

width:50px;

height:22px;

background:#111;

border-radius:15px;

}



.backpack {

position:absolute;

top:90px;

left:8px;

width:25px;

height:60px;

background:#333;

border-radius:12px;

}




.hood {

position:absolute;

top:75px;

left:25px;

width:55px;

height:35px;

border-radius:25px;

background:#1b1b1b;

}




.body {

position:absolute;

top:95px;

left:25px;

width:60px;

height:75px;

background:#222;

border-radius:15px;

display:flex;

align-items:center;

justify-content:center;

font-size:22px;

}




.leg {

position:absolute;

top:165px;

width:10px;

height:55px;

background:#111;

}



.left {

left:40px;

animation:step 1s infinite alternate;

}



.right {

left:65px;

animation:step 1s infinite alternate-reverse;

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

transform:translateX(-30px);

}

50% {

transform:translateX(30px);

}

100% {

transform:translateX(-30px);

}

}



@keyframes step {

from {

transform:rotate(8deg);

}

to {

transform:rotate(-8deg);

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
