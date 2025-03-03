import Card from "@/components/Card";
import ContactCard from "@/components/ContactCard";

export default function ContactPage() {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col max-w-[600px] gap-5">
                <Card content="Email: gurvirdhillonswe@gmail.com"/>
                <Card content="GitHub: gdhillon2"/>
                <Card content="LinkedIn: www.linkedin.com/in/gurvir-dhillon-802504295"/>
                <ContactCard text="test" icon="test" copy_string="test" link=""/>
            </div>
        </div>
    )
}
