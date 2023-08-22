import { useState } from "react";

const TickBoxGrid = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (rowId, colId) => {
    const optionId = `${rowId}-${colId}`;
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
    } else {
      setSelectedOptions([...selectedOptions, optionId]);
    }
  };

  return (
    <div className="lg:w-1/2 sm:w-2/3 w-full h-auto p-5 my-3 rounded-lg border-2">
      <h1 className="text-xl font-semibold mb-4 text-gray-600">
        Checkbox Grid
      </h1>
      <table className="w-full">
        <thead>
          <tr>
            <th></th>
            {[1, 2, 3].map((colId) => (
              <th key={colId} className="text-center text-sm sm:text-md">
                Column {colId}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((rowId) => (
            <tr key={rowId}>
              <th className=" text-start text-sm sm:text-md">Row {rowId}</th>
              {[1, 2, 3].map((colId) => (
                <td key={colId} className="text-center">
                  <input
                    type="checkbox"
                    name={`row-${rowId}`}
                    value={colId}
                    checked={selectedOptions.includes(`${rowId}-${colId}`)}
                    onChange={() => handleOptionChange(rowId, colId)}
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

export default TickBoxGrid;
