import { ReactElement } from "react";
import { AppointmentContextProvider } from "../context/AppointmentContext";
import BookingForm from "../features/booking/bookingForm";
import BookingHeader from "../features/booking/bookingHeader";

const Booking: React.FC = (): ReactElement => {
  return (
    <>
      <div className="relative items-center m-auto p-5 md:w-4/5">
        <AppointmentContextProvider>
          <div className="mb-7">
            <BookingHeader />
          </div>
          <BookingForm />
        </AppointmentContextProvider>
      </div>
    </>
  );
};

export default Booking;
