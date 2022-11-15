import React from "react";
import ButtonStyle from "../Styles/ButtonStyle";

const Button = ({ element }) => {
  const { id, type, content, style } = element;
  ButtonStyle(`${type}-${id}`, style);
  return <button className={`${type}-${id}`}>{content}</button>;
};

export default Button;
