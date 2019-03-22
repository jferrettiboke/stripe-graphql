import * as Stripe from "stripe";

export interface Customer extends Stripe.customers.ICustomer {}

export interface Context {
  stripe: Stripe;
}
