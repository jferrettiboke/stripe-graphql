// import * as Stripe from "stripe";
// import * as faker from "faker";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const faker = require("faker");

async function main() {
  // Payment methods
  console.log("Creating payment methods...");
  const pm1 = await stripe.paymentMethods.create({
    type: "card",
    card: { token: "tok_visa" }
  });
  const pm2 = await stripe.paymentMethods.create({
    type: "card",
    card: { token: "tok_visa" }
  });
  const pm3 = await stripe.paymentMethods.create({
    type: "card",
    card: { token: "tok_visa" }
  });

  // Customers
  console.log("Creating customers...");
  const customer1 = await stripe.customers.create({
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    payment_method: pm1.id,
    invoice_settings: {
      default_payment_method: pm1.id
    }
  });
  const customer2 = await stripe.customers.create({
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    payment_method: pm2.id,
    invoice_settings: {
      default_payment_method: pm2.id
    }
  });
  const customer3 = await stripe.customers.create({
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    payment_method: pm3.id,
    invoice_settings: {
      default_payment_method: pm3.id
    }
  });

  // Billing products
  console.log("Creating products...");
  const product = await stripe.products.create({
    type: "service",
    name: "Streaming service"
  });

  // Product plans
  console.log("Creating plans...");
  const basis_plan1 = await stripe.plans.create({
    product: product.id,
    nickname: "basis-monthly-plan-in-eur",
    amount: 499,
    currency: "eur",
    interval: "month"
  });
  const standard_plan1 = await stripe.plans.create({
    product: product.id,
    nickname: "standard-monthly-plan-in-eur",
    amount: 999,
    currency: "eur",
    interval: "month"
  });
  const premium_plan1 = await stripe.plans.create({
    product: product.id,
    nickname: "premium-monthly-plan-in-eur",
    amount: 1499,
    currency: "eur",
    interval: "month"
  });

  // Subscriptions
  console.log("Creating subscriptions...");
  await stripe.subscriptions.create({
    customer: customer1.id,
    items: [{ plan: basis_plan1.id }]
  });
  await stripe.subscriptions.create({
    customer: customer2.id,
    items: [{ plan: standard_plan1.id }]
  });
  await stripe.subscriptions.create({
    customer: customer3.id,
    items: [{ plan: premium_plan1.id }]
  });

  console.log("Done!");
}

main();
