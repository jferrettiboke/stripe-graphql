const { extendType, stringArg } = require("nexus");

const CountrySpecsQueries = extendType({
  type: "Query",
  definition(t) {
    t.field("countrySpecs", {
      type: "CountrySpec",
      nullable: true,
      args: {
        country: stringArg({ required: true })
      },
      async resolve(root, { country }, context, info) {
        return await context.stripe.countrySpecs.retrieve(country);
      }
    });
  }
});

module.exports = { CountrySpecsQueries };
