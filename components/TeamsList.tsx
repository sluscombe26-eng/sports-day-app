import { supabase } from "../lib/supabase";

export default async function TeamsList() {
  const { data: teams } = await supabase
    .from("teams")
    .select("*")
    .order("team_name");

  const { data: members } = await supabase
    .from("team_members")
    .select("*");

  return (
    <div>
      <h2>Teams</h2>

      {teams?.map((team) => {
        const teamMembers =
          members?.filter(
            (m) => m.team_id === team.id
          ) || [];

        return (
          <div
            key={team.id}
            style={{
              background: "#f8fafc",
              padding: "15px",
              borderRadius: "12px",
              marginBottom: "12px",
            }}
          >
            <h3>{team.team_name}</h3>

            <div>
              {teamMembers.length} members
            </div>

            <ul>
              {teamMembers.map((member) => (
                <li key={member.participant_name}>
                  {member.participant_name}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
