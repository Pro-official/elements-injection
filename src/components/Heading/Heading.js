import React from "react";
import { Markup } from "interweave";

const Heading = (element) => {
  const { content, newClass, type } = element.element.element;
  // console.log(newClass);

  return (
    <>
      {type === "heading" && (
        <Markup className={newClass} tagName="h1" content={content} />
      )}
    </>
  );
};

export default Heading;
