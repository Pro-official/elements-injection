import React from "react";
import loadable from "@loadable/component";

const AsyncPage = loadable((props) => import(`./${props.type}`), {
  cacheKey: (props) => props.type,
});

const Element = (element) => {
  const { type } = element.element;

  return <AsyncPage type={type} element={element} />;
};

export default Element;
