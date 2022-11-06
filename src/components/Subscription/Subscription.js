import React from "react";

const Subscription = (element) => {
  const { type, newClass, form } = element.element.element;
  const items = form.fields.items;
  console.log(typeof items);
  //   console.log(typeof style);
  return (
    <>
      {type === "subscription" && (
        <form className={newClass}>
          {items.map((item, index) => (
            <div key={index}>
              <h1>{item.label}</h1>
            </div>
          ))}
        </form>
      )}
    </>
  );
};

export default Subscription;
