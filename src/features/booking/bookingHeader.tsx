import { ReactElement } from "react";
import { useAppointment } from "../../context/AppointmentContext";

const BookingHeader: React.FC = (): ReactElement => {
  const { currentStep } = useAppointment();
  const header =
    currentStep == "Confirmation"
      ? "Booking Confirmation"
      : "Book a wellness session";
  const subHeader =
    currentStep == "Confirmation"
      ? "Get ready for a well deserved Spa day at Veyor Wellness"
      : "Visit one of our expert consultants to get yourself feeling 100% again";

  return (
    <>
      <div className="text-7xl text-center mb-1 font-display text-indigo-600">
        {header}
      </div>
      <div className="text-lg text-center mb-5">{subHeader}</div>
    </>
  );
};

export default BookingHeader;
