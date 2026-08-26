import dbConnect from "@/lib/mongodb";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();

    // This creates the document in MongoDB using all fields sent from your form (including 'link')
    const newProject = await Project.create(body);

    return NextResponse.json({ success: true, data: newProject }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}