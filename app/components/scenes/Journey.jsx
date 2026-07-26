"use client";

export default function Journey() {

  return (

    <main className="journey">


      <div className="sky"></div>


      <div className="road">

        <div className="roadMark"></div>

      </div>



      <div className="traveler">

        <div className="person">
          🚶🏾
        </div>

        <div className="shadow"></div>

      </div>




      <div className="checkpoints">


        <div className="checkpoint active">

          <div className="icon">
            🧠
          </div>

          <p>
            Vision
          </p>

        </div>



        <div className="checkpoint">

          <div className="icon">
            🚗
          </div>

          <p>
            Vehicle
          </p>

        </div>



        <div className="checkpoint">

          <div className="icon">
            🏠
          </div>

          <p>
            Foundation
          </p>

        </div>



        <div className="checkpoint">

          <div className="icon">
            🏢
          </div>

          <p>
            Empire
          </p>

        </div>


      </div>





      <section className="message">


        <h1>
          THE ROAD BEGINS
        </h1>


        <p>
          Vision creates direction. Discipline creates destiny.
        </p>


      </section>






      <style jsx>{`

        .journey {

          min-height:100vh;
          background:#050505;
          color:white;
          position:relative;
          overflow:hidden;
          display:flex;
          justify-content:center;
          align-items:center;

        }



        .sky {

          position:absolute;
          inset:0;

          background:
          radial-gradient(circle at top,#333,#050505 65%);

        }



        .road {

          position:absolute;

          bottom:-150px;

          width:140%;
          height:380px;

          background:#111;

          transform:
          perspective(700px)
          rotateX(60deg);

          animation:roadMove 8s infinite linear;

        }



        .roadMark {

          height:100%;
          width:8px;
          background:#555;
          margin:auto;

        }



        .traveler {

          position:absolute;

          bottom:190px;

          z-index:2;

        }



        .person {

          font-size:75px;

          animation:

          walk 3s infinite alternate ease-in-out;

        }



        .shadow {

          width:60px;
          height:15px;
          background:#000;

          border-radius:50%;

          margin:auto;

          opacity:.6;

        }



        .checkpoints {

          position:absolute;

          top:80px;

          width:85%;

          display:flex;

          justify-content:space-between;

          z-index:2;

        }



        .checkpoint {

          text-align:center;

          opacity:.45;

        }



        .checkpoint.active {

          opacity:1;

        }



        .icon {

          font-size:35px;

        }



        .checkpoint p {

          margin-top:8px;

        }




        .message {

          position:relative;

          z-index:3;

          text-align:center;

          padding:20px;

        }



        h1 {

          font-size:

          clamp(40px,7vw,80px);

          letter-spacing:15px;

          margin:0;

        }



        .message p {

          font-size:24px;

          opacity:.75;

        }




        @keyframes walk {


          from {

            transform:translateX(-120px);

          }


          to {

            transform:translateX(120px);

          }


        }




        @keyframes roadMove {


          from {

            background-position:0;

          }


          to {

            background-position:0 200px;

          }


        }



      `}</style>


    </main>

  );

}
