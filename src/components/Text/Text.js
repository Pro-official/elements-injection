import React from "react";
import { Style } from "react-style-tag";

const Text = (element) => {
  const { name, type, style, content } = element.element.element;
  //   console.log(element.element.element);
  return (
    <div>
      <p className="text">{type}</p>

      <Style>{`
          .text {
            color: red;
            background-color: black;
          }
        `}</Style>
    </div>
  );
};

export default Text;
