import { ReactElement } from "react";
import { useAppointment } from "../../context/AppointmentContext";
import { bookings } from "../../enums/bookings";

const Stepper: React.FC = (): ReactElement => {
  const { currentStep } = useAppointment();
  const { SERVICE, INFO, CONFIRMATION } = bookings;

  const activeBackground =
    "flex items-center font-medium px-4 py-5 w-full rounded-xl rounded-r-[100px] bg-indigo-50 ml-0.5";
  const defaultBackground = "flex items-center font-medium px-4 py-5 w-full";

  const activeNumberBackground =
    "w-8 h-8 bg-indigo-600 rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10";
  const defaultNumberBackground =
    "w-8 h-8 bg-indigo-50 border border-indigo-600 rounded-full flex justify-center items-center mr-3 text-sm text-indigo-600 lg:w-10 lg:h-10";

  return (
    <ol
      className={
        currentStep == CONFIRMATION
          ? `flex items-center w-full space-y-4 border border-indigo-600 rounded-lg lg:space-y-0 rounded-r-[100px] pr-0.5`
          : `flex items-center w-full space-y-4 border border-indigo-600 rounded-lg lg:space-y-0`
      }
    >
      <li className="flex-1">
        <a
          className={
            currentStep == SERVICE ? activeBackground : defaultBackground
          }
        >
          <span
            className={
              currentStep == SERVICE
                ? activeNumberBackground
                : defaultNumberBackground
            }
          >
            1
          </span>
          <h4 className="text-base  text-indigo-600">Choose Appointment</h4>
        </a>
      </li>
      <li className="flex-1">
        <a
          className={currentStep == INFO ? activeBackground : defaultBackground}
        >
          <span
            className={
              currentStep == INFO
                ? activeNumberBackground
                : defaultNumberBackground
            }
          >
            2
          </span>
          <h4 className="text-base  text-gray-900">Your Info</h4>
        </a>
      </li>
      <li className="flex-1">
        <a
          className={
            currentStep == CONFIRMATION ? activeBackground : defaultBackground
          }
        >
          <span
            className={
              currentStep == CONFIRMATION
                ? activeNumberBackground
                : defaultNumberBackground
            }
          >
            3
          </span>
          <h4 className="text-base  text-gray-900">Confirmation</h4>
        </a>
      </li>
    </ol>
  );
};

export default Stepper;
