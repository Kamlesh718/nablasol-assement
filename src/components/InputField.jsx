const InputField = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  required = true,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-base font-normal text-gray-600">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="border rounded-lg p-4 w-full text-base outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputField;
