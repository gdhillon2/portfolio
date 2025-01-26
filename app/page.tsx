import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
    return (
        <div className="flex flex-col items-center w-full h-full bg-black base-text gap-5 p-5">
            <div className="animate-slide-in-up w-[100%] lg:w-[60%] h-fit grid grid-cols-1 gap-9 p-5">
            <ProjectCard 
                projectTitle="ResumeTailor" 
                textContent="An intuitive resume builder that leverages AI to help you create a resume that gets more responses."
                imgSrc="resumetailor.svg"
                href="/resumetailor"
            />
            <ProjectCard 
                projectTitle="WASM Draw" 
                textContent="A drawing web app that uses C++ and WebAssembly to draw and render the canvas." 
                imgSrc="wasmdraw.svg"
                bgColor="bg-green-900"
                outerBgColor ="bg-emerald-950"
                outerBorderColor="border-emerald-900"
                innerBorderColor="border-emerald-700"
                href="/wasmdraw"
            />
            <ProjectCard 
                projectTitle="Self Driving Car" 
                textContent="A self driving car that uses IR and ultrasonic sensors to navigate a road with obstacles." 
                imgSrc=""
                bgColor="bg-red-900"
                outerBgColor="bg-red-950"
                outerBorderColor="border-red-900"
                innerBorderColor="border-red-700"
                href="/car"
            />
            </div>
        </div>
    )
}
