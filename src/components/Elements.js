import React from "react";
import { useElements } from "../Context/useElements";
import Section from "./Section";

const Elements = () => {
  const { elements, success } = useElements();
  return (
    <div>
      {success &&
        elements.map((section) => {
          return <Section key={section.id} section={section} />;
        })}
    </div>
  );
};

export default Elements;
