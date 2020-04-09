import * as path from "path";
import * as glob from "glob";

let types = {};

const files = glob.sync(path.resolve(__dirname, "./graphql/**/*.ts"));
files.forEach((file) => {
  const module = require(path.resolve(file));
  types = { ...types, ...module };
});

export default types;
