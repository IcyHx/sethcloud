"use client";

export default function Journey() {
  return (
    <main className="journey">

      <div className="road"></div>

      <div className="walker">
        🚶🏾
      </div>

      <div className="message">
        <h1>
          THE JOURNEY BEGINS
        </h1>

        <p>
          One step. One decision. One empire.
        </p>
      </div>


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


        .road {

          position:absolute;
          bottom:-100px;
          width:120%;
          height:300px;
          background:#111;
          transform:rotateX(60deg);

        }


        .walker {

          position:absolute;
          bottom:150px;
          font-size:70px;
          animation:move 5s infinite alternate;

        }


        .message {

          position:relative;
          text-align:center;
          z-index:2;

        }


        h1 {

          font-size:60px;
          letter-spacing:10px;

        }


        p {

          font-size:24px;
          opacity:.7;

        }


        @keyframes move {

          from {
            transform:translateX(-150px);
          }


          to {
            transform:translateX(150px);
          }

        }

      `}</style>

    </main>
  );
}
