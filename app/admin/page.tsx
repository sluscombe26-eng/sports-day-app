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

  return (
    <main style={{ padding: "20px" }}>
      <h1>Sports Day Admin</h1>

      <div>
        <p>
          Participants:{" "}
          {participants.data?.length || 0}
        </p>

        <p>
          Events: {events.data?.length || 0}
        </p>

        <p>
          Registrations:{" "}
          {registrations.data?.length || 0}
        </p>

        <p>
          Teams: {teams.data?.length || 0}
        </p>
      </div>
    </main>
  );
}
