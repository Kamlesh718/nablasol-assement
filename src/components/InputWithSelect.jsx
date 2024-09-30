const InputWithSelect = ({
  label,
  description,
  options,
  selectValue,
  onSelectChange,
  inputValue,
  onInputChange,
  selectPlaceholder,
  inputPlaceholder,
  showInput = true,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-lg font-medium text-gray-700">{label}</label>
      {description && (
        <span className="text-left align-super text-sm text-gray-400 font-medium mb-3">
          {description}
        </span>
      )}
      <div className={`flex ${showInput ? "gap-3" : ""}`}>
        <select
          value={selectValue || ""}
          onChange={onSelectChange}
          className="w-full flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 block text-lg"
        >
          <option value="" disabled>
            {selectPlaceholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {showInput && (
          <input
            type="number"
            value={inputValue || ""}
            onChange={onInputChange}
            placeholder={inputPlaceholder}
            className="w-1/2 flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 block text-lg"
          />
        )}
      </div>
    </div>
  );
};

export default InputWithSelect;
