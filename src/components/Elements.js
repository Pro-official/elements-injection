import React from "react";
import { useElements } from "../Context/useElements";
import Element from "./Element";

const Elements = () => {
  const { elements, success } = useElements();
  return <div>{success && <Element elements={elements} />}</div>;
};

export default Elements;
