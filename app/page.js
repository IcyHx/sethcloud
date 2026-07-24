export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#050505",
      color: "white",
      padding: "60px",
      fontFamily: "Arial, sans-serif"
    }}>

      <h1 style={{
        fontSize: "60px",
        letterSpacing: "5px"
      }}>
        SETH CLOUD
      </h1>

      <h2 style={{
        fontSize: "32px",
        marginTop: "20px"
      }}>
        Marketing. Systems. Momentum.
      </h2>

      <p style={{
        fontSize: "22px",
        marginTop: "30px",
        maxWidth: "600px",
        lineHeight: "1.6"
      }}>
        Every empire starts with one decision:
        keep moving forward.
      </p>

      <section style={{
        marginTop: "70px",
        fontSize: "28px"
      }}>
        🛣️ Road Engine
        <br />
        <br />
        🚶🏾 → ✓ Learn → ✓ Build → ✓ Market → ✓ Lead → 🏢
      </section>

      <button style={{
        marginTop: "60px",
        padding: "15px 30px",
        borderRadius: "30px",
        fontSize: "18px",
        cursor: "pointer"
      }}>
        Start The Journey
      </button>

    </main>
  );
}
