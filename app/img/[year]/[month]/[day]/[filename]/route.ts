import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

type Params = {
  year: string;
  month: string;
  day: string;
  filename: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Params },
): Promise<NextResponse> {
  return new NextResponse(undefined, {
    status: 302,
    headers: {
      Location: `https://alist.liblaf.me/d/public/img/${params.year}/${params.filename}`,
    },
  });
}
