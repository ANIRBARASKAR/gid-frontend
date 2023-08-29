
const AccordionUse = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="border rounded shadow-sm">
            <button
                className="w-full py-4 px-6 text-left text-lg font-semibold bg-gray-100"
                onClick={onClick}
            >
                {title}
            </button>
            {isOpen && (
                <div className="py-4 px-6 bg-white">
                    <p className="text-gray-800">{content}</p>
                </div>
            )}
        </div>
    );
};

export default AccordionUse;