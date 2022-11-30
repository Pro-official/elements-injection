import React from "react";

const Button = ({ element }) => {
  const { id, type, content } = element;
  return <button className={`${type}-${id}`}>{content}</button>;
};

export default Button;
