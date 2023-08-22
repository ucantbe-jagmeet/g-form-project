import {
  Checkox,
  DropDown,
  FileUpload,
  Header,
  Mcq,
  Paragraph,
  ShortAnswer,
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
      </main>
    </>
  );
}

export default App;
