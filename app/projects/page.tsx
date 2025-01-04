import ProjectCard from "@/components/ProjectCard";
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
            <div className="w-[75%] h-fit grid grid-cols-1 gap-3 p-5">
                <div className="flex w-full h-[250px]">
                    <div className="w-full bg-gray-500 p-5 rounded-lg">image goes here</div>
                    <ProjectCard 
                        projectTitle="ResumeTailor"
                        textContent="This is a project I worked on that is really cool."
                    />
                    {/* Add link to project here */}
                </div>
                <div className="flex w-full h-[250px]">
                    <div className="w-full bg-gray-500 p-5 rounded-lg">image goes here</div>
                    <ProjectCard 
                        projectTitle="Sketch Web App"
                        textContent="This is a project I worked on that is really cool."
                    />
                    {/* Add link to project here */}
                </div>
                <div className="flex w-full h-[250px]">
                    <div className="w-full bg-gray-500 p-5 rounded-lg">image goes here</div>
                    <ProjectCard 
                        projectTitle="Self-Driving Car"
                        textContent="This is a project I worked on that is really cool."
                    />
                    {/* Add link to project here */}
                </div>
                {/* Add more projects here (open source contributions, etc.) */}
            </div>
        </div>
    )
}