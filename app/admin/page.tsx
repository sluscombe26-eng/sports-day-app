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
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "#2563eb",
          fontSize: "42px",
          marginBottom: "20px",
        }}
      >
        🛠️ Sports Day Admin
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "16px",
        }}
      >
        <StatCard
          title="Participants"
          value={participantCount}
          colour="#2563eb"
        />

        <StatCard
          title="Events"
          value={eventCount}
          colour="#22c55e"
        />

        <StatCard
          title="Registrations"
          value={registrationCount}
          colour="#f59e0b"
        />

        <StatCard
          title="Teams"
          value={teamCount}
          colour="#8b5cf6"
        />
      </div>

      <div
        style={{
          marginTop: "30px",
          background: "white",
          borderRadius: "24px",
          padding: "24px",
          boxShadow:
            "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <h2
          style={{
            marginTop: 0,
            color: "#2563eb",
          }}
        >
          Quick Links
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          /admin/registrations
            👥 Registration Management
          </a>

          /admin/events
            🏆 Event Statistics
          </a>

          /export">
            📊 Export Registrations
          </a>
        </div>
      </div>
    </main>
  );
}

function StatCard({
  title,
  value,
  colour,
}: {
  title: string;
  value: number;
  colour: string;
}) {
  return (
    <div
      style={{
        background: "white",
        padding: "24px",
        borderRadius: "24px",
        boxShadow:
          "0 4px 12px rgba(0,0,0,0.08)",
        borderTop: `6px solid ${colour}`,
      }}
    >
      <div
        style={{
          color: "#64748b",
          marginBottom: "10px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "42px",
          fontWeight: "bold",
          color: colour,
        }}
      >
        {value}
      </div>
    </div>
  );
}
