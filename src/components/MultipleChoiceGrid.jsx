import { useState } from "react";
const MultipleChoiceGrid = () => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (rowId, colId, optionId) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [`${rowId}-${colId}`]: optionId,
    }));
  };

  return (
    <div className="lg:w-1/2 sm:w-2/3 w-full  h-auto p-5 my-3 rounded-lg border-2">
      <h1 className="text-xl font-semibold mb-4 text-gray-600">
        Multiple Choice Grid
      </h1>
      <table className="w-full mx-3">
        <thead>
          <tr>
            <th></th>
            {[1, 2, 3].map((colId) => (
              <th key={colId} className="text-center">
                Column {colId}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((rowId) => (
            <tr key={rowId}>
              <th className="text-start">Row {rowId}</th>
              {[1, 2, 3].map((colId) => (
                <td key={colId} className="text-center ">
                  <input
                    type="radio"
                    name={`row-${rowId}`}
                    value={colId}
                    checked={selectedOptions[`${rowId}-${colId}`] === colId}
                    onChange={() => handleOptionChange(rowId, colId, colId)}
                    className="cursor-pointer h-5 w-5 m-3"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MultipleChoiceGrid;
