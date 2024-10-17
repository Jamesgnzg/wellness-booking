import { ReactElement } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface IAppDatePickerProps {
  selectedDate: Date;
  minDate: Date;
  setDate: (newDate: Date) => void;
}

const AppDatePicker: React.FC<IAppDatePickerProps> = ({
  selectedDate,
  minDate,
  setDate,
}: IAppDatePickerProps): ReactElement => {
  return (
    <DatePicker
      selected={selectedDate}
      minDate={minDate}
      onChange={(date) => setDate(date)}
      inline
    />
  );
};

export default AppDatePicker;
