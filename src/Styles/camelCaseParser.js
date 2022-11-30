function camelCaseParser(styles) {
  return Object.keys(styles)
    .map((key) => {
      const newKey = key.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
      return `${newKey}:${styles[key]};`;
    })
    .join("\n");
}

export default camelCaseParser;
