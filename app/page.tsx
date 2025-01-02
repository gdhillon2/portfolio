import Card from "@/app/components/Card";
export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full base-text gap-5">
        <div className="p-5 rounded-lg bg-slate-500 text-slate-900">Selector for Home/Projects/Contact Info</div>
        <div className="grid grid-cols-3 w-[50%] h-[75%] gap-3">
            <div className="hero-section">
                <div className="animate-slide-in-left w-full h-full">
                    <Card content="Hero Section" size="w-full h-full" bgColor="bg-slate-700"/>
                </div>
            </div>
            <div className="work-section">
                <div className="opacity-0 animate-slide-in-right w-full h-full flex flex-col gap-2">
                    <Card content="Work Experience" size="w-full h-full" bgColor="bg-slate-500"/>
                    <div className="flex w-full animate-slide-in-right-delay-200 opacity-0">
                        <Card 
                            content="Download Resume Button" 
                            size="p-4 w-full" 
                            bgColor="bg-orange-400 hover:bg-orange-500"
                            textStyles="text-black text-lg"
                        />
                    </div>
                </div>
            </div>
            <div className="tech-section">
                <div className="opacity-0 animate-slide-in-left w-full h-full flex flex-col gap-2">
                    <div className="flex w-full animate-slide-in-left-delay-200 opacity-0">
                        <Card content="Software Engineer" size="p-4 w-full" bgColor="bg-yellow-400" textStyles="text-black text-lg font-bold"/>
                    </div>
                    <Card content="Technologies" size="w-full h-full" bgColor="bg-slate-600"/>
                </div>
            </div>
            <div>
                <div className="w-full h-full">
                    <Card content="Gurvir Dhillon" size="w-full h-full" bgColor="bg-slate-900"/>
                </div>
            </div>
            <div className="education-section">
                <div className="animate-slide-in-right w-full h-full">
                    <Card content="Education" size="w-full h-full" bgColor="bg-slate-800"/>
                </div>
            </div>
        </div>
        </div>
    );
}