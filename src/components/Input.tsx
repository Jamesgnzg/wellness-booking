import { ReactElement } from "react";

interface IinputProps extends React.ComponentPropsWithoutRef<"input"> {
  name: string;
  label: string;
  optional?: boolean;
  fieldError?: string;
  autoFocus?: boolean;
  updateField: (fieldName: string, value: string) => void;
}

const Input: React.FC<IinputProps> = ({
  type,
  id,
  name,
  label,
  optional,
  value,
  placeholder,
  pattern,
  fieldError,
  autoFocus,
  updateField,
}: IinputProps): ReactElement => {
  const inputDefaultStyle =
    "py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-indigo-500 focus:outline-none focus:ring-0 disabled:opacity-50 disabled:pointer-events-none";
  const inputErrorStyle =
    "py-3 px-4 block w-full border border-red-600 rounded-lg text-sm placeholder:text-red-600 focus:border-red-600 focus:border-2 focus:outline-none focus:ring-0";

  const inputLabelDefault = "block text-sm font-medium mb-2";
  const inputLabelError = "block text-sm font-medium mb-2 text-red-600";

  return (
    <div className="mb-2">
      <label
        htmlFor={id}
        className={fieldError ? inputLabelError : inputLabelDefault}
      >
        {optional ? `${label} (Optional)` : label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className={fieldError ? inputErrorStyle : inputDefaultStyle}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          let inputValue = "";

          if (pattern) {
            const regexPattern = new RegExp(pattern, "g");
            inputValue = e.target.value.replace(regexPattern, "");
          } else {
            inputValue = e.target.value;
          }

          updateField(name, inputValue);
        }}
        autoFocus={autoFocus}
      />
      <p className="mb-5 text-sm text-red-600 dark:text-red-500">
        {fieldError}
      </p>
    </div>
  );
};

export default Input;
