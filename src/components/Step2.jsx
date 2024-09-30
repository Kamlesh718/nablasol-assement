import InputWithSelect from "./InputWithSelect";
import ProjectTypeToggle from "./ProjectTypeToggle";

function Step2({ formData, setFormData }) {
  const handleTypeChange = (type) => {
    setFormData({ ...formData, projectType: type });
  };

  const handleHourlyRateChange = (e) => {
    setFormData({ ...formData, hourlyRate: e.target.value });
  };

  const handleCustomRateChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      customRate: e.target.value,
    }));
  };

  const handleHoursPerPeronChange = (e) => {
    setFormData({ ...formData, hoursPerPerson: e.target.value });
  };

  const handleBudgetResetChange = (e) => {
    setFormData({
      ...formData,
      budgetResetsMonthly: e.target.checked || false,
    });
  };

  const handleEmailAlertsChange = (e) => {
    setFormData({
      ...formData,
      emailAlertsOnBudgetExceed: e.target.checked,
    });
  };

  const handleAlertPercentageChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      budgetAlertThreshold: e.target.value,
    }));
  };

  return (
    <form className="flex flex-col gap-3">
      <h2 className="font-semibold text-2xl text-center text-gray-800">
        Project Type
      </h2>

      <span className="text-center align-super text-sm text-gray-400 font-medium">
        Don&apos;t panic - You can also customize the types in settings
      </span>

      <ProjectTypeToggle
        formData={formData}
        handleTypeChange={handleTypeChange}
      />

      <InputWithSelect
        label="Hourly"
        description="We need hourly rates to track your project's billable amount"
        options={[
          { label: "₹500/hour", value: "500" },
          { label: "₹1000/hour", value: "1000" },
          { label: "₹1500/hour", value: "1500" },
          { label: "₹2000/hour", value: "2000" },
          { label: "₹2500/hour", value: "2500" },
          { label: "Custom Rate", value: "custom" },
        ]}
        selectValue={formData.hourlyRate}
        onSelectChange={handleHourlyRateChange}
        inputValue={formData.customRate}
        onInputChange={handleCustomRateChange}
        selectPlaceholder="Project Hourly Rate"
        inputPlaceholder="Enter Custom Rate (₹)"
        showInput={formData.hourlyRate === "custom"}
      />

      <InputWithSelect
        label="Budget"
        description="We need hourly rates to track your project's billable amount"
        options={[
          { label: "1", value: "1" },
          { label: "2", value: "2" },
          { label: "3", value: "3" },
        ]}
        selectValue={formData.hoursPerPerson}
        onSelectChange={handleHoursPerPeronChange}
        selectPlaceholder="Hours Per Person"
        showInput={false}
      />

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="budgetResetsMonthly"
          checked={formData.budgetResetsMonthly || false}
          onChange={handleBudgetResetChange}
          className="h-5 w-5 text-blue-500"
        />
        <label
          htmlFor="budgetResetsMonthly"
          className="text-lg font-medium text-gray-700"
        >
          Budget resets every month
        </label>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="sendAlert"
          checked={formData.emailAlertsOnBudgetExceed || false}
          onChange={handleEmailAlertsChange}
          className="h-5 w-5 text-blue-500"
        />
        <label
          htmlFor="sendAlert"
          className="text-lg font-medium text-gray-700"
        >
          Send email alerts if project exceeds budget percentage
        </label>
      </div>

      {formData.emailAlertsOnBudgetExceed && (
        <div className="flex items-center gap-2">
          <label
            htmlFor="alertPercentage"
            className="text-lg font-medium text-gray-700"
          >
            Alert at %
          </label>
          <input
            type="number"
            id="alertPercentage"
            value={+formData.budgetAlertThreshold}
            onChange={handleAlertPercentageChange}
            className="w-1/4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 block text-lg"
            min={1}
            max={100}
            placeholder="80"
          />
        </div>
      )}
    </form>
  );
}

export default Step2;
