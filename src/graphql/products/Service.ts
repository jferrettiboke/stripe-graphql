import { objectType } from "nexus";

export const Service = objectType({
  name: "Service",
  definition(t) {
    t.implements("Product", "Metadata");
    t.string("statement_descriptor", {
      nullable: true,
      description:
        "Extra information about a product which will appear on your customer’s credit card statement. In the case that multiple products are billed at once, the first statement descriptor will be used. Only available on products of `type=service`."
    });
    t.string("unit_label", {
      nullable: true,
      description:
        "A label that represents units of this product, such as seat(s), in Stripe and on customers’ receipts and invoices. Only available on products of `type=service`."
    });
  }
});
