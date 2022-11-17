import React from "react";
import SectionStyle from "../Styles/SectionStyle";

const Column = ({ elements, children }) => {
  const { id, type, style } = elements;
  SectionStyle(`${type}-${id}`, style);
  return <div className={`${type}-${id}`}>{children}</div>;
};

export default Column;
