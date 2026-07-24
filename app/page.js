export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#050505",
      color: "white",
      padding: "30px 60px",
      fontFamily: "Arial, sans-serif"
    }}>

      {/* Navigation */}
      <nav style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
      }}>
        <h2 style={{
          letterSpacing:"4px"
        }}>
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


      {/* Hero */}
      <section style={{
        marginTop:"100px",
        maxWidth:"850px"
      }}>

        <h1 style={{
          fontSize:"70px",
          lineHeight:"1.1",
          letterSpacing:"3px"
        }}>
          BUILD YOUR ROAD.
          <br/>
          CREATE YOUR EMPIRE.
        </h1>

        <p style={{
          fontSize:"24px",
          marginTop:"30px",
          opacity:.8
        }}>
          Marketing. Systems. Momentum.
          <br/>
          Every vision starts with one step forward.
        </p>

      </section>


      {/* Road Engine */}
      <section style={{
        marginTop:"100px",
        padding:"45px",
        border:"1px solid #333",
        borderRadius:"25px"
      }}>

        <h2>
          🛣️ THE ROAD ENGINE
        </h2>

        <p style={{
          opacity:.7
        }}>
          The journey from vision to empire.
        </p>


        <div style={{
          marginTop:"50px",
          display:"flex",
          flexDirection:"column",
          gap:"35px",
          fontSize:"24px"
        }}>

          <div>
            🚶🏾 Modern Builder
            <br/>
            <small>Start. Learn. Create.</small>
          </div>


          <div>
            ✓ BUILD
            <br/>
            <small>Develop skills and systems.</small>
          </div>


          <div>
            ✓ MARKET
            <br/>
            <small>Create attention and influence.</small>
          </div>


          <div>
            ✓ LEAD
            <br/>
            <small>Build people and businesses.</small>
          </div>


          <div>
            🏢 FOUNDER
            <br/>
            <small>Create something bigger than yourself.</small>
          </div>

        </div>

      </section>


      {/* Road Buddy */}
      <section style={{
        marginTop:"60px",
        padding:"30px"
      }}>
        🤖 <strong>Road Buddy</strong>
        <br/>
        Your guide for the next move.
      </section>


    </main>
  );
}
