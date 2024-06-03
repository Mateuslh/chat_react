import React, { useRef, useState } from "react";
import { ChatProps, MensagensProps } from "../interfaces/interfaces";
import IconSendMessage from "./IconSendMessage";
import Swal from "sweetalert2";
import TextBox from "./TextBox";

const Chat: React.FC<ChatProps> = ({
  username,
  adicionaMensagens,
  mensagensList,
  mensage,
  setMensagem,
}) => {
  const [digitando, setDigitando] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function changeValueInput(eventValue: string) {
    const fakeEvent = {
      target: { value: eventValue },
    } as React.ChangeEvent<HTMLInputElement>;
    setMensagem(fakeEvent);
  }

  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setDigitando(false);

    mensage === ""
      ? Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Vazio não dá brow 😕",
        })
      : adicionaMensagens();
    formRef.current?.reset();
    changeValueInput("");
  }

  return (
    <div className="contentChat">
      <div className="card">
        <div className="chatHeader">
          Chat - {username} - <span className="dotOnline"></span>{" "}
          {digitando ? "Digitando..." : "Online"}
        </div>
        <div className="chatWindow">
          <ul className="listMessage">
            {mensagensList.map((mensagem: MensagensProps, index: number) => {
              return (
                <TextBox
                  key={index}
                  message={mensagem.mensagens}
                  position={mensagem.user === username ? "right" : "left"}
                />
              );
            })}
          </ul>
        </div>
        <form ref={formRef} className="chatForm" onSubmit={submitForm}>
          <input
            onChange={(event) => {
              setMensagem(event);
              setDigitando(true);
            }}
            onBlur={() => {
              setDigitando(false);
            }}
            type="text"
            value={mensage}
            className="messageInput"
            placeholder="Escreva a sua mensagem..."
          />
          <button type="submit" className="sendButton">
            <IconSendMessage />
          </button>
        </form>
      </div>
      <div>{/* <button onClick={limparChat}>Limpar chat</button> */}</div>
    </div>
  );
};

export default Chat;
