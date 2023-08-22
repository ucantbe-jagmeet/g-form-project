import { useState } from "react";

const DropDown = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { id: 1, text: "Option 1" },
    { id: 2, text: "Option 2" },
    { id: 3, text: "Option 3" },
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="lg:w-1/2 sm:w-2/3 w-full  h-auto p-5 my-3 rounded-lg border-2">
      <h1 className="text-xl font-semibold mb-4 text-gray-600">Drop Down</h1>

      <select
        value={selectedOption}
        onChange={handleOptionChange}
        className="w-1/3 px-4 py-2 border border-gray-300 rounded-md outline-none"
      >
        <option value="" disabled>
          Choose
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.text}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
