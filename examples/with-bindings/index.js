const { StripeServiceBinding } = require("../../src");

const stripeService = new StripeServiceBinding();

stripeService.query
  .platform(
    {},
    `{
      balance {
          available {
          amount
          currency
        }
        pending {
          amount
          currency
        }
      }
    }`
  )
  .then(result => console.log(result))
  .catch(error => console.error(error));
