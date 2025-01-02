import Card from "@/app/components/Card";
export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full base-text gap-5">
        <div className="p-5 rounded-lg bg-slate-500 text-slate-900">Selector for Home/Projects/Contact Info</div>
        <div className="grid grid-cols-3 w-[50%] h-[75%] gap-3">
            <div className="hero-section">
                <div className="animate-slide-in-left w-full h-full">
                    <Card content="Hero Section" color="bg-slate-700"/>
                </div>
            </div>
            <div className="work-section">
                <div className="w-full h-full">
                    <Card content="Work Experience" color="bg-slate-500"/>
                </div>
            </div>
            <div className="tech-section">
                <div className="w-full h-full">
                <Card content="Technologies" color="bg-slate-600"/>
                </div>
            </div>
            <div>
                <div className="w-full h-full">
                    <Card content="Gurvir Dhillon" color="bg-slate-900"/>
                </div>
            </div>
            <div className="education-section">
                <div className="w-full h-full">
                    <Card content="Education" color="bg-slate-800"/>
                </div>
            </div>
        </div>
        </div>
    );
}