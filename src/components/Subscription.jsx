import React from "react";
import { ultimateStyles } from "../Styles/ultimateStyles";
import SubscriptionStyle from "../Styles/SubscriptionStyle";
import { subscription } from "../Export/styles";

const Subscription = ({ element }) => {
  const { id, form, type } = element;
  const { style, fields, submitButton } = form;
  const { style: fieldStyle, items } = fields;
  const { style: buttonStyle } = submitButton;

  SubscriptionStyle(`${type}-${id}`, style, submitButton.content, buttonStyle);

  return (
    <form className={`${type}-${id}`}>
      {items.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <label>{item.label}</label>
            <input
              style={fieldStyle}
              className={`${item.name}-${item.id}`}
              placeholder={item.attr.placeholder}
              name={item.name}
              id={item.id}
            />
          </React.Fragment>
        );
      })}
      <button className={submitButton.content}>{submitButton.content}</button>
    </form>
  );
};

export default Subscription;
