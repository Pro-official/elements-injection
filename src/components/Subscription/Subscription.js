import React from "react";

const Subscription = (element) => {
  const { name, type, style, content } = element.element.element;
  //   console.log(typeof style);
  return <div>{name}</div>;
};

export default Subscription;
