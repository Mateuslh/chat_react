import React from "react";

type TextBoxProps = {
  message: string;
  position: "left" | "right";
};

const TextBox: React.FC<TextBoxProps> = ({ message, position }) => {
  return (
    <li
      className={`${
        position === "right" ? "boxTextUserPrimary" : "boxTextUserSecondary"
      }`}
    >
      {message}
    </li>
  );
};

export default TextBox;
