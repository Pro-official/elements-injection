import React from "react";
import SectionStyle from "../Styles/SectionStyle";
import Row from "./Row";

const Section = ({ section }) => {
  const { id, style, content, type } = section;
  SectionStyle(`${type}-${id}`, style);

  return (
    <section className={`${type}-${id}`}>
      {content.map((row, index) => {
        return <Row key={index} row={row} />;
      })}
    </section>
  );
};

export default Section;
