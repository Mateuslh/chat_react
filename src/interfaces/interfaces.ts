import React from "react";

export interface MensagensProps {
  user: string;
  mensagens: string;
}

export interface ChatProps {
  username: string;
  children?: React.ReactNode;
  adicionaMensagens: () => void;
  mensagensList: any;
  mensage: string;
  setMensagem: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
