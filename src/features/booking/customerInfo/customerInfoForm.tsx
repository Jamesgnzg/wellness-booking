import { ReactElement, useState } from "react";
import Input from "../../../components/Input";
import { useAppointment } from "../../../context/AppointmentContext";

interface IFormError {
  firstNameError: string;
  lastNameError: string;
  phoneNumberError: string;
  emailError: string;
}

const CustomerInfoForm: React.FC = (): ReactElement => {
  const { appointmentDetails, updateAppointmentDetails, updateBookingStep } =
    useAppointment();
  const { firstName, lastName, phoneNumber, emailAddress } =
    appointmentDetails.clientInfo;

  const [formError, setFormErrors] = useState<IFormError>({
    firstNameError: "",
    lastNameError: "",
    phoneNumberError: "",
    emailError: "",
  });

  const submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const isValid = isFormValid();

    if (isValid) {
      showNextStep();
    }
  };

  const isFormValid = (): boolean => {
    const errors = {
      firstNameError: "",
      lastNameError: "",
      phoneNumberError: "",
      emailError: "",
    };
    let hasErrors = false;

    setFormErrors({
      firstNameError: "",
      lastNameError: "",
      phoneNumberError: "",
      emailError: "",
    });

    if (firstName == "") {
      errors.firstNameError = "First name is required";
      hasErrors = true;
    }

    if (lastName == "") {
      errors.lastNameError = "Last name is required";
      hasErrors = true;
    }

    if (emailAddress == "") {
      errors.emailError = "Email is required";
      hasErrors = true;
    }

    setFormErrors({ ...errors });
    return !hasErrors;
  };

  const showNextStep = () => {
    updateBookingStep("Confirmation");
  };

  return (
    <>
      <div className="relative m-auto max-w-4xl p-1">
        <form onSubmit={submitForm}>
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              id="firstName"
              name="firstName"
              label="First Name"
              placeholder="Enter First name"
              updateField={updateAppointmentDetails}
              fieldError={formError.firstNameError}
              value={firstName}
              required
              autoFocus={true}
            />
            <Input
              type="text"
              id="lastName"
              name="lastName"
              label="Last Name"
              placeholder="Enter Last name"
              updateField={updateAppointmentDetails}
              fieldError={formError.lastNameError}
              value={lastName}
              required
              autoFocus={false}
            />
          </div>
          <Input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            optional={true}
            placeholder="Enter Phone number (E.g. +63-9802521993)"
            pattern="+[0-9]{2}-[0-9]{10}"
            updateField={updateAppointmentDetails}
            fieldError={formError.phoneNumberError}
            value={phoneNumber}
            autoFocus={false}
          />
          <Input
            type="email"
            id="emailAddress"
            name="emailAddress"
            label="Email"
            placeholder="Enter Email address"
            updateField={updateAppointmentDetails}
            fieldError={formError.emailError}
            value={emailAddress}
            required
            autoFocus={false}
          />
          <button
            type="submit"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-md font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:bg-indigo-200 disabled:opacity-50 disabled:pointer-events-none"
          >
            Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default CustomerInfoForm;
