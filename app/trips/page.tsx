import { auth } from "@/auth"
import { Button } from "@/components/ui/button";
import Link from "next/link";

//async function that allows me to straight up call the session to confirm user login status, 
//unlike calling the session state in navbar

export default async function TripsPage() {
    const session = await auth();

    if(!session) {
        return <div className = "flex justify-center items-center h-screen text-gray-700 text-xl">
            Please Sign In To Continue
        </div>
    }
    //assuming the user is now Signed In
    return (
    <div className= "space-y-6 container mx-auto px-4 py-8">
        <div>
            <h1>DashBoard</h1>
            <Link href = "/trips/new">
                <Button>New Trip</Button>
            </Link>
        </div>
    </div>
    )

}