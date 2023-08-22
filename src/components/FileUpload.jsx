import { useState } from "react";
const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <div className="lg:w-1/2 sm:w-2/3 w-full  h-auto p-5 my-3 rounded-lg border-2">
      <h1 className="text-xl font-semibold mb-4 text-gray-600">File Upload</h1>
      <input
        type="file"
        accept=".pdf,.doc,.docx,.txt"
        onChange={handleFileChange}
        className="w-full px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {selectedFile && (
        <p className="mt-2">
          Selected file:{" "}
          <span className="font-semibold">{selectedFile.name}</span>
        </p>
      )}
    </div>
  );
};

export default FileUpload;
