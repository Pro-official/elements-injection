import React from "react";
import RowStyle from "../Styles/RowStyle";
import Column from "./Column";

const Row = ({ row }) => {
  const { id, type, style, content } = row;
  RowStyle(`${type}-${id}`, style);
  return (
    <div className={`${type}-${id}`}>
      {content.map((column, index) => {
        return <Column key={index} column={column} />;
      })}
    </div>
  );
};

export default Row;
