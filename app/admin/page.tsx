import { supabase } from "../../lib/supabase";

export default async function AdminPage() {
  const participants = await supabase
    .from("participants")
    .select("*");

  const events = await supabase
    .from("events")
    .select("*");

  const registrations = await supabase
    .from("registration_events")
    .select("*");

  const teams = await supabase
    .from("teams")
    .select("*");

  const participantCount =
    participants.data?.length || 0;

  const eventCount =
    events.data?.length || 0;

  const registrationCount =
    registrations.data?.length || 0;

  const teamCount =
    teams.data?.length || 0;

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1>Sports Day Admin</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(180px,1fr))",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <DashboardCard
          title="Participants"
          value={participantCount}
        />

        <DashboardCard
          title="Events"
          value={eventCount}
        />

        <DashboardCard
          title="Registrations"
          value={registrationCount}
        />

        <DashboardCard
          title="Teams"
          value={teamCount}
        />
      </div>

      <div
        style={{
          marginTop: "30px",
          background: "white",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <h2>Recent Participants</h2>

        <ul>
          {participants.data?.slice(0, 10).map((p) => (
            <li key={p.id}>
              {p.name}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

function DashboardCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "20px",
        boxShadow:
          "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <div>{title}</div>

      <div
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginTop: "10px",
        }}
      >
        {value}
      </div>
    </div>
  );
}
