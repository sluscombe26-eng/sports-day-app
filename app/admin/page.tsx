import { supabase } from "../../lib/supabase";

export default async function AdminPage() {
  const { count: participantCount } = await supabase
    .from("participants")
    .select("*", {
      count: "exact",
      head: true,
    });

  const { count: eventCount } = await supabase
    .from("events")
    .select("*", {
      count: "exact",
      head: true,
    });

  const { count: registrationCount } = await supabase
    .from("registration_events")
    .select("*", {
      count: "exact",
      head: true,
    });

  const { count: teamCount } = await supabase
    .from("teams")
    .select("*", {
      count: "exact",
      head: true,
    });

  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1>Sports Day Admin</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(140px,1fr))",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <DashboardCard
          title="Participants"
          value={participantCount || 0}
        />

        <DashboardCard
          title="Events"
          value={eventCount || 0}
        />

        <DashboardCard
          title="Registrations"
          value={registrationCount || 0}
        />

        <DashboardCard
          title="Teams"
          value={teamCount || 0}
        />
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
        padding: "20px",
        borderRadius: "12px",
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
