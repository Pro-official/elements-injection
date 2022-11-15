import React from "react";
import SectionStyle from "../Styles/SectionStyle";
import components from "./index";
import TypeCamelCase from "../Styles/TypeCamelCase";

const Column = ({ column }) => {
  const { content, id, type, style } = column;
  SectionStyle(`${type}-${id}`, style);
  return (
    <div className={`${type}-${id}`}>
      {content.map((element, index) => {
        const Component = components[TypeCamelCase(element.type)];
        return <Component key={index} element={element} />;
      })}
    </div>
  );
};

export default Column;
