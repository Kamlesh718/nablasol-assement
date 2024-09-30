function StepNavigation({
  currentStep,
  setCurrentStep,
  totalSteps,
  isNextDisabled,
}) {
  const isPrevDisabled = currentStep === 0;
  return (
    <div className="w-7/12 flex gap-3 justify-between mt-6">
      <button
        onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
        disabled={isPrevDisabled}
        className={`${
          isPrevDisabled ? "cursor-not-allowed" : null
        } text-gray-700`}
      >
        {"< Back"}
      </button>
      <button
        onClick={() =>
          setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1))
        }
        disabled={isNextDisabled}
        className={`${
          isNextDisabled ? "cursor-not-allowed" : null
        } bg-blue-500 text-gray-200 pt-1 pb-1 pl-4 pr-4 rounded-md ${
          totalSteps === currentStep + 1 ? "hidden" : null
        }`}
      >
        Next
      </button>
    </div>
  );
}

export default StepNavigation;
