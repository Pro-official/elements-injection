import React from "react";

const Subscription = (element) => {
  const { type, newClass, form } = element.element.element;
  const items = form.fields.items;
  const submitButton = form.submitButton;
  console.log(submitButton);

  items.map((item, index) => console.log(item.id + index));

  return (
    <>
      {type === "subscription" && (
        <form className={newClass}>
          {items.map((item, index) => (
            <>
              <label>{item.label}</label>
              <input
                className={item.name + item.id}
                placeholder={item.attr.placeholder}
                name={item.name}
                id={item.id}
              />
            </>
          ))}
          <button className={submitButton.content}>
            {submitButton.content}
          </button>
        </form>
      )}
    </>
  );
};

export default Subscription;
