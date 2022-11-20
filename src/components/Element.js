import React from "react";
import myElements from "./index";
import TypeCamelCase from "../Styles/TypeCamelCase";

const Element = ({ elements }) => {
  return (
    <>
      {elements.map((element) => {
        const Component = myElements[TypeCamelCase(element.type)];
        return (
          <React.Fragment key={element.id}>
            {Array.isArray(element.content) ? (
              <>
                <Component
                  key={element.id}
                  elements={element}
                  className={`${element.type}-${element.id}`}
                >
                  <Element id={element.id} elements={element.content} />
                </Component>
              </>
            ) : (
              <Component
                className={`${element.type}-${element.id}`}
                key={element.key}
                element={element}
              />
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Element;
