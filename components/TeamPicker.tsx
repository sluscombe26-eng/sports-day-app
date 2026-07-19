type Team = {
  id: string;
  team_name: string;
};

type Props = {
  teams: Team[];
  selectedTeam: string;
  setSelectedTeam: (id: string) => void;
};

export default function TeamPicker({
  teams,
  selectedTeam,
  setSelectedTeam,
}: Props) {
  return (
    <div>
      <h3>Choose Team</h3>

      {teams.map((team) => (
        <label
          key={team.id}
          style={{
            display: "block",
            marginBottom: "10px",
          }}
        >
          <input
            type="radio"
            checked={selectedTeam === team.id}
            onChange={() =>
              setSelectedTeam(team.id)
            }
          />

          {" "}
          {team.team_name}
        </label>
      ))}
    </div>
  );
}
