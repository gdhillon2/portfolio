"use client"
import Link from 'next/link';


interface ContactCardProps {
    text: string;
    icon: string;
    link: string;
    copy_string: string;
}

export default function ContactCard({ text, icon, link, copy_string }: ContactCardProps) {
    const content = (
        <div className="flex flex-col">
            <div>{icon}</div>
            <div>{text}</div>
        </div>
    );

    if (link) {
        return (
            <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                {content}
            </Link>
        )
    } else if (copy_string) {
        return (
            <button
                onClick={() => navigator.clipboard.writeText(copy_string)}
                className="block"
            >
                {content}
            </button>
        )
    }

}
