"use client";

import { useEffect, useState } from "react";

export default function Journey() {

  const [scene, setScene] = useState(0);


  useEffect(() => {

    const timer = setInterval(() => {

      setScene((current) => {

        if (current === 5) {
          return 0;
        }

        return current + 1;

      });

    }, 9000);


    return () => clearInterval(timer);

  }, []);



  const worlds = [

    {
      sky:"#162235",
      ground:"#111",
      effect:"🌅"
    },

    {
      sky:"#102318",
      ground:"#071007",
      effect:"🌲"
    },

    {
      sky:"#30333a",
      ground:"#111",
      effect:"🌧️"
    },

    {
      sky:"#123047",
      ground:"#06121c",
      effect:"🌊"
    },

    {
      sky:"#171717",
      ground:"#050505",
      effect:"🏙️"
    },

    {
      sky:"#4b5563",
      ground:"#111827",
      effect:"☁️"
    }

  ];



  const world = worlds[scene];



  return (

    <section
      className="world"
      style={{
        background:
        `linear-gradient(${world.sky},${world.ground})`
      }}
    >


      {/* Sky Layer */}

      <div className="skyEffect">
        {world.effect}
      </div>



      {/* Background Terrain */}

      <div className="backgroundTerrain"></div>



      {/* Foreground Road */}

      <div className="road"></div>



      {/* Traveler */}

      <div className="camera">

        <div className="traveler">


          <div className="hair"></div>

          <div className="head"></div>


          <div className="hoodie">

            ☁️

          </div>


          <div className="legs"></div>


        </div>

      </div>





      <style jsx>{`



.world {

height:100vh;

width:100%;

overflow:hidden;

position:relative;

transition:background 3s ease;

}



.skyEffect {

position:absolute;

top:80px;

width:100%;

text-align:center;

font-size:120px;

opacity:.25;

animation:float 8s infinite alternate;

}



.backgroundTerrain {

position:absolute;

bottom:150px;

width:140%;

height:200px;

left:-20%;

background:rgba(0,0,0,.35);

animation:terrainMove 15s infinite alternate;

}



.road {

position:absolute;

bottom:0;

width:140%;

left:-20%;

height:180px;

background:

repeating-linear-gradient(

90deg,

#222,

#222 80px,

#111 80px,

#111 90px

);


animation:roadMove 2s linear infinite;

}



.camera {

position:absolute;

left:50%;

bottom:180px;

animation:cameraMove 8s infinite alternate;

}



.traveler {

position:relative;

width:90px;

height:190px;

animation:walk 2s infinite;

}



.head {

position:absolute;

top:15px;

left:30px;

height:38px;

width:38px;

background:#8b5a3c;

border-radius:50%;

}



.hair {

position:absolute;

top:5px;

left:25px;

height:20px;

width:48px;

background:#111;

border-radius:20px;

}



.hoodie {

position:absolute;

top:65px;

left:15px;

height:70px;

width:60px;

background:#222;

border-radius:20px;

display:flex;

align-items:center;

justify-content:center;

}



.legs {

position:absolute;

top:135px;

left:30px;

height:55px;

width:30px;

border-left:8px solid #111;

border-right:8px solid #111;

}



@keyframes cameraMove {

from {

transform:translateX(-40px) scale(1);

}

to {

transform:translateX(40px) scale(1.08);

}

}



@keyframes walk {

0% {

transform:translateY(0);

}

50% {

transform:translateY(-8px);

}

100% {

transform:translateY(0);

}

}



@keyframes roadMove {

from {

transform:translateY(0);

}

to {

transform:translateY(100px);

}

}



@keyframes terrainMove {

from {

transform:translateX(0);

}

to {

transform:translateX(-120px);

}

}



@keyframes float {

from {

transform:translateY(0);

}

to {

transform:translateY(-20px);

}

}



`}</style>


    </section>

  );

}
