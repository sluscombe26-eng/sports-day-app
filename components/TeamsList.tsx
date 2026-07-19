import { supabase } from "../lib/supabase";

export default async function TeamsList() {
  const { data: teams } = await supabase
    .from("teams")
    .select("*")
    .order("team_name");

  return (
    <div>
      <h2>Teams</h2>

      {teams?.map((team) => (
        <div
          key={team.id}
          style={{
            background: "#f8fafc",
            padding: "12px",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        >
          {team.team_name}
        </div>
      ))}
    </div>
  );
}
