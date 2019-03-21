import { objectType } from "nexus";

export const Invoice = objectType({
  name: "Invoice",
  definition(t) {
    // Upcoming invoice ids are `null`
    t.id("id", { nullable: true });
    t.int("amount_due");
    t.int("amount_paid");

    t.list.string("lines", {
      // @ts-ignore
      type: "InvoiceLineItem",
      resolve(invoice, args, context) {
        // @ts-ignore
        const { data } = invoice.lines;
        return data;
      }
    });
  }
});
