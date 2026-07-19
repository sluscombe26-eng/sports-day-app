import EventsList from "../components/EventsList";
import RegisterForm from "../components/RegisterForm";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        background: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          background: "#2563eb",
          color: "white",
          padding: "40px 20px",
          borderRadius: "20px",
        }}
      >
        <h1>Sports Day 2026</h1>

        <p>
          Registration is now open
        </p>
      </div>

      <div
        style={{
          background: "white",
          marginTop: "20px",
          padding: "20px",
          borderRadius: "16px",
        }}
      >
<EventsList />
      </div>

      <RegisterForm />
    </main>
  );
}

