"use client";

import {Trip} from "@/app/generated/prisma"
import Image from "next/image"

interface TripDetailClientProps {
    trip: Trip;
}
//declare as a client component
export default function TripDetailClient({trip}: TripDetailClientProps) {
    return <div className = "container mx-auto px-4 py-8 space-y-8">
        {trip.imageUrl && (
            <div className="w-full h-72 md:h-96 overflow-hidden rounded-xl shadow-lg relative">
                <Image 
                    src = {trip.imageUrl} 
                    alt = {trip.title} 
                    className = "object" 
                    fill 
                    priority/>
            </div>
        )}
    </div>
}