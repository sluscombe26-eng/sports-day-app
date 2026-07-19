type Props = {
  name: string;
};

export default function EventCard({
  name,
}: Props) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "16px",
        padding: "16px",
        marginBottom: "12px",
        boxShadow:
          "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <strong>{name}</strong>
    </div>
  );
}
