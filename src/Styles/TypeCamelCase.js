function TypeCamelCase(type) {
  return type
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (match) => {
      return match.toUpperCase();
    })
    .split(" ")
    .join("");
}

export default TypeCamelCase;
