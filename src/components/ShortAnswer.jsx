const ShortAnswer = () => {
  return (
    <div className="lg:w-1/2 sm:w-2/3 w-full  h-auto p-5 my-3 rounded-lg border-2">
      <h1 className="text-xl font-semibold mb-4 text-gray-600">Short Answer</h1>
      <input
        type="text"
        placeholder="Your answer"
        className="w-1/2 px-3 py-1 border-b border-gray-300 rounded-md focus:outline-none"
      />
    </div>
  );
};

export default ShortAnswer;
