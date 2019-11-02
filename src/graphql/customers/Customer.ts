import { objectType } from "nexus";

export const Customer = objectType({
  name: "Customer",
  definition(t) {
    t.implements("Node", "Metadata");
    t.field("address", {
      type: "Address",
      nullable: true,
      description: "The customer’s address."
    });
    t.list.field("balance", {
      type: "CustomerBalanceTransaction",
      description:
        "Current balance, if any, being stored on the customer. If negative, the customer has credit to apply to their next invoice. If positive, the customer has an amount owed that will be added to their next invoice. The balance does not refer to any unpaid invoices; it solely takes into account amounts that have yet to be successfully applied to any invoice. This balance is only taken into account as invoices are finalized.",
      async resolve(customer, args, context, info) {
        const { data } = await context.stripe.customers.listBalanceTransactions(
          customer.id
        );
        return data;
      }
    });
    t.int("created", {
      description:
        "Time at which the object was created. Measured in seconds since the Unix epoch."
    });
    t.string("currency", {
      description:
        "Three-letter ISO code for the currency the customer can be charged in for recurring billing purposes."
    });
    // t.field("default_source", {});
    t.boolean("delinquent", {
      description:
        "When the customer’s latest invoice is billed by charging automatically, delinquent is true if the invoice’s latest charge is failed. When the customer’s latest invoice is billed by sending an invoice, delinquent is true if the invoice is not paid by its due date."
    });
    t.string("description", {
      nullable: true,
      description:
        "An arbitrary string attached to the object. Often useful for displaying to users."
    });
    // t.field("discount", {
    //   description:
    //     "Describes the current discount active on the customer, if there is one."
    // });
    t.string("email", {
      nullable: true,
      description: "The customer's email address."
    });

    // t.dateTime("createdAt", {
    //   description: "Time at which the object was created.",
    //   resolve: o => o.created
    // });
  }
});
