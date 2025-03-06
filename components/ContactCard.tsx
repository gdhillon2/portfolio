"use client"
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface ContactCardProps {
    text: string;
    icon: string;
    link?: string;
    copy_string?: string;
}

const icon_map: Record<string, JSX.Element> = {
    github: <FaGithub size={64} />,
    linkedin: <FaLinkedin size={64} />,
    email: <FaEnvelope size={64} />,
}

export default function ContactCard({ text, icon, link, copy_string }: ContactCardProps) {
    const content = (
        <div className="flex flex-col items-center gap-2 p-4 border rounded-lg w-fit">
            {icon_map[icon] || null}
            {text && <div className="text-center">{text}</div>}
        </div>
    );

    if (link) {
        return (
            <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-slide-in-left"
            >
                {content}
            </Link>
        )
    } else if (copy_string) {
        return (
            <button
                onClick={() => navigator.clipboard.writeText(copy_string)}
                className="block animate-slide-in-left"
            >
                {content}
            </button>
        )
    }

}
