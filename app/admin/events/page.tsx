import { supabase } from "../../../lib/supabase";

export default async function EventsPage() {
  const events = await supabase
    .from("events")
    .select("*")
    .order("name");

  const registrations = await supabase
    .from("registration_events")
    .select(`
      *,
      participants(name)
    `);

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "#2563eb",
          fontSize: "42px",
          marginBottom: "20px",
        }}
      >
        🏆 Event Statistics
      </h1>

      {events.data?.map((event) => {
        const eventRegistrations =
          (registrations.data || []).filter(
            (r) => r.event_id === event.id
          );

        const count = eventRegistrations.length;

        return (
          <div
            key={event.id}
            style={{
              background: "white",
              padding: "24px",
              borderRadius: "24px",
              marginBottom: "20px",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                color: "#2563eb",
              }}
            >
              {event.name}
            </h2>

            <div>
              <strong>Type:</strong>{" "}
              {event.event_type}
            </div>

            <div>
              <strong>Capacity:</strong>{" "}
              {event.capacity}
            </div>

            <div>
              <strong>Registrations:</strong>{" "}
              {count}
            </div>

            <div>
              <strong>Remaining:</strong>{" "}
              {event.capacity - count}
            </div>

            <h3
              style={{
                marginTop: "20px",
                color: "#2563eb",
              }}
            >
              Participants
            </h3>

            {count === 0 ? (
              <p>No registrations yet.</p>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {eventRegistrations.map(
                  (registration) => (
                    <div
                      key={registration.id}
                      style={{
                        background: "#f8fafc",
                        padding: "10px",
                        borderRadius: "10px",
                        border:
                          "1px solid #e2e8f0",
                      }}
                    >
                      👤{" "}
                      {registration.participants?.name}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        );
      })}
    </main>
  );
}
