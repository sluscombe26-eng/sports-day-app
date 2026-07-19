import { supabase } from "../../lib/supabase";

export default async function EventsPage() {
  const { data: events } = await supabase
    .from("events")
    .select("*")
    .order("name");

  return (
    <main
      style={{
        padding: "20px",
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      <h1>Events</h1>

      {events?.map((event) => (
        <div
          key={event.id}
          style={{
            background: "#f8fafc",
            padding: "15px",
            borderRadius: "12px",
            marginBottom: "10px",
          }}
        >
          <h3>{event.name}</h3>

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
