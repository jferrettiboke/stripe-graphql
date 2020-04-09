const { delegateToSchema } = require("graphql-tools");
const { schema: stripeSchema, StripeServiceBinding } = require("../../src");

const stripeService = new StripeServiceBinding();

const resolvers = {
  Query: {
    hello: () => "Hello world!",

    // Example with bindings
    async itCountrySpec(root, args, context, info) {
      return await stripeService.query.countrySpecs(
        { country: "IT" },
        `{ id object default_currency }`
      );
    },

    // Example with schema delegation
    async usCountrySpec(root, args, context, info) {
      return await delegateToSchema({
        schema: stripeSchema,
        operation: "query",
        fieldName: "countrySpecs",
        args: { country: "US" },
        context,
        info
      });
    }
  }
};

module.exports = { resolvers };
