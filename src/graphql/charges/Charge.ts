import { objectType } from "nexus";

export const Charge = objectType({
  name: "Charge",
  definition(t) {
    t.implements("Node");
    t.int("amount", { nullable: true });
    t.string("currency", { nullable: true });
    t.string("status");
    t.field("customer", {
      type: "Customer",
      nullable: true,
      async resolve(root, args, context, info) {
        if (!root.customer) return null
        // @ts-ignore Don't know why typescript think root.customer could be 'string | ICustomer'.
        return await context.stripe.customers.retrieve(root.customer);
      }
    });
    t.int("created", {
      description:
        "Time at which the object was created. Measured in seconds since the Unix epoch."
    });
  }
});
