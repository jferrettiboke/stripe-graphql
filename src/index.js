const { Binding } = require("graphql-binding");
const { schema } = require("./schema");

class StripeServiceBinding extends Binding {
  constructor() {
    super({ schema });
  }
}

module.exports = { schema, StripeServiceBinding };
