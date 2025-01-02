import Card from "@/app/components/Card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full base-text gap-5">
            <Tabs defaultValue="home">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="home">Home</TabsTrigger>
                    <TabsTrigger value="projects">Projects</TabsTrigger>
                </TabsList>
            </Tabs>
            <div className="grid grid-cols-3 w-[50%] h-[75%] gap-3">
                <div className="hero-section">
                    <div className="animate-slide-in-left w-full h-full">
                        <div className="w-full h-full p-5 rounded-lg border border-purple-500 bg-gray-800 text-purple-400 shadow-md">
                            <div className="text-xl font-bold">Who Am I?</div>
                        </div>
                    </div>
                </div>
                <div className="work-section">
                    <div className="w-full h-full flex flex-col gap-2">
                        <div className="w-full h-full p-5 rounded-lg border border-cyan-400 bg-gray-800 text-cyan-400 animate-slide-in-down opacity-0 shadow-md">
                            <div className="text-xl font-bold">Work Experience</div>
                            <div className="w-full h-full"></div>
                        </div>
                        <div className="flex w-full animate-slide-in-right-delay-200 opacity-0">
                            <Card 
                                content="View Resume" 
                                size="p-4 w-full" 
                                bgColor="bg-cyan-600 hover:bg-cyan-700" 
                                textStyles="text-white text-lg font-bold"
                            />
                        </div>
                    </div>
                </div>
                <div className="tech-section">
                    <div className="w-full h-full flex flex-col gap-2">
                        <div className="flex w-full animate-slide-in-left-delay-200 opacity-0">
                            <div className="flex w-full h-full p-3 rounded-md bg-gray-800 text-cyan-300 text-lg font-bold shadow-sm border border-cyan-400">
                                Software Engineer
                            </div>
                        </div>
                        <div className="w-full h-full p-5 animate-slide-in-up rounded-lg border border-pink-500 text-pink-400 bg-gray-800 text-pink-400 shadow-md">
                            <div className="text-xl font-bold">Technologies</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-full h-full">
                        <Card content="Gurvir Dhillon" size="w-full h-full" bgColor="bg-gray-900" textStyles="text-cyan-400"/>
                    </div>
                </div>
                <div className="hobbies-section">
                    <div className="animate-slide-in-right w-full h-full">
                        <div className="w-full h-full p-5 rounded-lg border border-purple-500 bg-gray-800 text-purple-400 shadow-md">
                            <div className="text-xl font-bold">Hobbies</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}