"use client";

export default function Journey() {
  return (
    <main className="journey">

      <div className="sky"></div>

      <div className="stars"></div>


      <div className="road">

        <div className="roadLine"></div>

      </div>


      <div className="walker">
        🚶🏾
      </div>


      <div className="milestones">

        <div className="step stepOne">
          <span>1</span>
          <p>Vision</p>
        </div>


        <div className="step stepTwo">
          <span>2</span>
          <p>Discipline</p>
        </div>


        <div className="step stepThree">
          <span>3</span>
          <p>Creation</p>
        </div>


      </div>


      <section className="message">

        <h1>
          THE JOURNEY BEGINS
        </h1>

        <p>
          Every empire starts with one step.
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
          radial-gradient(circle at top, #222, #050505 70%);

        }



        .stars {

          position:absolute;
          inset:0;
          opacity:.5;
          background-image:
          radial-gradient(white 1px, transparent 1px);

          background-size:80px 80px;

        }



        .road {

          position:absolute;
          bottom:-120px;
          width:130%;
          height:320px;
          background:#111;
          transform:perspective(600px) rotateX(55deg);

        }



        .roadLine {

          width:10px;
          height:100%;
          background:#555;
          margin:auto;
          opacity:.7;

        }



        .walker {

          position:absolute;
          bottom:170px;
          font-size:70px;

          animation:

          walk 5s infinite alternate ease-in-out;

        }



        .milestones {

          position:absolute;
          bottom:260px;
          width:80%;
          display:flex;
          justify-content:space-between;

        }



        .step {

          text-align:center;
          opacity:.8;

        }



        .step span {

          display:flex;
          justify-content:center;
          align-items:center;

          width:45px;
          height:45px;

          border-radius:50%;

          background:#111;
          border:1px solid #555;

          margin:auto;

        }



        .step p {

          margin-top:10px;
          font-size:16px;

        }



        .message {

          position:relative;
          z-index:3;
          text-align:center;

        }



        h1 {

          font-size:clamp(35px,6vw,70px);
          letter-spacing:12px;
          margin:0;

        }



        .message p {

          font-size:24px;
          opacity:.75;

        }



        @keyframes walk {

          from {

            transform:translateX(-160px);

          }


          to {

            transform:translateX(160px);

          }

        }



      `}</style>


    </main>
  );
}
