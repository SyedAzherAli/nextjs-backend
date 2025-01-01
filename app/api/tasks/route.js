import Task from "@/app/lib/models/models";
import connectMongoDB from "@/app/lib/mongodbConnection";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title, description } = await request.json();
        await connectMongoDB();
        await Task.create({ title, description });
        return NextResponse.json({ message: "Task Created" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create task" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectMongoDB();
        const topics = await Topic.find();
        return NextResponse.json({ topics });
    } catch (error) {
        console.error("Error retrieving topics:", error);
        return NextResponse.json({ error: "Failed to retrieve topics" }, { status: 500 });
    }
}
