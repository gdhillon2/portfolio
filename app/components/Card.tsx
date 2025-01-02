"use client";
import React from "react";

interface CardProps {
    content: string;
    color: string;
}

export default function Card({content, color}: CardProps) {
    return (
        <div className={`flex flex-col justify-center items-center w-full h-full base-text ${color} rounded-lg`}>
            <div>{content}</div>
        </div>
    );
}