import Card from "@/components/Card";
import ContactCard from "@/components/ContactCard";

export default function ContactPage() {
    return (
        <div className="flex flex-col items-center">
            <div className="flex max-w-[600px] gap-5">
                <ContactCard text="" icon="github" link="https://github.com/gdhillon2"/>
                <ContactCard text="" icon="linkedin" link="https://www.linkedin.com/in/gurvir-dhillon-802504295/"/>
                <ContactCard text="" icon="email" copy_string="gurvirdhillonswe@gmail.com" />
            </div>
        </div>
    )
}
