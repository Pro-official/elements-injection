import React from "react";

const Image = (element) => {
  const { attr, newClass, type } = element.element.element;
  return (
    <>
      {type === "image" && (
        <img className={newClass} src={attr.src} alt={attr.alt} />
      )}
    </>
  );
};

export default Image;
