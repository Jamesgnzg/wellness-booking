import { ReactElement } from "react";
import { useAppointment } from "../../../context/AppointmentContext";
import ServiceCard from "../appointment/serviceCard";
import CustomerInfoForm from "./customerInfoForm";

const CustomerInfo: React.FC = (): ReactElement => {
  const { clientService, updateBookingStep } = useAppointment();
  return (
    <>
      <div className="w-full pt-5">
        <div className="p-3">
          <a
            className="mb-4 inline-flex items-center gap-x-1 text-lg font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
            onClick={() => updateBookingStep("Service")}
          >
            {"< Back to Appointment Schedule"}
          </a>
          {clientService && <ServiceCard service={clientService} />}
          <CustomerInfoForm />
        </div>
      </div>
    </>
  );
};

export default CustomerInfo;
