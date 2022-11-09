import React from "react";

const Image = ({ element }) => {
  const { newClass, attr } = element.element;
  // console.log(attr);
  return (
    <>
      <img className={newClass} src={attr.src} alt={attr.alt} />{" "}
    </>
  );
};

export default Image;
