import React from "react";
import { Markup } from "interweave";

const Heading = ({ element }) => {
  const { newClass, content, type } = element.element;
  // console.log(newClass, content, type);

  return (
    <>
      {type === "Heading" && (
        <Markup className={newClass} tagName="h1" content={content} />
      )}
    </>
  );
};

export default Heading;
