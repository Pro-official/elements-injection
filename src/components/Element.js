import React from "react";
import { Helmet } from "react-helmet";
import { useElements } from "../Context/JSONContext";
import Heading from "./Heading/Heading";
import Image from "./Image/Image";
import Subscription from "./Subscription/Subscription";
import Text from "./Text/Text";

const Element = (element) => {
  const { type, style, newClass } = element.element;
  // console.log(newClass);

  // Generating Style
  let nStyle = "";
  for (const property in style) {
    var newStyle = `${property}: ${style[property]}`;
    newStyle = newStyle
      .replace(/([A-Z])/g, "-$1")
      .trim()
      .toLowerCase();
    nStyle = nStyle + "\n" + newStyle + ";";
  }

  const withClass = `.${newClass} 
{${nStyle}
}`;

  return (
    <>
      {type === "heading" && <Heading element={element} />}
      {type === "text" && <Text element={element} />}
      {type === "image" && <Image element={element} />}
      {type === "subscription" && <Subscription element={element} />}
    </>
  );
};

export default Element;
