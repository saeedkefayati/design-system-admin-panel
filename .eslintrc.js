module.exports = {
  extends: ["mantine"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    quotes: "double",
    "react/react-in-jsx-scope": "off",
    "linebreak-style": 0,
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
  },
};
