import { useState } from "react";
import AccordionUse from "./AccordionUse";

const Accordion = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const handleAccordionClick = (index) => {
        setOpenAccordion(index === openAccordion ? null : index);
    };

    const accordionData = [
        {
            title: "Mauris id nibh eu fermentum mattis purus?",
            content:
                "Organizers, attendees, this support center is intended to quickly reply to your questions, if still don't find answers, please contact us, w e will be happy to receive your inquiry"
        },
        {
            title: "Eros imperdiet rhoncus?",
            content:
                "Organizers, attendees, this support center is intended to quickly reply to your questions, if still don't find answers, please contact us, w e will be happy to receive your inquiry"
        },
        {
            title: "Fames imperdiet quam fermentum??",
            content:
                "Organizers, attendees, this support center is intended to quickly reply to your questions, if still don't find answers, please contact us, w e will be happy to receive your inquiry"
        },
        {
            title: "Fames imperdiet quam fermentum?",
            content:
                "Organizers, attendees, this support center is intended to quickly reply to your questions, if still don't find answers, please contact us, w e will be happy to receive your inquiry"
        },
        {
            title: "Varius vitae, convallis amet lacus sit aliquet nibh?",
            content:
                "Organizers, attendees, this support center is intended to quickly reply to your questions, if still don't find answers, please contact us, w e will be happy to receive your inquiry"
        },
        {
            title: "Tortor nisl pellentesque sit quis orci dolor?",
            content:
                "Organizers, attendees, this support center is intended to quickly reply to your questions, if still don't find answers, please contact us, w e will be happy to receive your inquiry"
        },
        {
            title: "Vestibulum mauris mauris elementum proin amet auctor ipsum nibh sollicitudin?",
            content:
                "Organizers, attendees, this support center is intended to quickly reply to your questions, if still don't find answers, please contact us, w e will be happy to receive your inquiry"
        }
        // Add more accordion sections as needed
    ];
    return (
        <div>
            <div className="flex justify-between">
                <div>
                    <h1 className="text-2xl font-bold mb-4 text-[#001356]">How it works ?</h1>
                </div>
                <div className="flex gap-2 font-semibold">
                    <div><button className="bg-[#001356] text-white px-4 py-1 rounded-full text-sm">organizer</button></div>
                    <div><button>student</button></div>
                </div>
            </div>
            {accordionData.map((data, index) => (
                <AccordionUse
                    key={index}
                    title={data.title}
                    content={data.content}
                    isOpen={index === openAccordion}
                    onClick={() => handleAccordionClick(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;