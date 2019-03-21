import { objectType } from "nexus";

export const InvoiceLineItem = objectType({
  name: "InvoiceLineItem",
  definition(t) {
    t.id("id");
    t.int("amount");
    t.string("currency");
    t.int("quantity");
  }
});
