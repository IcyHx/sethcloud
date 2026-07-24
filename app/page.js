export default function Home() {
  return (
    <main style={{
      minHeight:"100vh",
      background:"#050505",
      color:"white",
      padding:"40px 60px",
      fontFamily:"Arial, sans-serif"
    }}>

      <nav style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
      }}>
        <h2 style={{letterSpacing:"4px"}}>
          SETH CLOUD
        </h2>

        <div style={{
          display:"flex",
          gap:"25px",
          opacity:.8
        }}>
          <span>Home</span>
          <span>Philosophy</span>
          <span>Work</span>
          <span>Road Buddy</span>
        </div>
      </nav>


      <section style={{
        marginTop:"100px"
      }}>

        <h1 style={{
          fontSize:"70px",
          lineHeight:"1.1"
        }}>
          FROM ONE ROAD
          <br/>
          TO AN EMPIRE.
        </h1>

        <p style={{
          fontSize:"24px",
          opacity:.8,
          marginTop:"30px"
        }}>
          Atlanta roots.
          <br/>
          Global vision.
        </p>

      </section>


      <section style={{
        marginTop:"90px",
        border:"1px solid #333",
        borderRadius:"25px",
        padding:"50px"
      }}>

        <h2>
          🛣️ ROAD ENGINE
        </h2>

        <p style={{
          opacity:.7
        }}>
          Every destination begins with a first step.
        </p>


        <div style={{
          marginTop:"50px",
          display:"flex",
          flexDirection:"column",
          gap:"45px",
          fontSize:"25px"
        }}>


          <div>
            🏠 STARTING POINT
            <br/>
            <small>
              Where the vision begins.
            </small>
          </div>


          <div>
            🚶🏾 BUILDER
            <br/>
            <small>
              Learn. Create. Improve.
            </small>
          </div>


          <div>
            🏙️ ATLANTA
            <br/>
            <small>
              Community. Opportunity. Foundation.
            </small>
          </div>


          <div>
            🌆 GLOBAL CITIES
            <br/>
            <small>
              Expand. Connect. Influence.
            </small>
          </div>


          <div>
            🏢 FOUNDER
            <br/>
            <small>
              Build systems that last.
            </small>
          </div>


          <div>
            🌎 LEGACY
            <br/>
            <small>
              Something bigger than yourself.
            </small>
          </div>


        </div>

      </section>


      <section style={{
        marginTop:"60px",
        padding:"30px"
      }}>
        🤖 <strong>Road Buddy</strong>
        <br/>
        Helping you navigate the next move.
      </section>


    </main>
  );
}
