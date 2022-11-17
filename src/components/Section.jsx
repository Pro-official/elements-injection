import React from "react";
import SectionStyle from "../Styles/SectionStyle";

const Section = ({ children, elements }) => {
  const { style, type, id } = elements;
  if (elements) {
    SectionStyle(`${type}-${id}`, style);
  }
  // console.log(content);

  return <section className={`${type}-${id}`}>{children}</section>;
};

export default Section;
