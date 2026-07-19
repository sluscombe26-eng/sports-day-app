import { supabase } from "../../../lib/supabase";

export default async function EventsPage() {
  const events = await supabase
    .from("events")
    .select("*")
    .order("name");

  const registrations = await supabase
    .from("registration_events")
    .select("*");

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1>Event Statistics</h1>

      {events.data?.map((event) => {
        const count =
          registrations.data?.filter(
            (r) => r.event_id === event.id
          ).length || 0;

        return (
          <div
            key={event.id}
            style={{
              background: "white",
              padding: "16px",
              borderRadius: "12px",
              marginBottom: "12px",
              boxShadow:
                "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{event.name}</h3>

            <div>
              Type: {event.event_type}
            </div>

            <div>
              Capacity: {event.capacity}
            </div>

            <div>
              Registrations: {count}
            </div>

            <div>
              Remaining: {event.capacity - count}
            </div>
          </div>
        );
      })}
    </main>
  );
}
``
