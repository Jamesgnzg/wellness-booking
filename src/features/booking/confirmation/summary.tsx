import { ReactElement } from "react";
import { useAppointment } from "../../../context/AppointmentContext";
import { convertDateFormat } from "../../../utils/date";

const ConfirmationSummary: React.FC = (): ReactElement => {
  const {
    clientService,
    appointmentDetails,
    updateBookingStep,
    clearCurrentAppointment,
    updateConfirmedAppointments,
  } = useAppointment();

  const appointmentDate = appointmentDetails?.appointmentDateTime
    ? convertDateFormat(appointmentDetails?.appointmentDateTime)
    : null;

  const appointmentTime =
    appointmentDetails?.appointmentDateTime?.toLocaleTimeString([], {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

  const navigateToService = () => {
    updateBookingStep("Service");
  };

  const saveAppointment = () => {
    updateConfirmedAppointments(appointmentDetails);
    clearCurrentAppointment();
    navigateToService();
  };

  return (
    <>
      <div className="flex flex-col w-4/5 bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <h3 className="text-3xl font-bold text-indigo-500 dark:text-white">
          {clientService ? clientService.name : "No Service Selected"}
        </h3>
        <p className="mt-1 text-lg font-medium uppercase text-gray-500 dark:text-neutral-500">
          {appointmentDate}
          <br />
          {appointmentTime}
        </p>
        <div className="mt-10">
          <p className="font-bold text-gray-800">
            {`Duration: ${clientService?.duration}`}
          </p>
          <p className="font-bold text-gray-800">
            {`Total Amount: $${clientService?.price}`}
          </p>
        </div>
        <div className="flex gap-5 mt-10">
          <button
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-indigo-500 bg-indigo-100 text-indigo-600 hover:bg-indigo-200 focus:outline-none focus:bg-indigo-200 disabled:opacity-50 disabled:pointer-events-none"
            onClick={() => clearCurrentAppointment()}
          >
            Cancel
          </button>
          <button
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg  bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:bg-indigo-200 disabled:opacity-50 disabled:pointer-events-none"
            onClick={() => navigateToService()}
          >
            Reschedule
          </button>
        </div>
        <a
          className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          onClick={() => saveAppointment()}
        >
          Schedule another appointment
          <svg
            className="shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </a>
      </div>
    </>
  );
};

export default ConfirmationSummary;
