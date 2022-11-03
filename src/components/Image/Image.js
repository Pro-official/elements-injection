import React from "react";

const Image = (element) => {
  const { name, type, style } = element.element.element;
  return <div>{name}</div>;
};

export default Image;
