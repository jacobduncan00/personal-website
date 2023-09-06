import { NextResponse } from "next/server";

export async function GET() {
    const response = await fetch(
        `https://api.sunrise-sunset.org/json?lat=30.266666&lng=-97.733330&formatted=0`
    ).then((res) => res.json());

    return NextResponse.json(response);
};
