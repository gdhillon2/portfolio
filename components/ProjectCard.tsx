interface ProjectCardProps {
    projectTitle?: string;
    textContent: string;
}

export default function ProjectCard({projectTitle, textContent}: ProjectCardProps) {
    return (
        <div className="w-full h-full p-5 text-orange-400 flex-grow">
            {projectTitle && <div className="text-xl text-orange-100 font-bold">{projectTitle}</div>}
            <div className="animate-slide-in-down-delay-200 opacity-0">{textContent}</div>
        </div>
    )
}