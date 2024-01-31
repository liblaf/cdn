import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(
  request: NextRequest,
  {
    params,
  }: { params: { year: string; month: string; day: string; filename: string } },
): Promise<NextResponse> {
  return new NextResponse(undefined, {
    status: 302,
    headers: {
      Location: `https://alist.liblaf.me/d/public/img/${params.year}/${params.year}-${params.month}-${params.day}T${params.filename}`,
    },
  });
}
