"use client";

import { useState, useEffect } from "react";

export default function Home() {

const [entered,setEntered] = useState(false);


useEffect(()=>{

const timer=setTimeout(()=>{

setEntered(true);

},12000);


return()=>clearTimeout(timer);

},[]);



return(

<main className="world">


{!entered ? (

<section className="cinematic">


<div className="sky">

<div className="cloud one">
☁️
</div>

<div className="cloud two">
☁️
</div>

</div>



<div className="forest">

🌲 🌲 🌲 🌲 🌲 🌲

</div>



<div className="camera">


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


</div>



<div className="road"></div>



<h1>

EVERY PERSON HAS A ROAD

</h1>


<p>

The journey begins.

</p>


</section>



):(



<section className="home">


<h1>

SETH CLOUD

</h1>


<p>

Build. Adapt. Create.

</p>


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


</section>


)}



<style jsx>{`

.world{

min-height:100vh;
background:#050505;
color:white;
overflow:hidden;
font-family:Arial;

}



.cinematic{

height:100vh;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
position:relative;

}



.sky{

position:absolute;
width:100%;
height:100%;

background:
linear-gradient(#07111f,#182818);

}



.cloud{

position:absolute;
font-size:100px;
opacity:.15;

}



.one{

top:80px;
left:10%;

animation:cloudSlow 15s infinite alternate;

}



.two{

top:220px;
right:10%;

animation:cloudSlow 20s infinite alternate;

}



.forest{

position:absolute;
bottom:180px;

width:120%;
font-size:100px;

opacity:.25;

animation:backgroundMove 20s linear infinite;

}



.camera{

z-index:5;

animation:cameraFollow 8s infinite alternate;

}



.traveler{

position:relative;

width:100px;
height:230px;

animation:walk 2s infinite;

}



.shadow{

position:absolute;
bottom:0;

width:70px;
height:15px;

background:rgba(0,0,0,.5);

border-radius:50%;

}



.head{

position:absolute;

top:30px;
left:32px;

width:42px;
height:42px;

background:#8b5a3c;

border-radius:50%;

}



.hair{

position:absolute;

top:20px;
left:28px;

width:52px;
height:22px;

background:#111;

border-radius:20px;

}



.backpack{

position:absolute;

top:85px;
left:5px;

width:25px;
height:70px;

background:#333;

border-radius:12px;

}



.hood{

position:absolute;

top:70px;
left:20px;

width:60px;
height:40px;

background:#222;

border-radius:20px;

}



.body{

position:absolute;

top:95px;
left:20px;

width:65px;
height:80px;

background:#222;

border-radius:18px;

display:flex;

align-items:center;

justify-content:center;

}



.leg{

position:absolute;

top:165px;

width:10px;
height:60px;

background:#111;

}



.left{

left:35px;

animation:step 1s infinite alternate;

}



.right{

left:65px;

animation:step 1s infinite alternate-reverse;

}



.road{

position:absolute;

bottom:0;

width:150%;

height:170px;

background:

repeating-linear-gradient(
90deg,
transparent,
transparent 80px,
#444 80px,
#444 85px
);


animation:roadMove 2s linear infinite;

}



h1{

z-index:10;

font-size:42px;

letter-spacing:8px;

}



p{

z-index:10;

font-size:22px;

opacity:.7;

}



.home{

padding:60px;
text-align:center;

}



button{

padding:18px;

margin:10px;

background:#111;

color:white;

border:1px solid #444;

border-radius:12px;

font-size:18px;

}





@keyframes cameraFollow{

from{

transform:translateY(0) scale(1);

}


to{

transform:translateY(-15px) scale(1.05);

}

}



@keyframes backgroundMove{

from{

transform:translateX(0);

}


to{

transform:translateX(-150px);

}

}



@keyframes roadMove{

from{

transform:translateY(0);

}


to{

transform:translateY(100px);

}

}



@keyframes walk{

0%{

transform:translateX(-15px);

}


50%{

transform:translateX(15px);

}


100%{

transform:translateX(-15px);

}

}



@keyframes step{

from{

transform:rotate(10deg);

}


to{

transform:rotate(-10deg);

}

}



@keyframes cloudSlow{

from{

transform:translateX(-40px);

}


to{

transform:translateX(40px);

}

}



`}</style>


</main>

);

}
