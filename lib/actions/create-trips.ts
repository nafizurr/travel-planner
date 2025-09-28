"use server";

import {auth} from "@/auth"
import { prisma } from "../prisma";
import { redirect } from "next/navigation";
//formData collected from the onSubmit of that form

export async function createTrip(formData: FormData) {
    const session = await auth();

    //if theres no session or userID, this shouldn't even get to this point
    if (!session || !session.user?.id) {
        throw new Error("User is not authenticated.")
    }
    //info collected from the newTrip page
    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();
    const startDateStr = formData.get("startDate")?.toString();
    const endDateStr = formData.get("endDate")?.toString();

    if (!title || !description || !startDateStr || !endDateStr) {
    throw new Error("All fields are required.");
    }

    //startDate and endDate are not String but timestamps
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr)

    //upload to neon table using prisma

    await prisma.trip.create({
        data: {
            title,
            description,
            imageUrl,
            startDate,
            endDate,
            userId: session.user.id,
        },
    })

    redirect("/trips")
}