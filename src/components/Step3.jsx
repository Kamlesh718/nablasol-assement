import ListViewImage from "../assets/listView.png";
import BoardViewImage from "../assets/boardView.png";

function Step3({ formData, setFormData }) {
  const handleViewChange = (view) => {
    setFormData({ ...formData, view });
  };

  return (
    <form className="flex flex-col gap-4 ">
      <h2 className="font-semibold text-2xl text-center text-gray-800">
        Select a View
      </h2>
      <div className="flex flex-col gap-4 items-center">
        <div
          className={`px-4 py-2 rounded-lg w-1/2 cursor-pointer outline-none ${
            formData.view === "list"
              ? "outline-blue-500 "
              : "outline-gray-400 text-gray-700"
          }`}
          onClick={() => handleViewChange("list")}
        >
          <img src={ListViewImage} alt="list-view" />
          <span className="text-center align-super text-sm  font-medium">
            List
          </span>
        </div>
        <div
          className={`px-4 py-2 rounded-lg w-1/2 cursor-pointer outline-none ${
            formData.view === "board"
              ? "outline-blue-500 "
              : "outline-gray-400 text-gray-700"
          }`}
          onClick={() => handleViewChange("board")}
        >
          <img src={BoardViewImage} alt="board-view" />
          <span className="text-center align-super text-sm text-black font-medium">
            Board
          </span>
        </div>
      </div>
    </form>
  );
}

export default Step3;
