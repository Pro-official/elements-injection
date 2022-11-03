import React, { useEffect, useState } from "react";
// import { Markup } from "interweave";
import Element from "./Element";

const Elements = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    fetch(`./Data/elements.json`)
      .then((res) => res.json())
      .then((data) => setElements(data));
  }, []);

  // console.log(elements);

  return (
    <div>
      {/* {elements
        .filter((el) => el.type === "heading")
        .map((element) => (
          <h1>
            <Markup tagName="p" content={element.content} />
          </h1>
        ))} */}
      {elements.map((element) => (
        <Element element={element} />
      ))}
    </div>
  );
};

export default Elements;
