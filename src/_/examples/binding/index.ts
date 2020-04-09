import * as _Stripe from "stripe";
import { Stripe } from "../../src/";

const { STRIPE_SECRET_KEY } = process.env;
const _stripe = new _Stripe(STRIPE_SECRET_KEY || "");

const stripe = Stripe();

async function main() {
  const result = await stripe.query.platform(
    {},
    /* GraphQL */ `
      {
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
      }
    `,
    { context: { stripe: _stripe } }
  );

  console.log(result);
}

main();
