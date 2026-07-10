import { NextResponse } from "next/server";

// Reads the visitor's country from Vercel's edge geo header.
// Falls back to empty (client then uses "international").
export const dynamic = "force-dynamic";
export const runtime = "edge";

export function GET(req: Request) {
  const country =
    req.headers.get("x-vercel-ip-country") ||
    req.headers.get("cf-ipcountry") ||
    "";
  return NextResponse.json(
    { country: country.toUpperCase() },
    { headers: { "cache-control": "no-store" } }
  );
}
