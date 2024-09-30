import { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import StepNavigation from "./components/StepNavigation";
import CreateAccountForm from "./components/CreateAccount";
import BusinessInformation from "./components/BusinessInformation";
import MultiStepForm from "./components/MultiStepForm";

function App() {
  const [toggleView, setToggleView] = useState(false);
  const [currentAccountStep, setCurrentAccountStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem("formData");
    return storedData ? JSON.parse(storedData) : {};
  });

  const steps = [
    <Step1 formData={formData} setFormData={setFormData} />,
    <Step2 formData={formData} setFormData={setFormData} />,
    <Step3 formData={formData} setFormData={setFormData} />,
    <Step4 formData={formData} setFormData={setFormData} />,
  ];

  const createAccountSteps = [<CreateAccountForm />, <BusinessInformation />];

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return (
          !!formData.projectName && (!!formData.client || !!formData.newClient)
        );
      case 1:
        return (
          !!formData.projectType &&
          !!formData.budgetAlertThreshold &&
          (formData.hourlyRate || formData.customRate)
        );
      case 2:
        return !!formData.view;
      case 3:
        return !!formData.permissions;
      default:
        return true;
    }
  };

  const handleToggleView = () => {
    setToggleView((toggle) => !toggle);
  };

  return (
    <div
      className={`h-screen  ${
        toggleView
          ? null
          : "flex flex-col gap-8 items-center justify-center  bg-gray-50 p-4 sm:p-6"
      }   `}
    >
      <button
        onClick={handleToggleView}
        className="absolute top-4 right-4 bg-blue-500 text-gray-200 p-4 text-lg rounded-md"
      >
        {toggleView ? "Create a project(Task-1)" : "Login Page(Task-2)"}
      </button>
      {toggleView ? (
        <>
          <MultiStepForm />
        </>
      ) : (
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 border border-gray-300 rounded-lg shadow-lg bg-white">
          <div className="flex-grow min-h-96">
            <div className="">{steps[currentStep]}</div>
          </div>
          <StepNavigation
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            totalSteps={steps.length}
            isNextDisabled={!isStepValid()}
          />
          <div className="flex justify-center gap-2">
            {steps.map((_, i) => (
              <span
                key={i}
                className={`${
                  currentStep === i
                    ? "bg-gray-500 p-2 rounded-full"
                    : "bg-gray-300 p-2 rounded-full"
                }  `}
              ></span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
