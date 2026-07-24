"use client";

import { useEffect, useState } from "react";


export default function Journey() {


  const [phase, setPhase] = useState("summit");


  useEffect(() => {


    const rewind = setTimeout(() => {

      setPhase("rewind");

    }, 8000);



    const beginning = setTimeout(() => {

      setPhase("beginning");

    }, 14000);



    return () => {

      clearTimeout(rewind);

      clearTimeout(beginning);

    };


  }, []);





  return (

    <main className={`cinematic ${phase}`}>



      {phase === "summit" && (

        <section className="summit">


          <div className="clouds">
            ☁️ ☁️ ☁️
          </div>



          <div className="mountain">

            💵🏔️

          </div>



          <div className="traveler sitting">


            <div className="hair"></div>

            <div className="head"></div>

            <div className="body">
              ☁️
            </div>


          </div>



          <div className="empire">

            🏙️ 🏢 🌆

          </div>



        </section>

      )}





      {phase === "rewind" && (


        <section className="memory">


          <div className="flash">
            
            🏢 🤝 📚 💻 🌧️ 🌲 🛣️

          </div>


        </section>


      )}






      {phase === "beginning" && (


        <section className="beginning">


          <div className="ground"></div>



          <div className="walker">


            <div className="hair"></div>

            <div className="head"></div>


            <div className="body">

              ☁️

            </div>



          </div>


        </section>


      )}








<style jsx>{`



.cinematic {

height:100vh;

overflow:hidden;

background:#050505;

color:white;

}





/* MONEY SUMMIT */


.summit {

height:100%;

position:relative;

background:

linear-gradient(

#52677c,

#111

);

overflow:hidden;

}



.clouds {

position:absolute;

top:50px;

width:100%;

text-align:center;

font-size:100px;

opacity:.4;

animation:clouds 8s infinite alternate;

}



.mountain {

position:absolute;

bottom:180px;

left:50%;

transform:translateX(-50%);

font-size:180px;

}



.sitting {

position:absolute;

bottom:330px;

left:50%;

transform:translateX(-50%);

}



.empire {

position:absolute;

bottom:80px;

width:100%;

text-align:center;

font-size:80px;

opacity:.7;

}





/* MEMORY REWIND */



.memory {

height:100%;

display:flex;

align-items:center;

justify-content:center;

background:black;

}



.flash {

font-size:70px;

animation:rewind 2s infinite;

}





/* BEGINNING */



.beginning {

height:100%;

position:relative;

background:

linear-gradient(

#182438,

#111

);

}



.ground {

position:absolute;

bottom:0;

height:180px;

width:100%;

background:#222;

}



.walker {

position:absolute;

bottom:180px;

left:50%;

transform:translateX(-50%);

animation:walk 2s infinite;

}






.head {

width:40px;

height:40px;

background:#8b5a3c;

border-radius:50%;

}



.hair {

width:50px;

height:18px;

background:#111;

border-radius:20px;

margin-left:-5px;

}





.body {

width:65px;

height:80px;

background:#222;

border-radius:20px;

display:flex;

align-items:center;

justify-content:center;

}





@keyframes walk {

0% {

transform:translateY(0);

}

50% {

transform:translateY(-10px);

}

100% {

transform:translateY(0);

}

}



@keyframes rewind {


0% {

transform:scale(1);

opacity:1;

}


100% {

transform:scale(2);

opacity:0;

}


}



@keyframes clouds {

from {

transform:translateX(-40px);

}

to {

transform:translateX(40px);

}

}



`}</style>



    </main>

  );

}
