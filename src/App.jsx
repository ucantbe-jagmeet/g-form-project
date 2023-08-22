import { Checkox, Header, Mcq, ShortAnswer } from "./components";

function App() {
  return (
    <>
      <main className="flex justify-center items-center flex-col px-5">
        <Header />
        <Mcq />
        <Checkox />
        <ShortAnswer />
      </main>
    </>
  );
}

export default App;
