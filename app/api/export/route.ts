import { NextResponse } from "next/server";
import * as XLSX from "xlsx";
import { supabase } from "../../../lib/supabase";

export async function GET() {
  const participants = await supabase
    .from("participants")
    .select("*");

  const registrations = await supabase
    .from("registration_events")
    .select(`
      *,
      events(name),
      teams(team_name)
    `);

  const rows: any[] = [];

  for (const participant of participants.data || []) {
    const participantRegistrations =
      (registrations.data || []).filter(
        (r) => r.participant_id === participant.id
      );

    for (const registration of participantRegistrations) {
      rows.push({
        Name: participant.name,
        Email: participant.email,
        Mobile: participant.mobile_number,
        EmergencyContact:
          participant.emergency_contact_name,
        EmergencyNumber:
          participant.emergency_contact_number,
        Event: registration.events?.name || "",
        Team: registration.teams?.team_name || "",
      });
    }
  }

  const workbook = XLSX.utils.book_new();

  const worksheet =
    XLSX.utils.json_to_sheet(rows);

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Registrations"
  );

  const buffer = XLSX.write(workbook, {
    type: "buffer",
    bookType: "xlsx",
  });

  return new NextResponse(buffer, {
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition":
        'attachment; filename="sports-day-registrations.xlsx"',
    },
  });
}
