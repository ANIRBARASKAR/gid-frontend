import PropTypes from 'prop-types';

const EventTitle = ({ title }) => {
    return (
        <div className="flex items-center gap-4">
            <p className="text-[#001356] text-4xl">{title}</p>
            <div className="w-96 h-[2px] bg-[#001356] mt-3"></div>
        </div>
    );
};
EventTitle.propTypes = {
    title: PropTypes.string.isRequired,
};
export default EventTitle;