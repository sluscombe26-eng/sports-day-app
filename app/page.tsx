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
          maxWidth: "700px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg,#2563eb,#1d4ed8)",
            color: "white",
            borderRadius: "24px",
            padding: "30px",
            marginBottom: "20px",
            boxShadow:
              "0 10px 25px rgba(37,99,235,0.25)",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "42px",
              lineHeight: "1.1",
            }}
          >
            Baririball Academy's
            <br />
            3rd Sports Day
          </h1>

          <p
            style={{
              marginTop: "15px",
              fontSize: "20px",
              lineHeight: "1.5",
            }}
          >
            Join the competition.
            <br />
            Build your team.
            <br />
            Have fun.
          </p>
        </div>

        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "20px",
            marginBottom: "20px",
            boxShadow:
              "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              marginTop: 0,
            }}
          >
            Event Information
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div>📅 Sports Day Date</div>
            <div>📍 Venue To Be Confirmed</div>
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
