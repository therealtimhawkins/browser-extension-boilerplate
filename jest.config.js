module.exports = {
  verbose: true,
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node", "vue"],
  transform: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "vue-jest"
  },
  setupFiles: ["jest-webextension-mock"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^dist/(.*)$": "<rootDir>/dist/$1"
  },
  modulePathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>/node_modules",
    "<rootDir>/.yalc/"
  ]
};
