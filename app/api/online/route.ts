import { NextResponse } from "next/server";

export async function GET() {
    const response = await fetch(
        `https://api.lanyard.rest/v1/users/230938722017869824`, { cache: "no-cache" }
    ).then((res) => res.json());

    return NextResponse.json(response);
};
