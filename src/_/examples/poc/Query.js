import { objectType, stringArg } from "@nexus/schema";
import { StripeObjectType as SOT } from "stripe-graphql";

export const StripeObjectType = SOT;

export const Query = objectType({
  name: "Query",
  definition(t) {
    // I DON'T WANT THIS! Time is gold.
    t.string("getStripeCustomerById", {
      args: {
        id: stringArg(),
      },
      async resolve(root, args, ctx) {
        return await stripe.customer({ id });
      },
    });

    // I WOULD LIKE SOMETHING LIKE THIS! Save me time and I will love you forever!

    // Expose all fields in `Query`.
    t.stripeObjectType({
      name: "Query",
      fields: ["*"],
    });

    // Expose only `customer` and `customers` fields in `Query`.
    t.stripeObjectType({
      name: "Query",
      fields: ["customer", "customers"],
    });

    // Rename `customer` field to `getCustomer` in `Query` and expose it.
    t.stripeObjectType({
      name: "Query",
      fields: [{ name: "customer", alias: "getCustomer" }],
    });

    // Expose all args for `customer` field in `Query`.
    t.stripeObjectType({
      name: "Query",
      fields: [{ name: "customer", args: ["*"] }],
    });

    // Rename `id` argument to `customerId` for `customer` field in `Query`.
    t.stripeObjectType({
      name: "Query",
      fields: [
        { name: "customer", args: [{ name: "id", alias: "customerId" }] },
      ],
    });

    // Custom field.
    t.field("customField", {
      ...t.stripeType.customers,
      resolve(root, args, ctx) {
        // Custom implementation
      },
    });
  },
});
