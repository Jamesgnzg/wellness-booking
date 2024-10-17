import { ReactElement } from "react";
import { useAppointment } from "../../../context/AppointmentContext";
import { services } from "../../../data/services";
import { IServices } from "../../../interface/Services";
import ServiceBooking from "./serviceBooking";
import ServiceCard from "./serviceCard";

const Appointment: React.FC = (): ReactElement => {
  const { clientService } = useAppointment();
  const showServicesList = !clientService;

  return (
    <>
      <div className="w-full pt-5">
        {showServicesList &&
          services.map((service: IServices) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        {clientService && <ServiceBooking />}
      </div>
    </>
  );
};

export default Appointment;
