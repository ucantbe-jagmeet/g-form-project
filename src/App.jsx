import {
  Checkox,
  DropDown,
  FileUpload,
  Header,
  LinearScale,
  Mcq,
  MultipleChoiceGrid,
  Paragraph,
  ShortAnswer,
  TickBoxGrid,
} from "./components";

function App() {
  return (
    <>
      <main className="flex justify-center items-center flex-col px-10">
        <Header />
        <Mcq />
        <Checkox />
        <ShortAnswer />
        <Paragraph />
        <DropDown />
        <FileUpload />
        <LinearScale />
        <MultipleChoiceGrid />
        <TickBoxGrid />
        <div className="h-20 sm:w-1/2 w-full mb-10 flex items-center justify-between sm:px-10">
          <button className="bg-blue-500 px-3 py-1 rounded-md tracking-wider text-white">
            Submit
          </button>
          <button className="bg-red-500 px-3 py-1  rounded-md tracking-wider text-white  ">
            Clear Form
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
