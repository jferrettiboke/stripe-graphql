import { extendType, idArg } from "nexus";
import { resolve } from "url";

export const InvoiceQueries = extendType({
  type: "Query",
  definition(t) {
    t.list.field("invoices", {
      type: "Invoice",
      async resolve(root, args, context, info) {
        const { data } = await context.stripe.invoices.list();
        return data;
      }
    });

    t.field("invoice", {
      type: "Invoice",
      nullable: true,
      args: {
        id: idArg({ required: true })
      },
      async resolve(root, { id }, context, info) {
        return await context.stripe.invoices.retrieve(id);
      }
    });

    t.field("upcomingInvoice", {
      type: "Invoice",
      nullable: true,
      args: {
        customerId: idArg({ required: true })
      },
      async resolve(root, { customerId }, context) {
        return await context.stripe.invoices.retrieveUpcoming(customerId);
      }
    });
  }
});
