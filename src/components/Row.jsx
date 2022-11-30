import React from "react";
// import RowStyle from "../Styles/RowStyle";

const Row = ({ elements, children }) => {
  const { id, type } = elements;
  // RowStyle(`${type}-${id}`, style);
  return <div className={`${type}-${id}`}>{children}</div>;
};

export default Row;
