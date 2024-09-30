import { useState } from "react";

function BusinessInformation() {
  const [brandType, setBrandType] = useState("");
  const [documentsSigned, setDocumentsSigned] = useState(false);
  const [krogerWaiverSigned, setKrogerWaiverSigned] = useState(false);

  const [brandName, setBrandName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [taxIdNo, setTaxIdNo] = useState("");

  const handleInputBrandName = (e) => {
    setBrandName(e.target.value);
  };
  const handleInputStreetAddress = (e) => {
    setStreetAddress(e.target.value);
  };
  const handleInputCity = (e) => {
    setCity(e.target.value);
  };
  const handleInputZipcode = (e) => {
    setZipcode(e.target.value);
  };
  const handleInputTaxIdNo = (e) => {
    setTaxIdNo(e.target.value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6 ">
      <div className="bg-white rounded-lg w-full max-w-4xl p-8 sm:p-6">
        <div className="flex justify-between items-center mb-6 sm:px-4 sm:py-4  rounded-lg shadow-sm gap-4">
          <div className="text-base font-medium text-blue-500">
            Your Profile
          </div>

          <div className="hidden sm:visible h-6 border-l border-gray-300"></div>

          <div className="text-base font-medium text-blue-600">
            Business Information
          </div>

          <div className=" hidden sm:visible h-6 border-l border-gray-300"></div>

          <div className="text-base font-medium text-gray-400">
            Additional Users
          </div>
        </div>

        <form className="space-y-8">
          <div className="text-gray-400 text-base text-center mb-6">
            <span className="text-xl">Step 2</span>
            <h2 className="text-2xl font-semibold text-center mb-3 text-gray-600">
              Business Information
            </h2>
            <span className="text-center text-lg text-gray-500">
              Please,Enter information about your company
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              General Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Brand Name*
                </label>
                <input
                  type="text"
                  value={brandName}
                  onChange={handleInputBrandName}
                  placeholder="Input Your Brand Name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Brand Type*
                </label>
                <select
                  value={brandType}
                  onChange={(e) => setBrandType(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select Type of Your Brand</option>
                  <option value="local">Local</option>
                  <option value="national">National</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Street Address*
                </label>
                <input
                  type="text"
                  value={streetAddress}
                  onChange={handleInputStreetAddress}
                  placeholder="Input Your Street Address"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City*
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={handleInputCity}
                  placeholder="Input City"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Zip Code*
                </label>
                <input
                  type="text"
                  value={zipcode}
                  onChange={handleInputZipcode}
                  placeholder="Input Zip Code"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Tax ID Number*
                </label>
                <input
                  type="number"
                  value={taxIdNo}
                  onChange={handleInputTaxIdNo}
                  placeholder="Input Tax ID Number"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              Documents
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">
                  Electronically sign the agreement(s)
                </label>
                <input
                  type="checkbox"
                  checked={documentsSigned}
                  onChange={(e) => setDocumentsSigned(e.target.checked)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-400"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">
                  Non-adult beverage Kroger market supplier waiver and release
                </label>
                <input
                  type="checkbox"
                  checked={krogerWaiverSigned}
                  onChange={(e) => setKrogerWaiverSigned(e.target.checked)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-400"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              COI PDF Upload
            </h3>
            <div className="space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row items-center justify-between">
                <label className="text-sm font-medium text-gray-700">
                  Upload PDF of COI (Certificate of Insurance)
                </label>
                <input
                  type="file"
                  className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BusinessInformation;
