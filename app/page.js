export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #050505, #111)",
      color: "white",
      padding: "30px 60px",
      fontFamily: "Arial, sans-serif"
    }}>

      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h2 style={{letterSpacing:"3px"}}>
          SETH CLOUD
        </h2>

        <div style={{
          display:"flex",
          gap:"30px",
          opacity:.8
        }}>
          <span>Home</span>
          <span>Philosophy</span>
          <span>Work</span>
          <span>Road Buddy</span>
          <span>Contact</span>
        </div>
      </nav>


      <section style={{
        marginTop:"120px",
        maxWidth:"800px"
      }}>

        <h1 style={{
          fontSize:"72px",
          lineHeight:"1.1",
          letterSpacing:"4px"
        }}>
          MARKETING.
          <br/>
          SYSTEMS.
          <br/>
          MOMENTUM.
        </h1>


        <p style={{
          fontSize:"24px",
          marginTop:"35px",
          lineHeight:"1.6",
          opacity:.85
        }}>
          Every empire starts with one decision:
          keep moving forward.
        </p>


        <button style={{
          marginTop:"40px",
          padding:"18px 40px",
          borderRadius:"40px",
          border:"none",
          fontSize:"18px"
        }}>
          Begin The Journey
        </button>

      </section>


      <section style={{
        marginTop:"100px",
        padding:"40px",
        border:"1px solid #333",
        borderRadius:"20px"
      }}>

        <h2>
          🛣️ Road Engine
        </h2>

        <p style={{
          fontSize:"22px"
        }}>
          🚶🏾 → ✓ Learn → ✓ Build → ✓ Market → ✓ Lead → 🏢
        </p>

      </section>


      <section style={{
        marginTop:"50px"
      }}>
        🤖 <strong>Road Buddy</strong>
        <br/>
        Your AI guide for the next move.
      </section>

    </main>
  );
}
