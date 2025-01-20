"use client";
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

interface ProjectCardProps {
    projectTitle?: string;
    textContent?: string;
    imgSrc: string | StaticImport;
    imgWidthScale?: number;
    imgHeightScale?: number;
}

export default function ProjectCard({ projectTitle, textContent, imgSrc, imgWidthScale = 0.9, imgHeightScale = 0.7 }: ProjectCardProps) {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const imageContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const updateDimensions = () => {
            if (imageContainerRef.current) {
                const { width, height } = imageContainerRef.current.getBoundingClientRect();
                setDimensions({ width, height });
            }
        }

        updateDimensions();

        window.addEventListener('resize', updateDimensions);

        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const imgWidth = dimensions.width * imgWidthScale;
    const imgHeight = dimensions.height * imgHeightScale;

    return (
        <div className="relative p-2 border border-gray-900 rounded-3xl flex w-full h-[600px] bg-gray-950 group">
            <div className="w-full glare-item-outer"></div>
            <div className="flex flex-col w-full border border-gray-700 rounded-2xl bg-slate-900 relative overflow-hidden">
                <ArrowRightIcon className="more-info-arrow h-6 w-6 transition-all duration-300 group-hover:left-[95%]" />
                <div className="w-full glare-item-inner"></div>
                <div className="p-[32px]">
                    <div className="text-xl text-shadow font-bold text-white">
                        {projectTitle}
                    </div>
                    <div className="text-base text-white">
                        {textContent}
                    </div>
                </div>
                <div className="relative flex w-full h-full">
                    <div ref={imageContainerRef} className="absolute justify-end items-end bottom-[-10%] left-[5%] w-[90%] h-full transition-all duration-300 group-hover:bottom-0">
                        <Image src={imgSrc} alt="project" width={imgWidth} height={imgHeight} fill={true} /> 
                    </div>
                </div>
            </div>
        </div>
    )
}
