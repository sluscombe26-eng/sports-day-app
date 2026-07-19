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
        /poster.jpeg="Baririball Academy Sports Day Poster"
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
            textAlign: "left",
          }}
        >
          <h1
            style={{
              marginTop: 0,
              marginBottom: "10px",
              fontSize: "48px",
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
              fontSize: "22px",
              lineHeight: "1.5",
              color: "#334155",
              marginBottom: "25px",
            }}
          >
            Compete.
            <br />
            Team Up.
            <br />
            Have Fun.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              fontSize: "18px",
            }}
          >
            <div>📅 25 July 2026</div>

            <div>
              🕑 Registration from 2:00pm
            </div>

            <div>
              📍 Kennington Park
              (by the outdoor gym)
            </div>

            <div>
              🏆 Individual & Team Events
            </div>

            <div>
              👥 Registration Open
            </div>
          </div>
        </div>

        <EventsList />

        <RegisterForm />
      </div>
    </main>
  );
}
