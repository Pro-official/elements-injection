import React from "react";
import { Markup } from "interweave";

const Text = (element) => {
  const { content, newClass, type } = element.element.element;
  // console.log(newClass);
  return (
    <div>
      {type === "text" && <Markup className={newClass} content={content} />}
    </div>
  );
};

export default Text;
