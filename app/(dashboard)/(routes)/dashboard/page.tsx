import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
    return (
        <div>
            <div className="mb-8 space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-center">
                    DustBane
                </h2>
                <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                    Your friendly neighborhood cleaner
                </p>
            </div>
        </div>
    );
}

export default DashboardPage;