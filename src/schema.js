const path = require("path");
const glob = require("glob");
const { makeSchema } = require("nexus");

let types = {};

const files = glob.sync("./src/graphql/**/*.js", {});
files.forEach(file => {
  const module = require(path.resolve(file));
  types = { ...types, ...module };
});

const schema = makeSchema({
  types,
  outputs: {
    schema: path.join(__dirname, "./generated/schema.graphql"),
    typegen: path.join(__dirname, "./generated/types.d.ts")
  }
});

module.exports = schema;
