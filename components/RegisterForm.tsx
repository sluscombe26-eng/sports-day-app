"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import TeamPicker from "./TeamPicker";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const [message, setMessage] = useState("");

  const [events, setEvents] = useState<any[]>([]);
  const [teams, setTeams] = useState<any[]>([]);
  const [teamMembers, setTeamMembers] = useState<any[]>([]);

  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
  const [selectedTeams, setSelectedTeams] = useState<
    Record<string, string>
  >({});

  useEffect(() => {
    async function loadData() {
      const { data: eventsData } = await supabase
        .from("events")
        .select("*")
        .order("name");

      if (eventsData) {
        setEvents(eventsData);
      }

      const { data: teamsData } = await supabase
        .from("teams")
        .select("*")
        .order("team_name");

      if (teamsData) {
        setTeams(teamsData);
      }
    }

    loadData(const { data: membersData } = await supabase
  .from("team_members")
  .select("*");

if (membersData) {
  setTeamMembers(membersData);
});
  }, []);

  async function register() {
    const participant = await supabase
      .from("participants")
      .insert([
        {
          name,
          email,
          mobile_number: mobile,
          emergency_contact_name: contactName,
          emergency_contact_number: contactNumber,
        },
      ])
      .select()
      .single();

    if (participant.error) {
      setMessage(participant.error.message);
      return;
    }

    for (const eventId of selectedEvents) {
      await supabase
        .from("registration_events")
        .insert([
          {
            participant_id: participant.data.id,
            event_id: eventId,
            team_id: selectedTeams[eventId] || null,
          },
        ]);
    }

    setMessage("✅ Registration submitted");
  }

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "16px",
        marginTop: "20px",
      }}
    >
      <h2>Register Now</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <input
          placeholder="Emergency Contact Name"
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
        />

        <input
          placeholder="Emergency Contact Number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />

        <h3>Select Events</h3>

        {events.map((event) => (
          <div key={event.id}>
            <label>
              <input
                type="checkbox"
                checked={selectedEvents.includes(event.id)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedEvents([
                      ...selectedEvents,
                      event.id,
                    ]);
                  } else {
                    setSelectedEvents(
                      selectedEvents.filter(
                        (id) => id !== event.id
                      )
                    );
                  }
                }}
              />

              {" "}
              {event.name}
              {" "}
              ({event.event_type})
            </label>

            {selectedEvents.includes(event.id) &&
              event.event_type === "team" && (
               <TeamPicker
  eventName={event.name}
  teams={teams}
  members={teamMembers}
  selectedTeam={
    selectedTeams[event.id] || ""
  }
  onSelect={(teamId) => {
    setSelectedTeams({
      ...selectedTeams,
      [event.id]: teamId,
    });
  }}
/>
              )}
          </div>
        ))}

        <button
          onClick={register}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "12px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Continue
        </button>

        {message && (
          <div>{message}</div>
        )}
      </div>
    </div>
  );
}

