import { supabase } from "../../../lib/supabase";

export default async function RegistrationsPage() {
  const participants = await supabase
    .from("participants")
    .select("*")
    .order("name");

  const registrations = await supabase
    .from("registration_events")
    .select(`
      *,
      events(name),
      teams(team_name)
    `);

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
        👥 Registration Management
      </h1>

      {participants.data?.map((participant) => {
        const participantRegistrations =
          (registrations.data || []).filter(
            (r) => r.participant_id === participant.id
          );

        return (
          <div
            key={participant.id}
            style={{
              background: "white",
              padding: "24px",
              borderRadius: "24px",
              marginBottom: "20px",
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
              {participant.name}
            </h2>

            <div>
              📧 {participant.email}
            </div>

            <div>
              📱 {participant.mobile_number}
            </div>

            <div style={{ marginTop: "8px" }}>
              🚨 Emergency Contact:{" "}
              {participant.emergency_contact_name}
            </div>

            <div>
              📞 {participant.emergency_contact_number}
            </div>

            <h3
              style={{
                marginTop: "20px",
                color: "#2563eb",
              }}
            >
              Events Entered
            </h3>

            {participantRegistrations.length === 0 ? (
              <p>No event registrations found.</p>
            ) : (
              <ul>
                {participantRegistrations.map(
                  (registration) => (
                    <li key={registration.id}>
                      {registration.events?.name}

                      {registration.teams?.team_name
                        ? ` - ${registration.teams.team_name}`
                        : ""}
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        );
      })}
    </main>
  );
}
