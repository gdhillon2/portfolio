interface ProjectCardProps {
    projectTitle?: string;
    textContent?: string;
}

export default function ProjectCard({ projectTitle, textContent }: ProjectCardProps) {
    return (
        <div className="relative p-2 border border-gray-900 rounded-3xl flex w-full h-[500px] bg-gray-950">
            <div className="w-full glare-item-outer"></div>
            <div className="w-full border border-gray-700 rounded-2xl bg-slate-900 p-5 relative">
            <div className="w-full glare-item-inner"></div>
                {projectTitle}
            </div>
        </div>
    )
}
