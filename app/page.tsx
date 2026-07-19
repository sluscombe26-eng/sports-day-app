import RegisterForm from "../components/RegisterForm";

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Sports Day 2026</h1>

      <p>
        Registration is now open.
      </p>

      <RegisterForm />
    </main>
  );
}
