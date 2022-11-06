import React from "react";
import Element from "./Element";
import { useElements } from "../Context/JSONContext";

const Elements = () => {
  const { elements, success } = useElements();

  // Generating Style

  return (
    <>
      <div>
        {success &&
          elements.map((element, index) => (
            <Element key={index} element={element} />
          ))}
      </div>
    </>
  );
};

export default Elements;
