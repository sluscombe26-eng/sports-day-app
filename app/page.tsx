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
          }}
        >
          <h1>Bariball Sports Day</h1>

          <p>
            Join the competition.
            Build your team.
            Have fun.
          </p>
        </div>

        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <h2>Event Information</h2>

          <div>📅 25 July 2026</div>
          <div>📍 Location TBC</div>
          <div>👥 Registrations Open</div>
        </div>

        
        <EventsList />

        <RegisterForm />
      </div>
    </main>
  );
}
