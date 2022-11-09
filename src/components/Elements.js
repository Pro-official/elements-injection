import React from "react";
import Element from "./Element";
import { useElements } from "../Context/JSONContext";
// import loadable from "@loadable/component";

// const AsyncPage = loadable((props) => {
//   let yo = props.type.charAt(0).toUpperCase() + props.type.slice(1);
//   import(`./${yo}/${yo}`);
// });

// function filterElement(elements) {

//   return elements
// }

const Elements = () => {
  const { elements, success } = useElements();
  // var emptyType = "";
  // elements
  //   .filter((el) => el.type === `${emptyType}${el.type}`)
  //   .map((el) => console.log(`${emptyType} ${el.type}`));
  return (
    <>
      <div>
        {success &&
          elements.map((element, index) => (
            <Element key={index} element={element} />
            // console.log(element)
            // <AsyncPage type={element.type} />
          ))}
      </div>
    </>
  );
};

export default Elements;
