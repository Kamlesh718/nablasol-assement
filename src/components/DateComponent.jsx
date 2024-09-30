function DateComponent({ formData, setFormData }) {
  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(formData?.startDate || today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const formattedTomorrow = tomorrow.toISOString().split("T")[0];
  const handleStartDate = function (e) {
    setFormData({ ...formData, startDate: e.target.value });
  };

  const handleEndDate = function (e) {
    setFormData({ ...formData, endDate: e.target.value });
  };

  return (
    <>
      <div className="flex gap-4">
        <input
          type="date"
          className=" flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 block sm:text-sm cursor-pointer"
          value={formData.startDate || null}
          onChange={handleStartDate}
          min={today}
        />
        <input
          type="date"
          className=" flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 block sm:text-sm cursor-pointer"
          value={formData.endDate || null}
          onChange={handleEndDate}
          min={formattedTomorrow}
        />
      </div>
    </>
  );
}

export default DateComponent;
