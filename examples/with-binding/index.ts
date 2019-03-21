import { Binding } from "../../src/generated/binding";

const stripe = new Binding();

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
    `
  );

  console.log(result);
}

main();
