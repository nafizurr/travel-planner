import { auth } from "@/auth";
import TripDetailClient from "@/components/trip-details";
import { prisma } from "@/lib/prisma";


export default async function TripDetails({params,}: {params: Promise<{tripId: string}>}) {
    const {tripId} = await params;
    
    const session = await auth();
    
    if (!session) {
        return <div>Please Sign In.</div>
    }

    const trip = await prisma.trip.findFirst({
        where: {id: tripId}
    })
    //querying from the server and make use of the client actions

    if(!trip) {
        return <div>Trip Not Found</div>
    }

    return <TripDetailClient trip = {trip}/>

}