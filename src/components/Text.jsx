import React from "react";
import { Markup } from "interweave";
import TextStyle from "../Styles/TextStyle";

const Text = ({ element }) => {
  const { type, id, content, style } = element;
  TextStyle(`${type}-${id}`, style);
  return <Markup tagName="p" className={`${type}-${id}`} content={content} />;
};

export default Text;
