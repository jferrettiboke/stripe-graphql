import { core } from "nexus";
import * as Stripe from "stripe";

export interface Account extends Stripe.accounts.IAccount {}

export interface BalanceTransaction
  extends Stripe.balance.IBalanceTransaction {}

export interface Card extends Stripe.cards.ICard {}

export interface Charge extends Stripe.charges.ICharge {}

export interface Customer extends Stripe.customers.ICustomer {}

// export interface Customer
//   extends core.Omit<Stripe.customers.ICustomer, "cards"> {
//   cards: Card[];
// }

export interface Invoice extends Stripe.invoices.IInvoice {}

export interface InvoiceLineItem extends Stripe.invoices.IInvoiceLineItem {}

export interface Plan extends Stripe.plans.IPlan {}

export interface Product extends Stripe.products.IProduct {}

export interface Context {
  stripe: Stripe;
}
