import React from "react";

function FormNavigation({
  onBack,
  onNext,
  backLabel = "Back to Login",
  nextLabel = "Next Step",
}) {
  return (
    <div className="flex justify-between items-center mt-6">
      <button
        type="button"
        className="text-blue-600 hover:text-blue-800"
        onClick={onBack}
      >
        {backLabel}
      </button>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
        onClick={onNext}
      >
        {nextLabel}
      </button>
    </div>
  );
}

export default FormNavigation;
