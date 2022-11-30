import React from "react";

const Image = ({ element }) => {
  const { id, type, attr } = element;

  return <img className={`${type}-${id}`} {...attr} alt={attr.alt} />;
};

export default Image;
