import { Checkox, Header, Mcq } from "./components";

function App() {
  return (
    <>
      <main className="flex justify-center items-center flex-col">
        <Header />
        <Mcq />
        <Checkox />
      </main>
    </>
  );
}

export default App;
