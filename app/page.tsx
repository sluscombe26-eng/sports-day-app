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

          <h2
            style={{
              marginTop: 0,
              color: "#64748b",
            }}
          >
            Hosted by Vanity Von Glow
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#334155",
            }}
          >
            Join us for an afternoon of fun, competition and community at
            Kennington Park.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#334155",
            }}
          >
            A mix of individual and team events are available – sign up now
            using the form below.
          </p>

          <div
            style={{
              background: "#f8fafc",
              border: "2px solid #e2e8f0",
              borderRadius: "16px",
              padding: "20px",
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div>
              🏃 Online registration closes at 11:00am on Saturday
            </div>

            <div>
              🕑 Additional event registrations will be available in person from
              2:00pm
            </div>

            <div>
              👥 Team allocations may change depending on participation numbers
            </div>

            <div>
              🥤 Bring food and drinks to keep you fuelled!
            </div>

            <div>
              🎉 Bring your friends and supporters
            </div>

            <div>
              🏅 Medals available across a range of events
            </div>

            <div>
              🔫 Don't be late – the starting gun goes off at 3:00pm sharp!
            </div>
          </div>
        </div>

        <EventsList />

        <RegisterForm />
      </div>
    </main>
  );
}
