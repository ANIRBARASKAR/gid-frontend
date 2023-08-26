import NonTechnicalEvent from "./NonTechnicalEvent";
import RegistrationOpen from "./RegistrationOpen";
import TechnicalEvents from "./TechnicalEvents";
import Trainning from "./Trainning";

const MultipleEvents = () => {
    return (
        <div>
            <RegistrationOpen />
            <Trainning />
            <TechnicalEvents />
            <NonTechnicalEvent />
        </div>
    );
};

export default MultipleEvents;