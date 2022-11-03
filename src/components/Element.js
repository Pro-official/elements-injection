import React from "react";
import Heading from "./Heading/Heading";
import Image from "./Image/Image";
import Subscription from "./Subscription/Subscription";
import Text from "./Text/Text";

const Element = (element) => {
  const { type } = element.element;
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
