import Card from "@/app/components/Card";
export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full base-text bg-gray-950 gap-5">
        <div className="pb-5">Selector for Home/Projects/Contact Info</div>
        <div className="grid grid-cols-3 w-[50%] h-[75%] gap-3">
            <div className="hero-section">
                <Card content="Hero Section" color="bg-slate-700"/>
            </div>
            <div className="work-section">
                <Card content="Work Experience" color="bg-slate-500"/>
            </div>
            <div className="tech-section">
                <Card content="Technologies Used" color="bg-slate-600"/>
            </div>
            <div>
                <Card content="Gurvir Dhillon" color="bg-slate-500"/>
            </div>
            <div className="education-section">
                <Card content="Education" color="bg-slate-800"/>
            </div>
        </div>
        </div>
    );
}