// import { dynamicOutputMethod } from "@nexus/schema";
// import generatedTypes from "../generated/mapped-types";

// interface TypeFields {
//   [key: string]: string | any;
// }

// interface Types {
//   [key: string]: TypeFields;
// }

// const types: Types = generatedTypes;

// interface Field {
//   name: string;
//   alias: string;
// }

// interface StripeObjectType {
//   name: string;
//   fields: Array<string | Field>;
// }

// export const StripeObjectType = dynamicOutputMethod({
//   name: "stripeObjectType",
//   typeDefinition: `(opts: {
//     name: string,
//     fields: Array<string | {
//       name: string;
//       alias: string;
//     }>
//   }): void`,
//   factory({ typeDef: t, args: [{ name, fields }] }) {
//     if (fields && fields.includes("*")) {
//       fields = Object.keys(types[name]).map(key => key);
//     }

//     // @ts-ignore
//     fields.forEach(field => {
//       if (typeof field === "string") {
//         t.field(field, { type: types[name][field] });
//       } else if (field && typeof field === "object") {
//         t.field(field.alias, {
//           type: types[name][field.name],
//           resolve: root => root[field.name]
//         });
//       }
//     });
//   }
// });
