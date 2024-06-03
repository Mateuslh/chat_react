import React, { useState } from "react";
import Chat from "./components/Chat";
import "./App.css";
import { MensagensProps } from "./interfaces/interfaces";

const App: React.FC = () => {
  const [mensagensList, setMensagensList] = useState<MensagensProps[]>([]);
  const [mensagemKeniel, setMensagemKeniel] = useState<string>("");
  const [mensagemJoao, setMensagemJoao] = useState<string>("");

  function adicionaMensagem(username: string, state: string) {
    setMensagensList((prevstate) => [
      ...prevstate,
      { user: username, mensagens: state },
    ]);
  }

  return (
    <div className="bodyHome">
      <Chat
        setMensagem={(e) => setMensagemKeniel(e.target.value)}
        username="Keniel"
        adicionaMensagens={() => adicionaMensagem("Keniel", mensagemKeniel)}
        mensage={mensagemKeniel}
        mensagensList={mensagensList}
      />

      <Chat
        setMensagem={(e) => setMensagemJoao(e.target.value)}
        username="João"
        adicionaMensagens={() => adicionaMensagem("João", mensagemJoao)}
        mensage={mensagemJoao}
        mensagensList={mensagensList}
      />
    </div>
  );
};

export default App;
