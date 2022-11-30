import React from "react";
import { useElements } from "../Context/useElements";
import Element from "./Element";
import { Helmet } from "react-helmet";
import styleGenerate from "../Styles/Generation";

const Elements = () => {
  const { elements, success } = useElements();
  const allStyle = styleGenerate(elements).join("").toString();
  // console.log(st);
  if (success) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <Helmet>
        <style>{allStyle}</style>
      </Helmet>
      <Element elements={elements} />
    </>
  );
};

export default Elements;
