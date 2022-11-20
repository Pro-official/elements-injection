import React from "react";
import { ultimateStyles } from "../Styles/ultimateStyles";
import SectionStyle from "../Styles/SectionStyle";

const Column = ({ elements, children }) => {
  const { id, type, style } = elements;
  // ultimateStyles(`${type}-${id}`, style);
  return <div className={`${type}-${id}`}>{children}</div>;
};

export default Column;
