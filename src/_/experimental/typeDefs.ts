// import { core } from "nexus";
import Stripe from "stripe";

export interface Account extends Stripe.Account {}

export interface BankAccount extends Stripe.BankAccount {}

export interface BalanceTransaction extends Stripe.BalanceTransaction {}

export interface Card extends Stripe.Card {}

export interface Charge extends Stripe.Charge {}

export interface CountrySpec extends Stripe.CountrySpec {}

export interface Customer extends Stripe.Customer {}

// export interface Customer
//   extends core.Omit<Stripe.Customer, "cards"> {
//   cards: Card[];
// }

export interface Invoice extends Stripe.Invoice {}

export interface InvoiceLineItem extends Stripe.InvoiceLineItem {}

interface MetadataField extends Stripe.Metadata {}
export interface Metadata {
  metadata: MetadataField;
}

export interface MetadataType {
  key: string;
  value: string;
}

export interface Plan extends Stripe.Plan {}

export interface Product extends Stripe.Product {}

export interface StripeSubscription extends Stripe.Subscription {}

export interface Context {
  stripe: Stripe;
}
