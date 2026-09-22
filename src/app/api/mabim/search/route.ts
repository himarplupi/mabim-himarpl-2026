import { NextRequest, NextResponse } from "next/server";
import { groupMabim } from "@/components/common/group-mabim";

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();

    if (!query || typeof query !== "string") {
      return NextResponse.json({ message: "Query tidak valid" }, { status: 400 });
    }

    const cleanQuery = query.trim().toLowerCase();

    const currentGroup = groupMabim.find((group) => group.mentees.some((mentee) => mentee.nim.toLowerCase() === cleanQuery || mentee.name.toLowerCase() === cleanQuery));

    if (!currentGroup) {
      return NextResponse.json({ found: false }, { status: 404 });
    }

    const currentMentee = currentGroup.mentees.find((mentee) => mentee.nim.toLowerCase() === cleanQuery || mentee.name.toLowerCase() === cleanQuery);

    return NextResponse.json({
      found: true,
      group: currentGroup,
      mentee: currentMentee,
    });
  } catch {
    return NextResponse.json({ message: "Terjadi kesalahan pada server" }, { status: 500 });
  }
}
