import { supabase } from "../../../lib/supabase";

export const dynamic = "force-dynamic";

export default async function CheckInPage() {
  const participants = await supabase
    .from("participants")
    .select("*")
    .order("name");

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
        }}
      >
        ✅ Event Day Check-In
      </h1>

      <p>
        Use this page on Sports Day to
        find participants quickly.
      </p>

      {participants.data?.map(
        (participant) => (
          <div
            key={participant.id}
            style={{
              background: "white",
              padding: "16px",
              borderRadius: "16px",
              marginBottom: "12px",
              boxShadow:
                "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <h3>{participant.name}</h3>

            <div>
              📧 {participant.email}
            </div>

            <div>
              📱 {participant.mobile_number}
            </div>
          </div>
        )
      )}
    </main>
  );
}
