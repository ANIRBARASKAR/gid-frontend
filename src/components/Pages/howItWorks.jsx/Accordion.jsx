import { useState } from "react";
import AccordionUse from "./AccordionUse";

const Accordion = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const handleAccordionClick = (index) => {
        setOpenAccordion(index === openAccordion ? null : index);
    };

    const accordionData = [
        {
            title: "Section 1",
            content:
                "This is the content of section 1. It will be displayed when the accordion is open."
        },
        {
            title: "Section 2",
            content:
                "This is the content of section 2. It will be displayed when the accordion is open."
        }
        // Add more accordion sections as needed
    ];
    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-semibold mb-4">Accordion Example</h1>
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