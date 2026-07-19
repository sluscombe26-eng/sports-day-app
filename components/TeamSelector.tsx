type Props = {
  teamName: string;
};

export default function TeamSelector({
  teamName,
}: Props) {
  return (
    <div
      style={{
        padding: "12px",
        marginBottom: "8px",
        background: "#f8fafc",
        borderRadius: "10px",
      }}
    >
      {teamName}
    </div>
  );
}
