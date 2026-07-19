type Team = {
  id: string;
  team_name: string;
};

type Props = {
  eventName: string;
  teams: Team[];
  selectedTeam: string;
  onSelect: (teamId: string) => void;
};

export default function TeamPicker({
  eventName,
  teams,
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

      {teams.map((team) => (
        <label
          key={team.id}
          style={{
            display: "block",
            marginBottom: "8px",
          }}
        >
          <input
            type="radio"
            name={eventName}
            checked={selectedTeam === team.id}
            onChange={() => onSelect(team.id)}
          />

          {" "}
          {team.team_name}
        </label>
      ))}
    </div>
  );
}
