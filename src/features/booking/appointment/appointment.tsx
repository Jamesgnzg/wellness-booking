import { ReactElement } from "react";
import { useAppointment } from "../../../context/AppointmentContext";
import { services } from "../../../data/services";
import { IServices } from "../../../interface/Services";
import ServiceBooking from "./serviceBooking";
import ServiceCard from "./serviceCard";

const Appointment: React.FC = (): ReactElement => {
  const { clientService } = useAppointment();

  return (
    <>
      <div className="w-full pt-5">
        {clientService ? (
          <ServiceBooking />
        ) : (
          services.map((service: IServices) => (
            <ServiceCard key={service.id} service={service} />
          ))
        )}
      </div>
    </>
  );
};

export default Appointment;
