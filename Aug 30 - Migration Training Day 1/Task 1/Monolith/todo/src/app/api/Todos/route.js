import { NextResponse } from "next/server";

export async function GET() {
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (res) => res.json()
  );
  return NextResponse.json(todos);
}
