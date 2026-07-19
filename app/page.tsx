import RegisterForm from "../components/RegisterForm";
import EventsList from "../components/EventsList";

export default function Home() {
  return (
    <main
      style={{
        background: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <img
          src="/poster.jpeg"
          alt="Baririball Academy Sports Day Poster"
          style={{
            width: "100%",
            borderRadius: "24px",
            marginBottom: "20px",
            boxShadow:
              "0 10px 30px rgba(0,0,0,0.15)",
          }}
        />

        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "24px",
            marginBottom: "20px",
            boxShadow:
              "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          <h1
            style={{
              marginTop: 0,
              marginBottom: "10px",
              fontSize: "42px",
              lineHeight: "1.1",
              color: "#2563eb",
            }}
          >
            Baririball Academy's
            <br />
            3rd Sports Day
          </h1>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.5",
              color: "#334155",
            }}
          >
            Join the competition.
            <br />
            Build your team.
            <br />
            Have fun.
          </p>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div>📅 25 July</div>

            <div>
              📍 Kennington Park
              (by the outdoor gym)
            </div>

            <div>🏆 Individual & Team Events</div>

            <div>👥 Registration Open</div>
          </div>
        </div>

        <EventsList />

        <RegisterForm />
      </div>
    </main>
  );
}
