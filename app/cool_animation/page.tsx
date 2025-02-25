import Card from "@/components/Card";

export default function Home() {
    return (
        <div className="flex flex-col items-center w-full h-full bg-black base-text gap-5 p-5">
            <div className="grid grid-cols-3 w-[50%] h-[75%] gap-3 p-5">
                <div className="hero-section">
                    <div className="animate-slide-in-left w-full h-full">
                        <div className="relative w-full h-full p-1 rounded-lg border border-gray-900 base-text shadow-md bg-gray-950">
                            <div className="corner-glare-item-outer-horizontal"></div>
                            <div className="relative w-full h-full px-4 py-3 rounded-sm border border-gray-700 base-text shadow-md bg-slate-900">
                                <div className="corner-glare-item-inner-horizontal"></div>
                                <div className="text-shadow text-xl font-bold pb-2">About Me</div>
                                <ul className="flex flex-col w-full h-full text-shadow text-md">
                                    <li>Software Engineer at Barry-Wehmiller Design Group who builds SCADA systems for manufacturing plants.</li>
                                    <li>I also enjoy working with WebAssembly to bring other languages to the web.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="work-section">
                    <div className="w-full h-full flex flex-col gap-2">
                        <div className="w-full h-full p-1 rounded-lg border border-gray-900 base-text animate-slide-in-down opacity-0 shadow-md bg-gray-950">
                            <div className="relative w-full h-full px-4 py-3 rounded-sm border border-gray-700 base-text shadow-md bg-slate-900">
                                <div className="text-shadow text-xl font-bold pb-2">Work Experience</div>
                                <div className="w-full h-full text-shadow text-md">
                                    Barry-Wehmiller Design Group
                                    <div className="text-white text-sm">May 2023 - Current</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full animate-slide-in-right-delay-200 opacity-0">
                            <Card
                                content="View Resume"
                                size="p-2 w-full"
                                bgColor="bg-blue-600 hover:bg-blue-700"
                                textStyles="text-white text-lg font-bold"
                            />
                        </div>
                    </div>
                </div>
                <div className="tech-section">
                    <div className="w-full h-full flex flex-col gap-2">
                        <div className="flex w-full animate-slide-in-left-delay-200 opacity-0">
                            <div className="text-shadow flex w-full h-full p-1 rounded-lg base-text text-lg font-bold border border-gray-900 bg-gray-950">
                                <div className="relative w-full h-full px-4 py-3 rounded-sm border border-gray-700 base-text shadow-md bg-slate-900">
                                    LinkedIn Link Here
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-full p-1 animate-slide-in-up rounded-lg border border-gray-900 base-text text-pink-400 shadow-md bg-gray-950">
                            <div className="relative w-full h-full px-4 py-3 rounded-sm border border-gray-700 base-text shadow-md bg-slate-900">
                                <div className="text-shadow text-xl font-bold pb-2">
                                    Technologies
                                </div>
                                <ul className="text-shadow text-md">
                                    <li>Python</li>
                                    <li>Ignition SCADA</li>
                                    <li>React</li>
                                    <li>Next.js</li>
                                    <li>WebAssembly</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-full h-full">
                        <Card content="Gurvir Dhillon" size="w-full h-full" bgColor="bg-gray-900" textStyles="text-cyan-400" />
                    </div>
                </div>
                <div className="hobbies-section">
                    <div className="animate-slide-in-right w-full h-full">
                        <div className="w-full h-full p-1 rounded-lg border border-gray-900 base-text shadow-md bg-gray-950">
                            <div className="relative w-full h-full px-4 py-3 rounded-sm border border-gray-700 base-text shadow-md bg-slate-900">
                                <div className="text-shadow text-xl font-bold">Hobbies</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
