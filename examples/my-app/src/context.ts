import { yogaContext } from "yoga";
import * as Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export interface Context {
  stripe: Stripe;
}

export default yogaContext(() => ({ stripe }));
