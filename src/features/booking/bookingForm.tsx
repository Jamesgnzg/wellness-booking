import { FC, ReactElement } from "react";
import { useAppointment } from "../../context/AppointmentContext";
import { bookings } from "../../enums/bookings";
import Appointment from "./appointment/appointment";
import ConfirmationBooking from "./confirmation/confirmation";
import CustomerInfo from "./customerInfo/customerInfo";
import Stepper from "./stepper";

const BookingForm: FC = (): ReactElement => {
  const { currentStep } = useAppointment();
  const { SERVICE, INFO, CONFIRMATION } = bookings;

  return (
    <>
      <Stepper />
      {currentStep == SERVICE && <Appointment />}
      {currentStep == INFO && <CustomerInfo />}
      {currentStep == CONFIRMATION && <ConfirmationBooking />}
    </>
  );
};

export default BookingForm;
