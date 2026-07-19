import { supabase } from "../lib/supabase";

export default async function EventsList() {
  const { data: events } = await supabase
    .from("events")
    .select("*")
    .order("name");

  return (
    <div
      style={{
        background: "white",
        marginTop: "20px",
        padding: "24px",
        borderRadius: "24px",
        boxShadow:
          "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          color: "#2563eb",
        }}
      >
        Choose Your Events
      </h2>

      <p
        style={{
          color: "#64748b",
          marginBottom: "20px",
        }}
      >
        Take part in individual races or
        join forces in a team challenge.
      </p>

      {events?.map((event) => (
        <div
          key={event.id}
          style={{
            padding: "18px",
            marginBottom: "12px",
            background: "#f8fafc",
            border: "2px solid #e2e8f0",
            borderRadius: "16px",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#2563eb",
              marginBottom: "6px",
            }}
          >
            {event.name}
          </div>

          <div
            style={{
              color: "#475569",
              marginBottom: "6px",
            }}
          >
            {event.event_type === "team"
              ? "👥 Team Event"
              : "🏃 Individual Event"}
          </div>

          <div
            style={{
              color: "#0f766e",
              fontWeight: "bold",
            }}
          >
            {event.capacity} Places Available
          </div>
        </div>
      ))}
    </div>
  );
}
