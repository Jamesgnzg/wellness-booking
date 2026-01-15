import { ReactElement, useEffect, useState } from "react";
import AppDatePicker from "../../../components/DatePicker";
import { useAppointment } from "../../../context/AppointmentContext";
import ServiceCard from "./serviceCard";
import { appointmentTime } from "../../../data/appointmentTime";
import { IAppointmentTime } from "../../../interface/AppointmentTime";
import { convertDateFormat } from "../../../utils/date";

const ServiceBooking: React.FC = (): ReactElement => {
  const {
    clientService,
    appointmentDetails,
    confirmedAppointments,
    updateAppointmentSchedule,
    updateBookingStep,
    clearCurrentAppointment,
  } = useAppointment();
  const [bookingDate, setBookingDate] = useState<Date>(new Date());
  const [availableTime, setAvailableTime] =
    useState<IAppointmentTime[]>(appointmentTime);
  const [unavailableTime, setUnavailableTime] = useState<Number[]>([]);

  const showNextStep = () => {
    updateBookingStep("Info");
  };

  const updateBookingDate = (newDate: Date) => {
    setBookingDate(newDate);
  };

  const updateTime = (timeSelected: IAppointmentTime) => {
    bookingDate.setHours(timeSelected.hours);
    bookingDate.setMinutes(timeSelected.mins);
    bookingDate.setSeconds(0);
    updateAppointmentSchedule(bookingDate, timeSelected.id);
  };

  useEffect(() => {
    confirmedAppointments.forEach((appointment) => {
      setUnavailableTime([
        ...unavailableTime,
        Number(appointment?.appointmentDateTime?.getTime()),
      ]);
    });
    checkAvailableTime();
  }, []);

  useEffect(() => {
    checkAvailableTime();
  }, [bookingDate]);

  const checkAvailableTime = () => {
    const avail: IAppointmentTime[] = [];

    appointmentTime.forEach((timeSlot) => {
      bookingDate.setHours(timeSlot.hours);
      bookingDate.setMinutes(timeSlot.mins);
      bookingDate.setSeconds(0);
      timeSlot.stamp = bookingDate.getTime();

      if (!unavailableTime.includes(timeSlot.stamp)) {
        avail.push(timeSlot);
      }
    });

    setAvailableTime(avail);
  };

  const timeCardDefault =
    "inline-flex bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 cursor-pointer hover:bg-gray-100";
  const timeCardSelected =
    "inline-flex bg-gray-200 border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 cursor-pointer  hover:bg-gray-100";

  return (
    <>
      <div className="p-3">
        <a
          className="mb-4 inline-flex items-center gap-x-1 text-lg font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          onClick={clearCurrentAppointment}
        >
          {"< Back to Services List"}
        </a>
        {clientService && <ServiceCard service={clientService} />}
        <div className="relative m-auto max-w-4xl mt-5">
          <div className="md:flex lg:flex p-2 gap-10">
            <div className="flex-1 pt-5">
              <AppDatePicker
                selectedDate={bookingDate}
                minDate={new Date()}
                setDate={updateBookingDate}
              />
            </div>
            <div className="flex-auto pt-3">
              <p className="mb-5 text-center text-lg">
                {convertDateFormat(bookingDate)}
                {appointmentDetails.appointmentDateTime &&
                  ` - ${bookingDate.toLocaleTimeString("en-US", {
                    timeStyle: "short",
                  })}`}
              </p>
              <div className="grid grid-cols-4 gap-4">
                {availableTime.map((time, index) => (
                  <div
                    key={index}
                    className={
                      appointmentDetails.appointmentSlot == time.id &&
                      appointmentDetails.appointmentDateTime?.getTime() ==
                        time.stamp
                        ? timeCardSelected
                        : timeCardDefault
                    }
                    onClick={() => updateTime(time)}
                  >
                    {time.timeLabel}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            className="py-3 px-4 mt-5 inline-flex items-center gap-x-2 text-md font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:bg-indigo-200 disabled:opacity-50 disabled:pointer-events-none"
            disabled={appointmentDetails?.appointmentDateTime == null}
            onClick={showNextStep}
          >
            {"Continue >"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ServiceBooking;
