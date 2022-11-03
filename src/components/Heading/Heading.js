import React from "react";
import { Helmet } from "react-helmet";

const Heading = (element) => {
  const { name, type, style, content, className } = element.element.element;
  console.log(style);

  // Random Strig Generator
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  function generateString(length) {
    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  const char = generateString(10);
  const unifiedClass = `${className}${char}`;
  const newClass = unifiedClass.split(" ").join("");
  //   console.log(newClass);

  return (
    <>
      <Helmet
        style={[
          {
            cssText: `
            .${className} {
                color: red;
                margin-left: 20px;
                font-size: 28px;
                text-align: left;
                text-transform: uppercase;
            }
        `,
          },
        ]}
      />
      <h1 className={className}>{type}</h1>
    </>
  );
};

export default Heading;
