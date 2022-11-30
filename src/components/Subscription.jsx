import React from "react";

const Subscription = ({ element }) => {
  const { id, form, type } = element;
  const { fields, submitButton } = form;
  const { items } = fields;

  return (
    <form className={`${type}-${id}`}>
      {items.map((item, index) => {
        return (
          <React.Fragment key={item.id}>
            <label>{item.label}</label>
            <input
              className={`fromInput${index}`}
              placeholder={item.attr.placeholder}
              name={item.name}
              id={item.id}
            />
          </React.Fragment>
        );
      })}
      <button className="formButton1">{submitButton.content}</button>
    </form>
  );
};

export default Subscription;
