import { useState } from "react";

const Paragraph = () => {
  const [answer, setAnswer] = useState("");

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };
  return (
    <div className="lg:w-1/2 sm:w-2/3 w-full  h-auto p-5 my-3 rounded-lg border-2">
      <h1 className="text-xl font-semibold mb-4 text-gray-600">Paragraph</h1>
      <textarea
        value={answer}
        onChange={handleAnswerChange}
        placeholder="Your answer here"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
        rows="4"
      />
    </div>
  );
};

export default Paragraph;
