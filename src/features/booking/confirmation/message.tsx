import { ReactElement } from "react";
import SampleQR from "../../../assets/images/SampleQR.png";

const ConfirmationMessage: React.FC = (): ReactElement => {
  return (
    <>
      <div className="min-h-60 flex flex-col bg-white">
        <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            Easily book and manage appointments with Veyor Wellness Mobile App.
          </h3>
          <img className="h-[150px] mt-5 mb-5" src={SampleQR} alt="Sample QR" />
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            Scan the QR to download and experience relaxed booking.
          </h3>
        </div>
      </div>
    </>
  );
};

export default ConfirmationMessage;
