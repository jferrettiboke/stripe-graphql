import { scalarType } from "@nexus/schema";
import { Kind } from "graphql";

export const CurrencyScalar = scalarType({
  name: "CurrencyScalar",
  asNexusMethod: "currency",
  parseValue: (value) => value,
  serialize: (value) => value.toUpperCase(),
  parseLiteral: (ast) =>
    ast.kind === Kind.STRING ? ast.value.toUpperCase() : null,
});
