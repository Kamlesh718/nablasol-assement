import { useState } from "react";
import InputField from "./InputField";

function CreateAccount() {
  const [accountFormData, setAccountFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountFormData({ ...accountFormData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(accountFormData);
  };

  return (
    <div className=" flex flex-col justify-center items-center  p-12">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-500">
        Create New Account
      </h2>
      <div className="bg-white sm:p-8 rounded-xl  w-full ">
        <div className="flex justify-between items-center mb-6 sm:px-4 sm:py-4  rounded-lg shadow-sm gap-4">
          <div className="text-base font-medium text-blue-600">
            Your Profile
          </div>

          <div className="hidden sm:visible h-6 border-l border-gray-300"></div>

          <div className="text-base font-medium text-gray-600">
            Business Information
          </div>

          <div className=" hidden sm:visible h-6 border-l border-gray-300"></div>

          <div className="text-base font-medium text-gray-400">
            Additional Users
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="text-gray-400 text-base text-center mb-6">
            <span className="text-xl">Step 1</span>
            <h2 className="text-2xl font-semibold text-center mb-3 text-gray-600">
              Your Profile
            </h2>
            <span className="text-center text-lg text-gray-500">
              Enter the login information for your account.
              <br /> You will be able to create additional users after
              registering
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <InputField
              label={"First Name"}
              type={"text"}
              name={"firstName"}
              placeholder={"Input Your First Name"}
              value={accountFormData.firstName}
              onChange={handleChange}
              required={true}
            />
            <InputField
              label={"Last Name"}
              type={"text"}
              name={"lastName"}
              placeholder={"Input Your Last Name"}
              value={accountFormData.lastName}
              onChange={handleChange}
              required={true}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <InputField
              label={"Email"}
              type={"email"}
              name={"email"}
              placeholder={"Input Your Email"}
              value={accountFormData.email}
              onChange={handleChange}
              required={true}
            />
            <InputField
              label={"Phone No"}
              type={"tel"}
              name={"phoneNumber"}
              placeholder={"Input Your Phone Number"}
              value={accountFormData.phoneNumber}
              onChange={handleChange}
              required={true}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <InputField
              label={"Password"}
              type={"password"}
              name={"password"}
              placeholder={"Input Your Password"}
              value={accountFormData.password}
              onChange={handleChange}
              required={true}
            />
            <InputField
              label={"Confirm Password"}
              type={"password"}
              name={"confirmPassword"}
              placeholder={"Confirm Password"}
              value={accountFormData.confirmPassword}
              onChange={handleChange}
              required={true}
            />
          </div>
        </form>
      </div>
      {/* <div className="w-1/2 mt-4 flex justify-end">
        <button
          type="submit"
          className="px-7 bg-purple-600 text-white rounded-lg py-3 text-base font-semibold hover:bg-purple-700 transition  duration-300"
        >
          Next Step
        </button>
      </div> */}
    </div>
  );
}

export default CreateAccount;
