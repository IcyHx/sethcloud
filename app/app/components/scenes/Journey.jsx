"use client";

export default function Journey() {

  return (

    <main className="summitScene">


      {/* SKY */}

      <div className="skyGlow"></div>

      <div className="cloud cloudOne"></div>
      <div className="cloud cloudTwo"></div>
      <div className="cloud cloudThree"></div>


      {/* BIRDS */}

      <div className="birds">
        V&nbsp;&nbsp;V&nbsp;&nbsp;&nbsp;V
      </div>


      {/* SUN */}

      <div className="sun"></div>


      {/* DISTANT EMPIRE */}

      <div className="empire">

        <div className="building one"></div>
        <div className="building two"></div>
        <div className="building three"></div>
        <div className="building four"></div>
        <div className="building five"></div>

      </div>


      {/* ROAD */}

      <div className="road"></div>


      {/* MOUNTAIN */}

      <div className="mountain"></div>


      {/* FOG */}

      <div className="fog"></div>



      {/* TRAVELER */}

      <div className="traveler">

        <div className="shadow"></div>

        <div className="hair"></div>

        <div className="head"></div>

        <div className="hoodie"></div>

        <div className="legs"></div>


      </div>





<style jsx>{`

.summitScene {

height:100vh;

width:100%;

overflow:hidden;

position:relative;

background:

linear-gradient(

#789bd1,

#32465c 55%,

#101010

);

animation:cameraBreath 12s ease-in-out infinite;

}



/* SUN */

.sun {

position:absolute;

height:180px;

width:180px;

border-radius:50%;

background:#ffd978;

top:90px;

right:180px;

filter:blur(2px);

opacity:.85;

}



/* CLOUDS */


.cloud {

position:absolute;

background:white;

opacity:.15;

border-radius:80px;

height:70px;

animation:cloudMove 35s linear infinite;

}



.cloudOne {

width:240px;

top:120px;

left:-250px;

}



.cloudTwo {

width:330px;

top:230px;

left:-400px;

animation-delay:12s;

}



.cloudThree {

width:180px;

top:320px;

left:-300px;

animation-delay:22s;

}



/* BIRDS */


.birds {

position:absolute;

top:180px;

right:100px;

font-size:24px;

color:white;

opacity:.35;

letter-spacing:12px;

animation:birdsMove 20s linear infinite;

}



/* EMPIRE */


.empire {

position:absolute;

bottom:190px;

width:100%;

display:flex;

justify-content:center;

align-items:end;

gap:25px;

opacity:.45;

}



.building {

background:#151515;

width:70px;

}



.one {

height:120px;

}



.two {

height:230px;

}



.three {

height:170px;

}



.four {

height:280px;

}



.five {

height:150px;

}





/* ROAD */


.road {

position:absolute;

bottom:0;

left:50%;

transform:translateX(-50%);

width:360px;

height:100vh;

background:

linear-gradient(

transparent,

rgba(255,255,255,.08),

#252525

);

clip-path:

polygon(

46% 0,

54% 0,

100% 100%,

0 100%

);


box-shadow:

0 0 50px rgba(255,215,100,.18);

}





/* MOUNTAIN */


.mountain {

position:absolute;

bottom:170px;

left:50%;

transform:translateX(-50%);

width:750px;

height:360px;


background:

linear-gradient(

#566875,

#151515

);


clip-path:

polygon(

50% 0,

100% 100%,

0 100%

);

}





/* FOG */


.fog {

position:absolute;

bottom:330px;

left:50%;

transform:translateX(-50%);

width:900px;

height:140px;

background:white;

opacity:.08;

filter:blur(50px);

animation:fogMove 8s infinite;

}





/* TRAVELER */


.traveler {

position:absolute;

bottom:470px;

left:50%;

transform:translateX(-50%);

animation:stillness 4s infinite;

}



.shadow {

position:absolute;

bottom:-15px;

left:-15px;

width:90px;

height:20px;

background:black;

opacity:.3;

border-radius:50%;

filter:blur(8px);

}



.hair {

width:55px;

height:22px;

background:#111;

border-radius:20px;

}



.head {

width:42px;

height:42px;

background:#8b5a3c;

border-radius:50%;

}



.hoodie {

width:70px;

height:90px;

background:#202020;

border-radius:25px;

}



.legs {

height:55px;

width:25px;

border-left:8px solid #111;

border-right:8px solid #111;

margin-left:20px;

}





@keyframes cameraBreath {


0% {

transform:scale(1);

}


50% {

transform:scale(1.03);

}


100% {

transform:scale(1);

}


}



@keyframes cloudMove {


from {

transform:translateX(0);

}


to {

transform:translateX(1700px);

}


}



@keyframes birdsMove {


from {

transform:translateX(0);

}


to {

transform:translateX(-600px);

}


}



@keyframes fogMove {


0%,100% {

opacity:.05;

}


50% {

opacity:.12;

}


}



@keyframes stillness {


0%,100% {

transform:translateX(-50%) translateY(0);

}


50% {

transform:translateX(-50%) translateY(-5px);

}


}



`}</style>


    </main>

  );

}
