import React from "react";
// import SectionStyle from "../Styles/SectionStyle";

const Section = ({ children, elements }) => {
  const { type, id } = elements;
  if (elements) {
    // SectionStyle(`${type}-${id}`, style);
  }

  return <section className={`${type}-${id}`}>{children}</section>;
};

export default Section;
