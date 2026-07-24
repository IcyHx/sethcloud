"use client";

import { useEffect, useState } from "react";


export default function Journey() {


  const [scene, setScene] = useState(0);



  useEffect(() => {

    const timer = setInterval(() => {

      setScene((current) => {

        if (current === 4) {
          return 0;
        }

        return current + 1;

      });

    }, 7000);


    return () => clearInterval(timer);


  }, []);



  const scenes = [

    {

      name:"Origin",

      sky:"#182438",

      ground:"#171717",

      environment:"🌅"

    },


    {

      name:"Wilderness",

      sky:"#10251b",

      ground:"#091209",

      environment:"🌲"

    },


    {

      name:"Storm",

      sky:"#20252d",

      ground:"#080808",

      environment:"🌧️"

    },


    {

      name:"Crossing",

      sky:"#12344a",

      ground:"#06131c",

      environment:"🌊"

    },


    {

      name:"Expansion",

      sky:"#171717",

      ground:"#050505",

      environment:"🏙️"

    }


  ];



  const current = scenes[scene];



  return (


    <section

      style={{

        height:"100vh",

        overflow:"hidden",

        position:"relative",

        background:
        `linear-gradient(${current.sky},${current.ground})`,

        transition:"background 3s ease"

      }}

    >



      {/* Environment */}

      <div

      style={{

        position:"absolute",

        top:"70px",

        width:"100%",

        textAlign:"center",

        fontSize:"120px",

        opacity:.35,

        transition:"3s"

      }}

      >

        {current.environment}

      </div>





      {/* Distant Landscape */}

      <div

      style={{

        position:"absolute",

        bottom:"190px",

        width:"140%",

        left:"-20%",

        height:"150px",

        background:

        "linear-gradient(transparent,#000)",

        animation:"landscape 12s infinite alternate"

      }}

      />





      {/* Traveler */}

      <div className="traveler">


        <div className="head"></div>


        <div className="hair"></div>


        <div className="hoodie">

          ☁️

        </div>


        <div className="legs"></div>


      </div>





      {/* Road */}

      <div className="road"></div>





      <div className="sceneName">

        {current.name}

      </div>





<style jsx>{`



.traveler {


position:absolute;

bottom:170px;

left:50%;

transform:translateX(-50%);

width:90px;

height:180px;

animation:walk 2s infinite;


}




.head {


position:absolute;

top:10px;

left:30px;

width:35px;

height:35px;

border-radius:50%;

background:#8b5a3c;


}



.hair {


position:absolute;

top:2px;

left:25px;

width:45px;

height:18px;

background:#111;

border-radius:20px;


}



.hoodie {


position:absolute;

top:55px;

left:15px;

width:60px;

height:70px;

background:#202020;

border-radius:20px;

display:flex;

justify-content:center;

align-items:center;


}



.legs {


position:absolute;

top:125px;

left:30px;

width:30px;

height:55px;

border-left:8px solid #111;

border-right:8px solid #111;


}




.road {


position:absolute;

bottom:0;

width:130%;

left:-15%;

height:170px;


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





.sceneName {


position:absolute;

bottom:35px;

width:100%;

text-align:center;

color:white;

font-size:20px;

opacity:.6;


}




@keyframes walk {


0%{

transform:translateX(-55%) translateY(0);

}


50%{

transform:translateX(-45%) translateY(-8px);

}


100%{

transform:translateX(-55%) translateY(0);

}


}




@keyframes roadMove {


from{

transform:translateY(0);

}


to{

transform:translateY(100px);

}


}




@keyframes landscape {


from{

transform:translateX(0);

}


to{

transform:translateX(-80px);

}


}



`}</style>



    </section>


  );

}
