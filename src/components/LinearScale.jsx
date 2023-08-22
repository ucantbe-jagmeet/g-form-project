import { useState } from "react";

const LinearScale = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleValueChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="lg:w-1/2 sm:w-2/3 w-full h-auto p-5 my-3 rounded-lg border-2">
      <h1 className="text-xl font-semibold mb-4 text-gray-600">Linear Scale</h1>
      <div className="flex justify-between items-end xl:px-10">
        <span>Worst</span>
        <div className="flex md:space-x-10 text-lg">
          {/* Map through an array of values */}
          {[1, 2, 3, 4, 5].map((value) => (
            <label
              key={value}
              className="cursor-pointer flex flex-col items-center space-y-5"
            >
              <span>{value}</span>
              <input
                type="radio"
                name="linear-scale"
                value={value}
                checked={selectedValue === String(value)}
                onChange={handleValueChange}
                className="cursor-pointer lg:h-5 lg:w-5 xl:m-3 m-2 text-blue-500"
              />
            </label>
          ))}
        </div>
        <span>Best</span>
      </div>
    </div>
  );
};

export default LinearScale;
