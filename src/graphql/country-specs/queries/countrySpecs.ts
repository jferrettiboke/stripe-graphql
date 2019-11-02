import { stringArg, queryField } from "nexus";

export const countrySpecsQueryField = queryField("countrySpecs", {
  type: "CountrySpec",
  nullable: true,
  args: {
    country: stringArg({ required: true })
  },
  async resolve(root, { country }, context, info) {
    return await context.stripe.countrySpecs.retrieve(country);
  }
});
