import { Checkox, Header, Mcq, Paragraph, ShortAnswer } from "./components";

function App() {
  return (
    <>
      <main className="flex justify-center items-center flex-col px-5">
        <Header />
        <Mcq />
        <Checkox />
        <ShortAnswer />
        <Paragraph />
      </main>
    </>
  );
}

export default App;
