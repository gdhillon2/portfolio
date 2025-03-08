import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
    return (
        <div className="flex flex-col items-center w-full h-full bg-black base-text gap-5 p-5">
            <div className="animate-slide-in-up w-[100%] lg:w-[60%] h-fit grid grid-cols-1 gap-9 p-5">
            <ProjectCard 
                projectTitle="ResumeTailor" 
                textContent="Resume builder that leverages AI to help you create a resume that gets more responses."
                imgSrc="resumetailor.svg"
                bgColor="bg-neutral-900"
                outerBgColor ="bg-neutral-950"
                outerBorderColor="border-neutral-900"
                innerBorderColor="border-neutral-700"
                href="https://resume-tailor-eta.vercel.app/"
            />
            <ProjectCard 
                projectTitle="WASM Draw" 
                textContent="Drawing web app that uses C++ and WebAssembly to draw and render the canvas." 
                imgSrc="wasmdraw.svg"
                href="https://gdhillon2.github.io/WASM-Draw/"
            />
            <ProjectCard 
                projectTitle="Self Driving Car" 
                textContent="Self driving car that uses IR and ultrasonic sensors to navigate a road with obstacles." 
                imgSrc="car.svg"
                bgColor="bg-gray-800"
                outerBgColor="bg-gray-900"
                outerBorderColor="border-gray-700"
                innerBorderColor="border-gray-600"
                href="https://github.com/gdhillon2/self-driving-car"
            />
            </div>
        </div>
    )
}
