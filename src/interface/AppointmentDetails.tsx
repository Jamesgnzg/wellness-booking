export interface IAppointmentDetails {
  service: string;
  appointmentSlot: number | null;
  appointmentDateTime: Date | null;
  clientInfo: {
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    emailAddress: string;
  };
}
