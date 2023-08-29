import PropTypes from 'prop-types';

const AccordionUse = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="border-b-2 border-gray-200 text-[#001356]">
            <button
                className="w-full py-4 px-6 text-left text-lg font-semibold"
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
AccordionUse.propTypes = {
    title: PropTypes.string.isRequired, 
    content: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default AccordionUse;