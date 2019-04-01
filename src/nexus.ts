import { objectType } from "nexus";
import generatedTypes from "./generated/mapped-types";

interface TypeFields {
  [key: string]: string | any;
}

// const cardFieldTypeMapping: TypeFields = {
//   id: "ID",
//   exp_month: "Int",
//   exp_year: "Int",
//   brand: "String",
//   last4: "String"
// };

interface Types {
  [key: string]: TypeFields;
}

const types: Types = generatedTypes;

interface Field {
  name: string;
  alias: string;
}

interface StripeObjectType {
  name: string;
  fields: Array<string | Field>;
  definition(t: any): any;
}

export function stripeObjectType(cfg: StripeObjectType) {
  const { name, definition } = cfg;
  let { fields } = cfg;

  if (fields && fields.includes("*")) {
    fields = Object.keys(types[name]).map(key => key);
  }

  return objectType({
    name,
    definition(t) {
      fields.forEach(field => {
        if (typeof field === "string") {
          t.field(field, { type: types[name][field] });
        } else if (field && typeof field === "object") {
          t.field(field.alias, {
            type: types[name][field.name],
            resolve: root => root[field.name]
          });
        }
      });
      if (typeof definition === "function") {
        definition(t);
      }
    }
  });
}

// export const Card = stripeObjectType({
//   name: "Card",
//   fields: [
//     "id",
//     "brand",
//     "last4",
//     { name: "exp_month", alias: "expMonth" },
//     { name: "exp_year", alias: "expYear" }
//   ],
//   definition(t) {
//     t.field("filteredCharges", {
//       type: "Invoice",
//       list: true,
//       resolve() {
//         return [];
//       }
//     });
//   }
// });
