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
        padding: "20px",
        borderRadius: "16px",
      }}
    >
      <h2>Events</h2>

      {events?.map((event) => (
        <div
          key={event.id}
          style={{
            padding: "12px",
            marginBottom: "10px",
            background: "#f8fafc",
            borderRadius: "10px",
          }}
        >
          <strong>{event.name}</strong>

          <div>
            Capacity: {event.capacity}
          </div>

          <div>
            Type: {event.event_type}
          </div>
        </div>
      ))}
    </div>
  );
}
