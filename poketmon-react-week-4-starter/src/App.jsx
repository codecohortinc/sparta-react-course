import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import PokemonsContainer from "./components/PokemonsContainer";
import TypesBar from "./components/TypesBar";
import { PokemonModalProvider } from "./context/PokemonModalProvider";

function App() {
  const [type, setType] = useState("ice");

  return (
    <PokemonModalProvider>
      <div className="wrapper">
        <h1 className="logo-pokemon">포켓몬 도감</h1>

        <TypesBar toggleType={setType} />
        <PokemonsContainer type={type} />
        <Modal />
      </div>
    </PokemonModalProvider>
  );
}

export default App;
