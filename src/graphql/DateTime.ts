import { scalarType } from "nexus";
import { Kind } from "graphql";

// `value` is in seconds from Stripe - We convert it to milliseconds
export const DateTime = scalarType({
  name: "DateTime",
  asNexusMethod: "dateTime",
  description: "DateTime custom scalar type",
  parseValue: value => value, // value from the client
  serialize: value => new Date(value * 1000).toISOString(), // value sent to the client
  parseLiteral: ast =>
    ast.kind === Kind.INT
      ? new Date(parseInt(ast.value) * 1000).toISOString()
      : null
});
