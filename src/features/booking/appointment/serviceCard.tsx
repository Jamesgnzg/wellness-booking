import { ReactElement } from "react";
import { useAppointment } from "../../../context/AppointmentContext";
import { IServices } from "../../../interface/Services";

interface IServiceCardsProps {
  service: IServices;
}

const ServiceCard: React.FC<IServiceCardsProps> = ({
  service,
}): ReactElement => {
  const { name, description, price, duration } = service;
  const { clientService, clearCurrentAppointment, updateClientService } =
    useAppointment();

  return (
    <>
      <div className="mb-5">
        <div className="relative m-auto max-w-4xl border border-solid border-gray-200 rounded-2xl p-4 transition-all duration-500 col-span-12 xl:p-7 lg:col-span-3 md:col-span-6 hover:bg-gray-100">
          <div className="flex flex-row justify-between">
            <h4 className="text-3xl font-bold text-indigo-500 mb-2">
              {name}
              <br />
              <p className="text-sm font-bold text-gray-500 leading-5">
                {`${duration} @ $${price.toFixed(2)}`}
              </p>
            </h4>
            {clientService ? (
              <button
                type="button"
                className="inline-flex"
                onClick={() => clearCurrentAppointment()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 50 50"
                >
                  <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                </svg>
              </button>
            ) : (
              <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-md font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:bg-indigo-200 disabled:opacity-50 disabled:pointer-events-none"
                onClick={() => updateClientService(service)}
              >
                Book now
              </button>
            )}
          </div>
          <div className="mt-3 max-w-2xl">
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
