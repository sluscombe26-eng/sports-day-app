import TeamsList from "../../components/TeamsList";

export default function TeamsPage() {
  return (
    <main
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1>Teams</h1>

      <TeamsList />
    </main>
  );
}
