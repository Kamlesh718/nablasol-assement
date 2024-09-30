import EveryoneIconImage from "../assets/everyone.png";
import AdminIconImage from "../assets/admin.png";
import SpecificPeopleIconImage from "../assets/specificPeople.png";

function Step4({ formData, setFormData }) {
  const handlePermissionChange = (role) => {
    setFormData({ ...formData, permissions: role });
  };

  // Who Can Manage Projects 'WCMP'
  const WCMP = [
    {
      role: "everyone",
      logo: EveryoneIconImage,
      label: "Everyone",
      description:
        "All users can now see it, but guest cannot access the project",
    },
    {
      role: "admin",
      logo: AdminIconImage,
      label: "Only Admin's",
      description: "Only Admin can manage everything",
    },
    {
      role: "specificPeople",
      logo: SpecificPeopleIconImage,
      label: "Only to Specific people",
      description: "Only some specific people can able to see it",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save the formData to localStorage
    localStorage.setItem("formData", JSON.stringify(formData));

    /*
    //To download the formData in json format
    // Save the data as a JSON file
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const downloadUrl = URL.createObjectURL(dataBlob);
    
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "formData.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    */

    alert("Project created successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-semibold text-2xl text-center text-gray-800 mb-4">
        Who Can Manage Projects
      </h2>
      <span className="text-center align-super text-sm text-gray-400 font-medium mb-4">
        Don&apos;t panic - You can also customize the types in settings
      </span>

      {formData.view === "list" ? (
        <div>
          <ul className="">
            {WCMP.map((li, i) => {
              return (
                <li
                  key={i}
                  className={`outline-none ${
                    formData.permissions === li.role ? "outline-blue-500" : null
                  } flex items-center mb-4 gap-1 cursor-pointer border p-2 bg-gray-100 rounded-md transition-transform transform hover:scale-105`}
                  onClick={() => handlePermissionChange(li.role)}
                >
                  <img
                    src={li.logo}
                    className="w-12 h-12 mr-2"
                    alt={li.label}
                  />{" "}
                  <div className="flex flex-col">
                    <label className="font-semibold">{li.label}</label>
                    <span className="text-gray-500 text-sm">
                      {li.description}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : formData.view === "board" ? (
        <div className="grid grid-cols-2 gap-4">
          {WCMP.map((li, i) => (
            <div
              key={i}
              className={`border p-4 bg-gray-100 rounded-md flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105 ${
                formData.permissions === li.role
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
              onClick={() => handlePermissionChange(li.role)}
            >
              <img src={li.logo} className="w-16 h-16 mb-2" alt={li.label} />
              <label className="font-semibold text-center">{li.label}</label>
              <span className="text-gray-500 text-sm text-center">
                {li.description}
              </span>
            </div>
          ))}
        </div>
      ) : null}

      <div className="flex justify-center  mt-6">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Create a Project
        </button>
      </div>
    </form>
  );
}

export default Step4;
