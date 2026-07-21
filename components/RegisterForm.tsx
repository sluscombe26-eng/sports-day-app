"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import TeamPicker from "./TeamPicker";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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

      if (eventsData) setEvents(eventsData);

      const { data: teamsData } = await supabase
        .from("teams")
        .select("*")
        .order("team_name");

      if (teamsData) setTeams(teamsData);

      const { data: membersData } = await supabase
        .from("team_members")
        .select("*");

      if (membersData) setTeamMembers(membersData);
    }

    loadData();
  }, []);

  async function register() {
    const participant = await supabase
      .from("participants")
      .insert([
        {
          name,
          email,
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

    setMessage("success");

    setName("");
    setEmail("");
    setSelectedEvents([]);
    setSelectedTeams({});
  }

  return (
    <div
      style={{
        background: "white",
        padding: "28px",
        borderRadius: "24px",
        marginTop: "20px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        textAlign: "left",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          marginBottom: "8px",
          color: "#2563eb",
          fontSize: "34px",
        }}
      >
        🎟️ Register For Sports Day
      </h2>

      <p
        style={{
          color: "#64748b",
          marginBottom: "20px",
        }}
      >
        Choose your events and join a team.
      </p>

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
          style={{
            padding: "16px",
            borderRadius: "12px",
            border: "2px solid #e2e8f0",
          }}
        />

        <input
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "16px",
            borderRadius: "12px",
            border: "2px solid #e2e8f0",
          }}
        />

        <h3
          style={{
            color: "#2563eb",
            marginTop: "10px",
          }}
        >
          Choose Your Events
        </h3>

        {events.map((event) => (
          <div
            key={event.id}
            style={{
              background: selectedEvents.includes(event.id)
                ? "#dbeafe"
                : "#f8fafc",
              border: selectedEvents.includes(event.id)
                ? "2px solid #2563eb"
                : "2px solid #e5e7eb",
              padding: "14px",
              borderRadius: "14px",
              marginBottom: "8px",
            }}
          >
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
              <strong>{event.name}</strong>
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
            background:
              "linear-gradient(135deg,#2563eb,#1d4ed8)",
            color: "white",
            border: "none",
            padding: "16px",
            borderRadius: "14px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Register Now
        </button>

        {message === "success" && (
          <div
            style={{
              padding: "24px",
              background: "#dcfce7",
              border: "3px solid #22c55e",
              borderRadius: "20px",
              color: "#166534",
              textAlign: "left",
              marginTop: "20px",
            }}
          >
            <h3
              style={{
                marginTop: 0,
                color: "#15803d",
              }}
            >
              🎉 Registration Complete!
            </h3>

            <p>
              Thank you for registering for
              Baririball Academy's 3rd Sports Day.
            </p>

            <p>
              Additional event registrations will
              be available in person at Kennington
              Park from 2:00pm on Saturday.
            </p>

            <p
              style={{
                fontWeight: "bold",
              }}
            >
              See you there — and don't forget,
              the starting gun goes off at
              3:00pm sharp!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
