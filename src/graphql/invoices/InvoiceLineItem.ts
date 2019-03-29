import { objectType } from "nexus";

export const InvoiceLineItem = objectType({
  name: "InvoiceLineItem",
  definition(t) {
    t.implements("Node");
    t.int("amount");
    t.string("currency");
    t.int("quantity");
  }
});
