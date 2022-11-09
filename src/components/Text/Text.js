import React from "react";
import { Markup } from "interweave";

const Text = ({ element }) => {
  const { newClass, content } = element.element;
  // console.log(type);
  return (
    <>
      <Markup tagName="p" className={newClass} content={content} />
    </>
  );
};

export default Text;
