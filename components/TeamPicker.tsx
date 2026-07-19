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
        marginTop: "12px",
      }}
    >
      <h4
        style={{
          color: "#2563eb",
          marginBottom: "12px",
        }}
      >
        Choose a team for {eventName}
      </h4>

      {teams.map((team) => {
        const teamMembers = members.filter(
          (member) => member.team_id === team.id
        );

        return (
          <div
            key={team.id}
            onClick={() => onSelect(team.id)}
            style={{
              background:
                selectedTeam === team.id
                  ? "#dbeafe"
                  : "white",
              border:
                selectedTeam === team.id
                  ? "3px solid #2563eb"
                  : "2px solid #e2e8f0",
              borderRadius: "16px",
              padding: "16px",
              marginBottom: "12px",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#2563eb",
                marginBottom: "8px",
              }}
            >
              👥 {team.team_name}
            </div>

            <div
              style={{
                color: "#475569",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              {teamMembers.length} Members
            </div>

            {teamMembers.length > 0 ? (
              <ul
                style={{
                  margin: 0,
                  paddingLeft: "20px",
                }}
              >
                {teamMembers.map((member) => (
                  <li key={member.participant_name}>
                    {member.participant_name}
                  </li>
                ))}
              </ul>
            ) : (
              <div
                style={{
                  color: "#94a3b8",
                }}
              >
                Be the first to join this team.
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
