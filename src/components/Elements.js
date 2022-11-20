import React from "react";
import { useElements } from "../Context/useElements";
import Element from "./Element";

const Elements = () => {
  const { elements, success } = useElements();
  if (success) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <Element elements={elements} />
    </>
  );
};

export default React.memo(Elements);
