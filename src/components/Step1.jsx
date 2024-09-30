import DateComponent from "./DateComponent";

function Step1({ formData, setFormData }) {
  const handleInputChange = (e) => {
    setFormData({ ...formData, projectName: e.target.value });
  };

  const handleClientChange = (e) => {
    setFormData({ ...formData, client: e.target.value, newClient: "" });
  };

  const handleNewClientChange = (e) => {
    setFormData({ ...formData, newClient: e.target.value, client: "" });
  };

  const handleNotesInput = (e) => {
    setFormData({ ...formData, notes: e.target.value || "" });
  };

  return (
    <form className="flex flex-col gap-4">
      <h2 className="font-semibold text-2xl text-center text-gray-800">
        Create a Project
      </h2>

      <div className="flex flex-col gap-3">
        <label className="text-lg font-medium text-gray-700">
          Project Name
        </label>
        <input
          type="text"
          name="projectName"
          placeholder="Enter project name here"
          value={formData.projectName || ""}
          onChange={handleInputChange}
          required
          className="mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 block w-full text-lg"
        />
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-lg font-medium text-gray-700">Client</label>
        <div className="flex gap-3">
          <select
            className="w-1/2 flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 block text-lg"
            value={formData.client || ""}
            onChange={handleClientChange}
          >
            <option value="" disabled>
              Select Client
            </option>
            <option>Client 1</option>
            <option>Client 2</option>
            <option>Client 3</option>
          </select>

          <span className="self-center text-gray-500">or</span>

          <input
            type="text"
            placeholder="+ New Client"
            name="newClient"
            value={formData.newClient || ""}
            onChange={handleNewClientChange}
            className="w-1/2 flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 block text-lg"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-lg font-medium text-gray-700">
          Project Dates
        </label>
        <DateComponent formData={formData} setFormData={setFormData} />
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-lg font-medium text-gray-700">Notes</label>
        <textarea
          className="w-full flex-grow h-28 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 block text-lg"
          placeholder="Add any project notes here"
          value={formData.notes}
          onChange={handleNotesInput}
        />
      </div>
    </form>
  );
}

export default Step1;
