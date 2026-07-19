import { supabase } from "../../../lib/supabase";

export default async function RegistrationsPage() {
  const participants = await supabase
    .from("participants")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

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
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1>Registrations</h1>

      {participants.data?.map((participant) => (
        <div
          key={participant.id}
          style={{
            background: "white",
            padding: "16px",
            borderRadius: "12px",
            marginBottom: "12px",
            boxShadow:
              "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3>{participant.name}</h3>

          <div>{participant.email}</div>

          <div>{participant.mobile_number}</div>

          <div>
            Emergency Contact:
            {" "}
            {participant.emergency_contact_name}
          </div>

          <h4 style={{ marginTop: "12px" }}>
            Events
          </h4>

          <ul>
            {(registrations.data || [])
              .filter(
                (registration) =>
                  registration.participant_id ===
                  participant.id
              )
              .
