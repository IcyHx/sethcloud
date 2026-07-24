"use client";

import { useEffect, useState } from "react";

export default function Journey() {

  const [shot, setShot] = useState("wide");


  useEffect(() => {

    const timer = setTimeout(() => {

      setShot("follow");

    }, 5000);


    const secondTimer = setTimeout(() => {

      setShot("reveal");

    }, 15000);


    return () => {
      clearTimeout(timer);
      clearTimeout(secondTimer);
    };

  }, []);



  return (

    <section className="scene">


      {/* SKY */}

      <div className="sky">

        ☁️

      </div>



      {/* DISTANT WORLD */}

      <div className="farTrees">

        🌲      🌲        🌲

      </div>



      {/* CLOSER WORLD */}

      <div className="nearTrees">

        🌲  🌲  🌲  🌲

      </div>



      {/* ROAD */}

      <div className="road"></div>



      {/* CAMERA */}

      <div
        className={`camera ${shot}`}
      >


        {/* TRAVELER */}

        <div className="traveler">


          <div className="hair"></div>


          <div className="head"></div>


          <div className="body">

            ☁️

          </div>


          <div className="legs"></div>


        </div>


      </div>



<style jsx>{`


.scene {

height:100vh;

overflow:hidden;

position:relative;

background:

linear-gradient(
#1b2b44,
#111
);

}



/* SKY */


.sky {

position:absolute;

top:60px;

width:100%;

text-align:center;

font-size:120px;

opacity:.2;

animation:cloudMove 20s infinite alternate;

}



/* DEPTH LAYERS */


.farTrees {

position:absolute;

bottom:230px;

width:120%;

left:-10%;

font-size:90px;

opacity:.25;

animation:farMove 20s linear infinite;

}



.nearTrees {

position:absolute;

bottom:180px;

width:150%;

left:-20%;

font-size:120px;

opacity:.45;

animation:nearMove 8s linear infinite;

}




/* ROAD */


.road {

position:absolute;

bottom:0;

height:180px;

width:150%;

left:-25%;

background:

repeating-linear-gradient(

90deg,

#222,

#222 90px,

#111 90px,

#111 100px

);

animation:roadMove 1.5s linear infinite;

}




/* CAMERA */


.camera {

position:absolute;

left:50%;

bottom:180px;

transition:all 6s ease;

}



.camera.wide {

transform:

translateX(-50%)

scale(.7);

}



.camera.follow {

transform:

translateX(-50%)

scale(1);

}



.camera.reveal {

transform:

translateX(-50%)

translateY(-40px)

scale(1.2);

}



/* CHARACTER */


.traveler {

width:90px;

height:200px;

animation:walk 1.5s infinite;

}



.head {

position:absolute;

top:25px;

left:30px;

width:40px;

height:40px;

border-radius:50%;

background:#8b5a3c;

}



.hair {

position:absolute;

top:15px;

left:25px;

width:50px;

height:20px;

background:#111;

border-radius:20px;

}



.body {

position:absolute;

top:70px;

left:15px;

width:65px;

height:80px;

background:#222;

border-radius:20px;

display:flex;

justify-content:center;

align-items:center;

}



.legs {

position:absolute;

top:145px;

left:35px;

height:55px;

width:20px;

border-left:8px solid #111;

border-right:8px solid #111;

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




@keyframes roadMove {


from {

transform:translateY(0);

}


to {

transform:translateY(120px);

}


}




@keyframes farMove {


from {

transform:translateX(0);

}


to {

transform:translateX(-100px);

}


}




@keyframes nearMove {


from {

transform:translateX(0);

}


to {

transform:translateX(-250px);

}


}




@keyframes cloudMove {


from {

transform:translateX(-50px);

}


to {

transform:translateX(50px);

}


}



`}</style>



    </section>

  );

}
