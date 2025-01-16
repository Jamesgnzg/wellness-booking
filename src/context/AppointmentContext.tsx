import { createContext, useContext, useState } from "react";
import { IAppointmentDetails } from "../interface/AppointmentDetails";
import { IServices } from "../interface/Services";
import { bookings } from "../enums/bookings";

type TAppointmentContextProps = {
  children: React.ReactNode;
};

const { SERVICE, INFO, CONFIRMATION } = bookings;

type TBookingSteps = typeof SERVICE | typeof INFO | typeof CONFIRMATION;

type TAppointmentContextType = {
  clientService: IServices | null;
  appointmentDetails: IAppointmentDetails;
  currentStep: TBookingSteps;
  confirmedAppointments: IAppointmentDetails[];
  updateClientService: (service: IServices | null) => void;
  updateAppointmentDetails: (field: string, value: string | number) => void;
  updateAppointmentSchedule: (schedule: Date, slot: number) => void;
  updateConfirmedAppointments: (appointment: IAppointmentDetails) => void;
  updateBookingStep: (step: TBookingSteps) => void;
  clearCurrentAppointment: () => void;
};

const appointmentContext = createContext<TAppointmentContextType>(null!);

export const AppointmentContextProvider = ({
  children,
}: TAppointmentContextProps) => {
  const [clientService, setClientService] = useState<IServices | null>(null);
  const [appointmentDetails, setAppointmentDetails] =
    useState<IAppointmentDetails>({
      service: "",
      appointmentSlot: null,
      appointmentDateTime: null,
      clientInfo: {
        firstName: "",
        lastName: "",
        phoneNumber: undefined,
        emailAddress: "",
      },
    });
  const [currentStep, setCurrentStep] = useState<TBookingSteps>(SERVICE);
  const [confirmedAppointments, setConfirmedAppointments] = useState<
    IAppointmentDetails[]
  >([]);

  const updateClientService = (service: IServices | null): void => {
    setClientService(service);
  };

  const updateAppointmentDetails = (
    field: string,
    value: string | number | null
  ): void => {
    setAppointmentDetails({
      ...appointmentDetails,
      clientInfo: { ...appointmentDetails.clientInfo, [field]: value },
    });
  };

  const updateAppointmentSchedule = (schedule: Date, slot: number): void => {
    setAppointmentDetails({
      ...appointmentDetails,
      appointmentSlot: slot,
      appointmentDateTime: schedule,
      clientInfo: { ...appointmentDetails.clientInfo },
    });
  };

  const updateConfirmedAppointments = (
    appointment: IAppointmentDetails
  ): void => {
    setConfirmedAppointments([...confirmedAppointments, appointment]);
  };

  const updateBookingStep = (step: typeof currentStep) => {
    setCurrentStep(step);
  };

  const clearCurrentAppointment = () => {
    setClientService(null);
    setAppointmentDetails({
      service: "",
      appointmentSlot: null,
      appointmentDateTime: null,
      clientInfo: {
        firstName: "",
        lastName: "",
        phoneNumber: undefined,
        emailAddress: "",
      },
    });
    setCurrentStep(SERVICE);
  };

  return (
    <appointmentContext.Provider
      value={{
        clientService,
        appointmentDetails,
        confirmedAppointments,
        currentStep,
        updateClientService: updateClientService,
        updateAppointmentDetails: updateAppointmentDetails,
        updateAppointmentSchedule: updateAppointmentSchedule,
        updateConfirmedAppointments: updateConfirmedAppointments,
        updateBookingStep: updateBookingStep,
        clearCurrentAppointment: clearCurrentAppointment,
      }}
    >
      {children}
    </appointmentContext.Provider>
  );
};

export const useAppointment = () => useContext(appointmentContext);
