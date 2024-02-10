import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <div className="text-center">
                <h1 className="mb-8 text-white">DustBane</h1>
                <div className="space-y-4">
                    <Link href="/sign-in">
                        <Button className="mr-2 bg-white text-black hover:text-white hover:bg-zinc-800">
                            Sign in
                        </Button>
                    </Link>
                    <Link href="/sign-up">
                        <Button className="bg-white text-black hover:text-white hover:bg-zinc-800">
                            Sign up
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
