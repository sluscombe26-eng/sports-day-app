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
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1>Sports Day Admin</h1>

      <div>Participants: {participants.data?.length || 0}</div>
      <div>Events: {events.data?.length || 0}</div>
      <div>Registrations: {registrations.data?.length || 0}</div>
      <div>Teams: {teams.data?.length || 0}</div>
    </main>
  );
}
