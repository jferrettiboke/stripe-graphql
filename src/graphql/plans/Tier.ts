import { objectType } from "nexus";

export const Tier = objectType({
  name: "Tier",
  definition(t) {
    t.int("flat_amount", { description: "Price for the entire tier." });
    t.string("flat_amount_decimal", {
      description:
        "Same as flat_amount, but contains a decimal value with at most 12 decimal places."
    });
    t.int("unit_amount", {
      description: "Per unit price for units relevant to the tier."
    });
    t.string("unit_amount_decimal", {
      description:
        "Same as unit_amount, but contains a decimal value with at most 12 decimal places."
    });
    t.int("up_to", {
      description:
        "Up to and including to this quantity will be contained in the tier."
    });
  }
});
