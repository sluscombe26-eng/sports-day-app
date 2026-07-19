type Team = {
  id: string;
  team_name: string;
};

type Member = {
  team_id: string;
  participant_name: string;
};

type Props = {
  eventName: string;
  teams: Team[];
  members: Member[];
  selectedTeam: string;
  onSelect: (teamId: string) => void;
};

export default function TeamPicker({
  eventName,
  teams,
  members,
  selectedTeam,
  onSelect,
}: Props) {
  return (
    <div
      style={{
        background: "#f8fafc",
        padding: "12px",
        borderRadius: "10px",
        marginBottom: "12px",
      }}
    >
      <h4>Choose Team for {eventName}</h4>

      {teams.map((team) => {
        const teamMembers = members.filter(
          (m) => m.team_id === team.id
        );

        return (
          <div
            key={team.id}
            style={{
              border: "1px solid #ddd",
              marginBottom: "12px",
              padding: "12px",
              borderRadius: "8px",
              background: "white",
            }}
          >
            <label>
              <input
                type="radio"
                name={eventName}
                checked={selectedTeam === team.id}
                onChange={() => onSelect(team.id)}
              />

              {" "}
              <strong>{team.team_name}</strong>
            </label>

            <div style={{ marginTop: "8px" }}>
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
