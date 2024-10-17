import { ReactElement } from "react";
import ConfirmationMessage from "./message";
import ConfirmationSummary from "./summary";

const ConfirmationBooking: React.FC = (): ReactElement => {
  return (
    <>
      <div className="w-full p-3">
        <div className="md:flex flex-nowrap lg:flex p-2 gap-10">
          <ConfirmationSummary />
          <ConfirmationMessage />
        </div>
      </div>
    </>
  );
};

export default ConfirmationBooking;
