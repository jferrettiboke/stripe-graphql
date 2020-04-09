import * as schema from "@nexus/schema";
import docs from "./docs.json";

let types: { [key: string]: any } = {};

types["Query"] = schema.queryType({
  definition(t) {
    t.boolean("ok", () => true);
  },
});

types["Mutation"] = schema.mutationType({
  definition(t) {
    t.boolean("ok", () => true);
  },
});

// type Resource = {
//   data: {
//     [key: string]: any;
//     section_type: string; // "resource" | "response" | "request"
//     title: string;
//     description?: string;
//     section_tag: string;
//     subsection_summaries: Array<
//       | { anchor: string; curl_definition: null }
//       | { anchor: string; curl_definition: string }
//     >;
//   };
// };

type Specs = {
  [key: string]: {
    [key: string]: any;
    name: string; // id
    required: boolean;
    object_type: string;
    check:
      | null
      | "string"
      | "integer"
      | "decimal"
      | "boolean"
      | "hash"
      | "timestamp"
      | "currency"
      | "nonnegative_integer";
    subspec?: Specs;
    documentation: {
      markdown: string;
    };
  };
};

// type Response = {
//   data: {
//     section_type: "response";
//     section_tag: string; // customer_object
//     title: string; // The customer object
//     specs: Specs | {};
//   };
// };

// type Request = {
//   data: {
//     section_type: "request";
//     section_tag: string; // create_customer
//     title: string; // Create a customer
//     specs: Specs | {};

//     action: string; // create
//     curl_definition: null | string; // "POST /v1/customers"
//   };
// };

const sections: {
  [key: string]: {
    data: {
      [key: string]: any;
      section_type: string; // "resource" | "response" | "request"
      title: string;
      description?: string;
      section_tag: string;
      object_type?: string;
      subsection_summaries?: Array<
        | { anchor: string; curl_definition: null }
        | { anchor: string; curl_definition: string }
      >;
      specs?: any;
      request_data?: {
        [key: string]: any;
        action_type: string;
        resource_name: string;
      };
    };
  };
} = docs;

function objectType({ name, description, fields = [] }: any) {
  types[name] = schema.objectType({
    name,
    description,
    definition(t) {
      fields.map((field: any) => {
        t.field(field.name, {
          type: field.type,
          description: field.description,
          nullable: field.nullable,
          args: field.args,
          resolve: field.res,
        });
      });
    },
  });
}

function arg({
  type,
  default: _default,
  description,
  list,
  nullable,
  required,
}: any) {
  return schema.arg({
    type,
    default: _default,
    description,
    list,
    nullable,
    required,
  });
}

// function args(args: any) {
//   const entries: any = Object.entries(args).map(([key, argProps]) => {
//     return [key, arg(argProps)];
//   });
//   return Object.fromEntries(entries);
// }

function queryField({
  name,
  type,
  args = {},
  description,
  list,
  nullable,
}: any) {
  types[`${name}QueryField`] = schema.queryField(name, {
    type,
    args,
    description,
    list,
    nullable,
    resolve: async (parent, args, ctx, info) =>
      await ctx.stripe.customers.list(),
  });
}

function mutationField({
  name,
  type,
  args = {},
  description,
  list,
  nullable,
}: any) {
  types[`${name}MutationField`] = schema.mutationField(name, {
    type,
    args,
    description,
    list,
    nullable,
    resolve: () => `const result = await stripe.resource.method();`,
  });
}

function parseSpecs(specs: Specs) {
  let args: any = {};
  const map: any = {
    string: "String",
    integer: "Int",
    decimal: "Float",
    boolean: "Boolean",
    hash: "String",
    timestamp: "Int",
    currency: "String",
    nonnegative_integer: "Int",
  };

  specs &&
    Object.entries(specs).map((spec: any) => {
      const [key, item] = spec;
      args[item.name] = {
        name: item.name,
        type: item.check ? map[item.check] : "__",
        nullable: !item.required,
      };
    });

  console.log(args);

  return args;
}

console.log(Object.values(parseSpecs(sections.list_customers.data.specs)));

Object.entries(sections).forEach(([key, section]) => {
  if (section.data.section_type === "resource") {
    section;
    section.data.subsection_summaries?.forEach((subsectionSummary: any) => {
      const subsection = sections[subsectionSummary.anchor];

      if (subsection.data.section_type === "response") {
        // Object types
        const { object_type, title, specs } = subsection.data;
        let fields: any = Object.values(parseSpecs(specs));
        objectType({
          name: object_type,
          description: title,
          fields,
        });
      }

      if (subsection.data.section_type === "request") {
        if (subsection.data.curl_definition.startsWith("GET /")) {
          // Query types
          const { section_tag, request_data, title, specs } = subsection.data;

          queryField({
            name: section_tag,
            type: request_data?.resource_name,
            args: {},
            description: title,
            list: request_data?.action_type === "list" ? true : undefined,
            nullable: false,
          });
        } else {
          // Mutation types
          const { section_tag, request_data, title } = subsection.data;
          mutationField({
            name: section_tag,
            type: request_data?.resource_name,
            args: {},
            description: title,
            list: undefined,
            nullable: false,
          });
        }
      }
    });
  }
});

export default types;
