import * as path from "path";
import * as fs from "fs";
import { graphql } from "graphql";
import * as prettier from "prettier";
import schema from "./schema";

graphql(
  schema,
  /* GraphQL */ `
    {
      __schema {
        types {
          name
          kind
          fields {
            name
            type {
              name
              kind
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                    ofType {
                      kind
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `
).then(result => {
  fs.writeFileSync(
    path.resolve(__dirname, "./generated/__schema.ts"),
    `export default ${JSON.stringify(result.data, null, 2)}`
  );

  let _types = {};
  let output = "";
  const { default: schema } = require("./generated/__schema.ts");
  const { types } = schema.__schema;

  // @ts-ignore
  types.forEach(type => {
    const typeName = type.name;
    if (!type.fields || typeName.startsWith("__")) {
      return;
    }
    // @ts-ignore
    let typeFields = {};
    // @ts-ignore
    type.fields.forEach(field => {
      // @ts-ignore
      typeFields[field.name] =
        (field.type.ofType &&
          field.type.ofType.ofType &&
          field.type.ofType.ofType.ofType &&
          field.type.ofType.ofType.ofType.name) ||
        (field.type.ofType &&
          field.type.ofType.ofType &&
          field.type.ofType.ofType.name) ||
        (field.type.ofType && field.type.ofType.name) ||
        field.type.name;
    });

    // @ts-ignore
    _types[typeName] = typeFields;
  });

  output = `
    ${Object.entries(_types)
      .map(([typeName, fields]) => {
        return `const ${typeName} = {
          ${Object.entries(fields).map(([fieldName, fieldType]) => {
            // @ts-ignore
            const v = _types[fieldType] ? fieldType : `"${fieldType}"`;
            return `${fieldName}: ${v}`;
          })}
        };`;
      })
      .join("\n\n")}

    export default {
      ${Object.keys(_types).map(typeName => typeName)}
    }
`;

  fs.writeFileSync(
    path.resolve(__dirname, "./generated/mapped-types.ts"),
    prettier.format(output, { parser: "babel" })
  );
});

export default schema;
