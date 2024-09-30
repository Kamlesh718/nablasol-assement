import { useState } from "react";
import BusinessInformation from "./BusinessInformation";
import CreateAccount from "./CreateAccount";
import StepNavigation from "./StepNavigation";

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    <CreateAccount />,
    <BusinessInformation />,
    <div>Step 3: Review & Submit</div>,
  ];

  const isStepValid = () => {
    return true;
  };

  return (
    <div className="flex flex-col items-center sm:bg-gradient-to-r from-purple-400 to-blue-500 min-h-screen py-12">
      <div className="bg-white rounded-lg sm:shadow-md sm:p-6 w-full sm:w-3/4 lg:w-1/2">
        <div className="mb-6">{steps[currentStep]}</div>

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
