import { Suspense } from "react";
import "./App.css";
import Persones from "./Component/Persones/Persones";
function App() {
  const personesPromise = fetch("./person.json").then((res) => res.json());

  return (
    <>
      <Suspense fallback={<h1>Botels Data Loade....</h1>}>
        <Persones personesPromise={personesPromise}></Persones>
      </Suspense>
    </>
  );
}

export default App;
