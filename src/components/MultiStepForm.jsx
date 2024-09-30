import { useState } from "react";
import BusinessInformation from "./BusinessInformation";
import CreateAccount from "./CreateAccount";
import StepNavigation from "./StepNavigation";

function MultiStepForm() {
  // State to track the current step
  const [currentStep, setCurrentStep] = useState(0);

  // Steps of the form
  const steps = [
    <CreateAccount />, // Step 1: Create Account Form
    <BusinessInformation />, // Step 2: Business Information Form
    <div>Step 3: Review & Submit</div>, // Step 3: Final Review (or any other step)
  ];

  // Function to check if the current step is valid (adjust logic as needed)
  const isStepValid = () => {
    // Add validation logic here if needed (e.g., form validation)
    return true; // For now, assuming every step is valid
  };

  return (
    <div className="flex flex-col items-center sm:bg-gradient-to-r from-purple-400 to-blue-500 min-h-screen py-12">
      {/* Form Container */}
      <div className="bg-white rounded-lg sm:shadow-md sm:p-6 w-full sm:w-3/4 lg:w-1/2">
        {/* Dynamic Step Content */}
        <div className="mb-6">{steps[currentStep]}</div>

        {/* Step Navigation Component */}
        <div className="w-full flex justify-between px-6">
          <StepNavigation
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            totalSteps={steps.length}
            isNextDisabled={!isStepValid()}
          />
        </div>
      </div>
    </div>
  );
}

export default MultiStepForm;
