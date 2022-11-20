function camelCaseParser(styles) {
  return Object.keys(styles)
    .map((key) => {
      const newKey = key.replace(/[A-Z]/, (match) => "-" + match.toLowerCase());
      return `${newKey}:${styles[key]};`;
    })
    .join("\n");
}

export default camelCaseParser;
