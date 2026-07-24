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
        <h2 style={{
          letterSpacing:"4px"
        }}>
          SETH CLOUD
        </h2>

        <div style={{
          opacity:.8
        }}>
          Home &nbsp; Philosophy &nbsp; Work &nbsp; Road Buddy
        </div>
      </nav>


      {/* Opening Scene */}

      <section style={{
        marginTop:"100px",
        textAlign:"center"
      }}>

        <h1 style={{
          fontSize:"70px",
          lineHeight:"1.1"
        }}>
          THE FIRST ROAD
        </h1>

        <p style={{
          fontSize:"24px",
          opacity:.8
        }}>
          Before the empire,
          <br/>
          there was a path.
        </p>


        <div style={{
          marginTop:"70px",
          padding:"60px",
          border:"1px solid #333",
          borderRadius:"30px"
        }}>

          🌿

          <h2>
            UNKNOWN TERRAIN
          </h2>


          <p>
            The road begins where comfort ends.
          </p>


          <div style={{
            fontSize:"50px",
            margin:"40px"
          }}>
            🚶🏾‍♂️
          </div>


          <h3>
            CLOUD
          </h3>

          <p>
            Ⓢ
            <br/>
            The symbol nobody noticed yet.
          </p>


        </div>

      </section>



      {/* Swamp Challenge */}

      <section style={{
        marginTop:"80px",
        padding:"50px",
        border:"1px solid #333",
        borderRadius:"30px"
      }}>

        <h2>
          🐊 THE SWAMP CROSSING
        </h2>


        <p>
          Every path has obstacles.
          The question is how you adapt.
        </p>


        <div style={{
          display:"flex",
          justifyContent:"center",
          gap:"25px",
          marginTop:"40px"
        }}>

          <button>
            🌉 Build The Bridge
          </button>


          <button>
            🛶 Create A Route
          </button>


          <button>
            🚙 Find The Vehicle
          </button>


        </div>

      </section>



      <section style={{
        marginTop:"80px",
        textAlign:"center"
      }}>

        🏙️ Atlanta

        <br/><br/>

        🌎 Global Vision

        <br/><br/>

        🏢 SethCloud

      </section>



      <section style={{
        marginTop:"60px"
      }}>
        🤖 <strong>Road Buddy</strong>
        <br/>
        Your guide through the journey.
      </section>


    </main>
  );
}
