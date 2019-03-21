import * as path from "path";
import * as glob from "glob";
import { makeSchema } from "nexus";

let types = {};

const files = glob.sync("./src/graphql/**/*.ts", {});
files.forEach(file => {
  const module = require(path.resolve(file));
  types = { ...types, ...module };
});

const schema = makeSchema({
  types,
  outputs: {
    schema: path.join(__dirname, "./generated/schema.graphql"),
    typegen: path.join(__dirname, "./generated/types.d.ts")
  },
  typegenAutoConfig: {
    debug: true,
    contextType: "t.Context",
    sources: [
      {
        alias: "t",
        source: path.join(__dirname, "typeDefs.ts")
      }
    ]
  }
});

export default schema;
