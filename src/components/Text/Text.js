import React from "react";
import { Markup } from "interweave";

const Text = (element) => {
  const { content, newClass, type } = element.element.element;
  // console.log(newClass);
  return (
    <>
      {type === "text" && (
        <p className={newClass}>
          <Markup tagName="p" className={newClass} content={content} />
        </p>
      )}
    </>
  );
};

export default Text;
