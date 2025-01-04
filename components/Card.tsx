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
        <div className={`flex flex-col justify-center items-center ${size} base-text ${bgColor} rounded-lg`}>
            <div className={`${textStyles}`}>{content}</div>
        </div>
    );
}