function ProjectTypeToggle({ formData, handleTypeChange }) {
  return (
    <div className="flex justify-center w-full ">
      <button
        type="button"
        onClick={() => handleTypeChange("timeMaterials")}
        className={` px-4 py-2 border rounded-l-lg text-center text-md ${
          formData.projectType === "timeMaterials"
            ? "bg-blue-500 text-white border-blue-500"
            : "bg-white text-gray-700 border-gray-300"
        }`}
      >
        Time & Materials
      </button>
      <button
        type="button"
        onClick={() => handleTypeChange("fixedFee")}
        className={`px-4 py-2 border  text-md text-center ${
          formData.projectType === "fixedFee"
            ? "bg-blue-500 text-white border-blue-500"
            : "bg-white text-gray-700 border-gray-300"
        }`}
      >
        Fixed Fee
      </button>
      <button
        type="button"
        onClick={() => handleTypeChange("nonBillable")}
        className={`px-4 py-2 border rounded-r-lg text-md ${
          formData.projectType === "nonBillable"
            ? "bg-blue-500 text-white border-blue-500"
            : "bg-white text-gray-700 border-gray-300"
        }`}
      >
        Non-Billable
      </button>
    </div>
  );
}

export default ProjectTypeToggle;
