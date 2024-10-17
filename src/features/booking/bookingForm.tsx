import { ReactElement } from "react";
import { useAppointment } from "../../context/AppointmentContext";
import Appointment from "./appointment/appointment";
import ConfirmationBooking from "./confirmation/confirmation";
import CustomerInfo from "./customerInfo/customerInfo";
import Stepper from "./stepper";

const BookingForm: React.FC = (): ReactElement => {
  const { currentStep } = useAppointment();

  return (
    <>
      <Stepper />
      {currentStep == "Service" && <Appointment />}
      {currentStep == "Info" && <CustomerInfo />}
      {currentStep == "Confirmation" && <ConfirmationBooking />}
    </>
  );
};

export default BookingForm;
