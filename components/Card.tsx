"use client";
import React from "react";

interface CardProps {
    content: string;
    bgColor?: string;
    textStyles?: string;
    size?: string;
}

export default function Card({content, bgColor, textStyles, size}: CardProps) {
    return (
            <div className="animate-slide-in-left w-full h-full">
                <div className="relative w-full h-full p-1 rounded-lg border border-gray-900 base-text shadow-md bg-gray-950">
                    <div className="relative w-full h-full px-4 py-3 rounded-sm border border-gray-700 base-text shadow-md bg-slate-900">
                    {content}
                    </div>
                </div>
            </div>
    );
}
