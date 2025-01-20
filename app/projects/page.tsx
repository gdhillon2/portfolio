import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function Projects() {
    return (
        <div className="flex flex-col items-center w-full h-full bg-black base-text gap-5 p-5">
            <Tabs defaultValue="projects">
                <TabsList>
                    <Link href="/">
                        <TabsTrigger value="home">Home</TabsTrigger>
                    </Link>
                    <TabsTrigger value="projects">Projects</TabsTrigger>
                </TabsList>
            </Tabs>
            <div className="animate-slide-in-up w-[60%] h-fit grid grid-cols-1 gap-9 p-5">
            <ProjectCard 
                projectTitle="ResumeTailor" 
                textContent="An intuitive resume builder that leverages AI to help you createa a resume that gets more responses."
                imgSrc="/resumetailor.svg"
            />
            <ProjectCard 
                projectTitle="WASM Draw" 
                textContent="A simple drawing app that uses WebAssembly to render the canvas." 
                imgSrc="/resumetailor.svg"
            />
            <ProjectCard 
                projectTitle="Self Driving Car" 
                textContent="A self driving car that uses IR and ultrasonic sensors to navigate a road with obstacles." 
                imgSrc="/resumetailor.svg"
            />
            </div>
        </div>
    )
}
