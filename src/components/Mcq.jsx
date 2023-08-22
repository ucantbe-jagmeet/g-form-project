import { useState } from "react";

const Mcq = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 1, text: "Option 1" },
    { id: 2, text: "Option 2" },
    { id: 3, text: "Option 3" },
  ];

  const handleOptionChange = (optionId) => {
    setSelectedOption(optionId);
  };
  return (
    <div className="lg:w-1/2 w-2/3 h-auto p-5 my-3 rounded-lg border-2">
      <h1 className="text-xl font-semibold mb-4 text-gray-600">MCQ</h1>
      <div className="space-y-2 px-5">
        {options.map((option) => (
          <label
            key={option.id}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="radio"
              name="mcq"
              value={option.id}
              checked={selectedOption === option.id}
              onChange={() => handleOptionChange(option.id)}
              className="w-4 h-4 text-blue-300"
            />
            <span>{option.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Mcq;