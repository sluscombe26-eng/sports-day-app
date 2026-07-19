import { supabase } from "../../lib/supabase";

export default async function EventsPage() {
  const { data: events } = await supabase
    .from("events")
    .select("*");

  return (
    <main style={{ padding: "20px" }}>
      <h1>Events</h1>

      {events?.map((event) => (
        <div
          key={event.id}
          style={{
            padding: "12px",
            marginBottom: "12px",
            background: "#f8fafc",
            borderRadius: "12px",
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
    </main>
  );
}
