import React from "react";
import { Markup } from "interweave";
import HeadingStyle from "../Styles/HeadingStyle";

const Heading = ({ element }) => {
  const { id, type, content, style, titleType } = element;

  HeadingStyle(`${type}-${id}`, style);
  return (
    <Markup className={`${type}-${id}`} tagName={titleType} content={content} />
  );
};

export default Heading;
