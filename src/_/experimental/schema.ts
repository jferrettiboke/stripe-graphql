import * as path from "path";
import { makeSchema } from "@nexus/schema";
import types from "./types";

const schema = makeSchema({
  types,
  outputs: {
    schema: path.join(__dirname, "./generated/schema.graphql"),
    typegen: path.join(__dirname, "./generated/types.d.ts"),
  },
  typegenAutoConfig: {
    debug: false,
    contextType: "t.Context",
    sources: [
      {
        alias: "t",
        source: path.join(__dirname, "typeDefs.ts"),
      },
    ],
  },
});

export default schema;
