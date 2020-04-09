import * as schema from "@nexus/schema";
import { parse } from "graphql";
import * as _ from "lodash";
import docs from "./docs.json";

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

const types: { [key: string]: any } = {};

// types["Address"] = schema.objectType({
//   name: "Address",
//   definition(t) {
//     t.field("city", { type: "String" });
//   },
// });

// types["Customer"] = schema.objectType({
//   name: "Customer",
//   definition(t) {
//     t.field("id", { type: "String" });
//     t.field("name", { type: "String" });
//     t.field("email", { type: "String", nullable: true });
//     t.field("address", { type: "Address" });
//   },
// });

// types["Query"] = schema.queryField("customers", {
//   type: "Customer",
//   args: {
//     a: schema.arg({
//       type: "String",
//     }),
//   },
//   list: true,
//   resolve: async (parent, args, ctx, info) =>
//     await ctx.stripe.customers.list().then((res: any) => res.data),
// });

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// 1. Parse docs

interface TypeFieldArg {
  name: string;
  type: string;
}

interface TypeField {
  name: string;
  type: string;
  list?: true | boolean[] | undefined;
  nullable?: boolean;
  args: {} | { [key: string]: TypeFieldArg };
}

interface Type {
  name: string;
  fields: {} | { [key: string]: TypeField };
}

interface AST {
  types: {
    [key: string]: Type;
  };
}

function parser(docs: any): AST {
  const data: AST = {
    types: {
      Query: {
        name: "Query",
        fields: {
          hello: {
            name: "hello",
            type: "String",
            args: {
              name: {
                name: "name",
                type: "String",
              },
              // address: {
              //   name: "address",
              //   type: "Address"
              // }
            },
          },
          customers: {
            name: "customers",
            type: "Customer",
            list: true,
            args: {},
          },
        },
      },
      Mutation: {
        name: "Mutation",
        fields: {
          bye: {
            name: "bye",
            type: "String",
            args: {},
          },
        },
      },
      Address: {
        name: "Address",
        fields: {
          line1: {
            name: "line1",
            type: "String",
            nullable: true,
            args: {},
          },
          line2: {
            name: "line2",
            type: "String",
            nullable: true,
            args: {},
          },
          city: {
            name: "city",
            type: "String",
            nullable: true,
            args: {},
          },
          state: {
            name: "state",
            type: "String",
            nullable: true,
            args: {},
          },
          country: {
            name: "country",
            type: "String",
            nullable: true,
            args: {},
          },
          postal_code: {
            name: "postal_code",
            type: "String",
            nullable: true,
            args: {},
          },
        },
      },
      Customer: {
        name: "Customer",
        fields: {
          id: {
            name: "id",
            type: "String",
            args: {},
          },
          email: {
            name: "email",
            type: "String",
            nullable: true,
            args: {},
          },
          address: {
            name: "address",
            type: "Address",
            nullable: true,
            args: {},
          },
        },
      },
    },
  };

  return data;
}

// 2. Build

function buildType(type: Type): void {
  types[type.name] = schema.objectType({
    name: type.name,
    definition(t) {
      Object.values(type.fields).forEach((field) => {
        // Args
        let args: any = {};
        Object.values(field.args).forEach((arg) => {
          args[arg.name] = schema.arg({
            type: arg.type as any,
          });
        });

        t.field(field.name, {
          type: field.type as any,
          nullable: field.nullable,
          args,
          list: field.list,
          resolve:
            type.name === "Query" && field.name === "customers"
              ? async (parent, args, ctx, info) => {
                  const { data } = await ctx.stripe.customers.list();
                  return data;
                }
              : (o) => o[field.name],
        });
      });
    },
  });
}

function builder(data: AST): void {
  Object.values(data.types).forEach((type) => {
    buildType(type);
  });
}

// 3. Do it!

builder(parser(docs));

export default types;
