import { scalarType } from "nexus";
import { Kind } from "graphql";

export const Currency = scalarType({
  name: "Currency",
  asNexusMethod: "currency",
  description: "Currency custom scalar type.",
  parseValue: value => value,
  serialize: value => value.toUpperCase(),
  parseLiteral: ast =>
    ast.kind === Kind.STRING ? ast.value.toUpperCase() : null
});
