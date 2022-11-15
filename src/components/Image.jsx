import React from "react";
import ImageStyle from "../Styles/ImageStyle";

const Image = ({ element }) => {
  const { id, type, style, attr } = element;
  ImageStyle(`${type}-${id}`, style);

  return <img className={`${type}-${id}`} {...attr} alt={attr.alt} />;
};

export default Image;
