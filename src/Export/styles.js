// import camelCaseParser from "../Styles/camelCaseParser";

// var allStyles = [];
// function know(hey, hi) {
//   if (hi.type !== "subscription") {
//     var mSt = camelCaseParser(hi.style);
//     // const newMst = `{
//     //   ${mSt}
//     // }`;
//     const styles = { hey, mSt };

//     allStyles.push(styles);
//   }
// }
// if (allStyles !== "") {
//   const timer = setTimeout(() => {
//     console.log(allStyles);
//   }, 5000);
// }
// // const timer = setTimeout(() => {
// //   allStyles?.map((al) => console.log(al));
// // }, 5000);

// var sth = { know, allStyles };

// export default sth;

// ***************************

// import camelCaseParser from "../Styles/camelCaseParser";
// import TypeCamelCase from "../Styles/TypeCamelCase";
// // import objectToCss from "../utils/objectToCss";
// // import stringToCamelizeCase from "../utils/stringToCamelizeCase";
// import styleFns from "../Styles/index";
// const styles = [];

// const styleGenerate = (data) => {
//   data.forEach((item) => {
//     // console.log(item);
//     const className = `.${item.type}-${item.id}`;
//     // console.log(className);
//     const style = item.style
//       ? camelCaseParser(item.style)
//       : camelCaseParser(item.form.style);
//     // console.log(style);
//     const fns = styleFns[`${TypeCamelCase(item.type)}Style`];
//     console.log(fns);
//     styles.push(fns(className, style));

//     if (Array.isArray(item.content)) {
//       styleGenerate(item.content);
//     }

//     if (item.form) {
//       const fn = styleFns["ButtonStyle"];
//       let className = `.${item.form.submitButton.type}-${item.form.submitButton.id}`;
//       styles.push(fn(className, camelCaseParser(item.form.submitButton.style)));
//       item.form.fields.items.forEach((i) => {
//         const fn = styleFns["InputStyle"];
//         className = `.${i.type}-${i.id}`;
//         styles.push(fn(className, camelCaseParser(item.form.fields.style)));
//       });
//     }
//   });

//   // console.log(styles);
//   return styles;
// };

// export default styleGenerate;
