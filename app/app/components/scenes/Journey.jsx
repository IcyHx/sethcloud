"use client";

export default function Journey() {
  return (
    <main className="scene">

      {/* Sky */}
      <div className="sky"></div>

      {/* Clouds */}
      <div className="cloud cloud1"></div>
      <div className="cloud cloud2"></div>
      <div className="cloud cloud3"></div>

      {/* Sun */}
      <div className="sun"></div>

      {/* Empire */}
      <div className="empire">
        <div className="building b1"></div>
        <div className="building b2"></div>
        <div className="building b3"></div>
        <div className="building b4"></div>
        <div className="building b5"></div>
      </div>

      {/* Road */}
      <div className="road"></div>

      {/* Mountain */}
      <div className="mountain"></div>

      {/* Traveler */}
      <div className="traveler">

        <div className="hair"></div>

        <div className="head"></div>

        <div className="hoodie"></div>

        <div className="legs"></div>

      </div>

      <style jsx>{`

      .scene{
        position:relative;
        overflow:hidden;
        height:100vh;
        background:
        linear-gradient(
        #6f96d8 0%,
        #87b5ff 35%,
        #29446d 70%,
        #121212 100%);
      }

      .sun{
        position:absolute;
        width:180px;
        height:180px;
        border-radius:50%;
        background:#ffd76d;
        top:70px;
        right:130px;
        filter:blur(2px);
      }

      .cloud{
        position:absolute;
        background:white;
        opacity:.18;
        border-radius:60px;
        animation:drift 35s linear infinite;
      }

      .cloud1{
        width:220px;
        height:70px;
        top:70px;
        left:-250px;
      }

      .cloud2{
        width:300px;
        height:90px;
        top:170px;
        left:-400px;
        animation-delay:10s;
      }

      .cloud3{
        width:180px;
        height:60px;
        top:280px;
        left:-180px;
        animation-delay:20s;
      }

      .empire{
        position:absolute;
        bottom:180px;
        width:100%;
        display:flex;
        justify-content:center;
        gap:25px;
        opacity:.45;
      }

      .building{
        background:#1d1d1d;
        width:70px;
      }

      .b1{height:130px;}
      .b2{height:210px;}
      .b3{height:170px;}
      .b4{height:260px;}
      .b5{height:150px;}

      .road{
        position:absolute;
        bottom:0;
        left:50%;
        transform:translateX(-50%);
        width:340px;
        height:100vh;
        background:
        linear-gradient(
        transparent,
        #3a3a3a);
        clip-path:polygon(46% 0%,54% 0%,100% 100%,0% 100%);
      }

      .mountain{
        position:absolute;
        bottom:170px;
        left:50%;
        transform:translateX(-50%);
        width:700px;
        height:340px;
        background:
        linear-gradient(#49606d,#1a1a1a);
        clip-path:polygon(
        50% 0%,
        100% 100%,
        0% 100%);
      }

      .traveler{
        position:absolute;
        left:50%;
        bottom:450px;
        transform:translateX(-50%);
        animation:breathe 4s ease-in-out infinite;
      }

      .hair{
        width:48px;
        height:22px;
        background:#111;
        border-radius:18px;
        margin-left:-4px;
      }

      .head{
        width:40px;
        height:40px;
        background:#8b5a3c;
        border-radius:50%;
      }

      .hoodie{
        width:65px;
        height:70px;
        margin-left:-10px;
        border-radius:20px;
        background:#202020;
      }

      .legs{
        width:18px;
        height:45px;
        border-left:8px solid #111;
        border-right:8px solid #111;
        margin-left:12px;
      }

      @keyframes drift{
        from{
          transform:translateX(0);
        }
        to{
          transform:translateX(1700px);
        }
      }

      @keyframes breathe{
        0%{
          transform:translateX(-50%) translateY(0);
        }
        50%{
          transform:translateX(-50%) translateY(-4px);
        }
        100%{
          transform:translateX(-50%) translateY(0);
        }
      }

      `}</style>

    </main>
  );
}
