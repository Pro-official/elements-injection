import React, { useEffect, useState } from "react";
import { Markup } from "interweave";
import Element from "./Element";

const Elements = () => {
  const [elements, setElements] = useState([]);

  const content =
    "<p>This is all about how we use dorik element for creating our site.</p>";
  const extractFirst = content.substring(0, 3);
  const getNewFirst = content.substring(3);
  const extractLast = content.slice(-4);
  const getNewLast = content.slice(0, -4);
  // console.log(extractFirst, getNewFirst, getNewLast, extractLast);

  useEffect(() => {
    fetch(`./Data/elements.json`)
      .then((res) => res.json())
      .then((data) => setElements(data));
  }, []);

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
