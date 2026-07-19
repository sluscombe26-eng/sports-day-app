type Props = {
  name: string;
};

export default function EventCard({ name }: Props) {
  return (
    <div
      style={{
        background: "white",
        padding: "16px",
        borderRadius: "12px",
        marginBottom: "12px",
      }}
    >
      {name}
    </div>
  );
}
