import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function Projects() {
    return (
        <div className="flex flex-col items-center w-full h-full base-text gap-5 p-5">
            <Tabs defaultValue="projects">
                <TabsList>
                    <Link href="/">
                        <TabsTrigger value="home">Home</TabsTrigger>
                    </Link>
                    <TabsTrigger value="projects">Projects</TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    )
}