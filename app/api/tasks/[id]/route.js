import Task from "@/app/lib/models/models";
import connectMongoDB from "@/app/lib/mongodbConnection";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    try {
        const { id } = params;
        const { newTitle: title, newDescription: description } = await request.json();
        await connectMongoDB();
        await Task.findByIdAndUpdate(id, { title, description }, { new: true });
        return NextResponse.json({ message: "Task updated successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error updating task:", error);
        return NextResponse.json({ error: "Failed to update task" }, { status: 500 });
    }
}
