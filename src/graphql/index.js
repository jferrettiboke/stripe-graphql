const { objectType, idArg, stringArg, enumType, scalarType } = require("nexus");

const AccountVerificationFields = objectType({
  name: "AccountVerificationFields",
  definition(t) {
    t.field("individual", { type: VerificationFields });
    t.field("company", { type: VerificationFields });
  }
});

const AdditionalOwner = objectType({
  name: "AdditionalOwner",
  definition(t) {
    t.field("address", {
      type: Address,
      nullable: true
    });
    t.field("dob", {
      type: Dob,
      nullable: true
    });
    t.string("first_name", { nullable: true });
    t.string("last_name", { nullable: true });
    t.string("maiden_name", { nullable: true });
    t.boolean("personal_id_number_provided");
  }
});

const Address = objectType({
  name: "Address",
  definition(t) {
    t.string("city", { nullable: true });
    t.string("country", { nullable: true });
    t.string("line1", { nullable: true });
    t.string("line2", { nullable: true });
    t.string("postal_code", { nullable: true });
    t.string("state", { nullable: true });
  }
});

const Balance = objectType({
  name: "Balance",
  definition(t) {
    t.string("object");
    t.boolean("livemode");
    t.list.field("available", { type: BalanceItem });
    t.list.field("pending", { type: BalanceItem });
  }
});

const BalanceItem = objectType({
  name: "BalanceItem",
  definition(t) {
    t.string("currency");
    t.int("amount");
  }
});

const BalanceTransaction = objectType({
  name: "BalanceTransaction",
  definition(t) {
    t.string("id");
    t.string("object");
    t.int("amount", { nullable: true });
    t.int("available_on", { nullable: true });
    t.int("created", { nullable: true });
    t.string("currency", { nullable: true });
    t.string("description", { nullable: true });
    t.float("exchange_rate", { nullable: true });
    t.int("fee", { nullable: true });
    t.list.field("fee_details", { type: FeeDetails });
    t.int("net", { nullable: true });
    t.string("source", { nullable: true });
    t.string("status", { nullable: true });
    t.string("type", { nullable: true });
  }
});

const BankAccount = objectType({
  name: "BankAccount",
  definition(t) {
    t.id("id");
    t.string("account_holder_name", { nullable: true });
    t.field("account_holder_type", {
      type: LEGAL_ENTITY_TYPE,
      nullable: true
    });
    t.string("bank_name", { nullable: true });
    t.string("country", { nullable: true });
    t.string("currency", { nullable: true });
    t.string("customer", { nullable: true });
    t.string("fingerprint", { nullable: true });
    t.string("last4", { nullable: true });
    t.string("routing_number", { nullable: true });
    t.string("status", { nullable: true });
  }
});

const Card = objectType({
  name: "Card",
  definition(t) {
    t.id("id");
    t.string("address_city", { nullable: true });
    t.string("address_country", { nullable: true });
    t.string("address_line1", { nullable: true });
    t.string("address_line1_check", { nullable: true });
    t.string("address_line2", { nullable: true });
    t.string("address_state", { nullable: true });
    t.string("address_zip", { nullable: true });
    t.string("address_zip_check", { nullable: true });
    t.string("brand", { nullable: true });
    t.string("country", { nullable: true });
    t.string("customer", { nullable: true });
    t.string("cvc_check", { nullable: true });
    t.boolean("default_for_currency", { nullable: true });
    t.string("dynamic_last4", { nullable: true });
    t.int("exp_month", { nullable: true });
    t.int("exp_year", { nullable: true });
    t.string("fingerprint", { nullable: true });
    t.field("funding", { type: CARD_FUNDING_TYPE });
    t.string("last4", { nullable: true });
    t.string("name", { nullable: true });
    t.string("tokenization_method", { nullable: true });
  }
});

const Charge = objectType({
  name: "Charge",
  definition(t) {
    t.string("id");
    t.string("object");
    t.int("amount", { nullable: true });
    t.string("currency", { nullable: true });
    t.string("balance_transaction", { nullable: true });
  }
});

const ConnectedAccount = objectType({
  name: "ConnectedAccount",
  definition(t) {
    t.id("id");
    t.string("country");
    t.list.field("cards", {
      type: Card,
      async resolve({ id }, args, context) {
        const { data } = await context.stripe.accounts.listExternalAccounts(
          id,
          {
            object: "card"
          }
        );
        return data;
      }
    });
    t.list.field("bankAccounts", {
      type: BankAccount,
      async resolve({ id }, args, context) {
        const { data } = await context.stripe.accounts.listExternalAccounts(
          id,
          {
            object: "bank_account"
          }
        );
        return data;
      }
    });
    t.field("legal_entity", {
      type: LegalEntity,
      nullable: true
    });
    t.field("verification", { type: ConnectedAccountVerification });
    t.field("balance", {
      type: Balance,
      async resolve({ id }, args, context, info) {
        return await context.stripe.balance.retrieve({ stripe_account: id });
      }
    });
    t.list.field("transactions", {
      type: BalanceTransaction,
      async resolve({ id }, args, context, info) {
        const { data } = await context.stripe.balance.listTransactions({
          stripe_account: id
        });
        return data;
      }
    });
  }
});

const ConnectedAccountVerification = objectType({
  name: "ConnectedAccountVerification",
  definition(t) {
    t.string("disabled_reason", { nullable: true });
    t.int("due_by", { nullable: true });
    t.string("fields_needed", {
      list: [false],
      nullable: true
    });
  }
});

const CountrySpec = objectType({
  name: "CountrySpec",
  definition(t) {
    t.string("id", { nullable: true });
    t.string("object", { nullable: true });
    t.string("default_currency", { nullable: true });
    t.field("verification_fields", { type: AccountVerificationFields });
  }
});

const Customer = objectType({
  name: "Customer",
  definition(t) {
    t.id("id");
    t.string("email", { nullable: true });
    t.list.field("cards", {
      type: Card,
      async resolve({ id }, args, context) {
        const { data } = await context.stripe.customers.listCards(id);
        return data;
      }
    });
    t.list.field("bankAccounts", {
      type: BankAccount,
      async resolve({ id }, args, context) {
        const { data } = await context.stripe.customers.listSources(id, {
          object: "bank_account"
        });
        return data;
      }
    });
    t.list.field("charges", {
      type: Charge,
      async resolve({ id }, args, context) {
        const { data } = await context.stripe.charges.list({ customer: id });
        return data;
      }
    });
  }
});

const Dob = objectType({
  name: "Dob",
  definition(t) {
    t.int("day", { nullable: true });
    t.int("month", { nullable: true });
    t.int("year", { nullable: true });
  }
});

const FeeDetails = objectType({
  name: "FeeDetails",
  definition(t) {
    t.string("id", { nullable: true });
    t.int("amount", { nullable: true });
    t.string("application", { nullable: true });
    t.string("currency", { nullable: true });
    t.string("description", { nullable: true });
    t.string("type", { nullable: true });
  }
});

const LegalEntity = objectType({
  name: "LegalEntity",
  definition(t) {
    t.field("type", {
      type: LEGAL_ENTITY_TYPE,
      nullable: true
    });
    t.list.field("additional_owners", { type: AdditionalOwner });
    t.field("address", {
      type: Address,
      nullable: true
    });
    t.field("dob", {
      type: Dob,
      nullable: true
    });
    t.string("first_name", { nullable: true });
    t.string("last_name", { nullable: true });
    t.string("maiden_name", { nullable: true });
    t.field("personal_address", {
      type: Address,
      nullable: true
    });
    t.boolean("personal_id_number_provided", { nullable: true });
  }
});

const Platform = objectType({
  name: "Platform",
  definition(t) {
    t.field("balance", {
      type: Balance,
      async resolve(root, args, context, info) {
        return await context.stripe.balance.retrieve();
      }
    });
    t.list.field("transactions", {
      type: BalanceTransaction,
      async resolve(root, args, context, info) {
        const { data } = await context.stripe.balance.listTransactions({});
        return data;
      }
    });
  }
});

const Query = objectType({
  name: "Query",
  definition(t) {
    t.field("platform", {
      type: Platform,
      resolve() {
        return {};
      }
    });
    t.list.field("customers", {
      type: Customer,
      async resolve(root, args, context, info) {
        const { data } = await context.stripe.customers.list();
        return data;
      }
    });
    t.field("customer", {
      type: Customer,
      nullable: true,
      args: {
        id: idArg({ required: true })
      },
      async resolve(root, { id }, context, info) {
        return await context.stripe.customers.retrieve(id);
      }
    });
    t.list.field("connectedAccounts", {
      type: ConnectedAccount,
      async resolve(root, args, context, info) {
        const { data } = await context.stripe.accounts.list();
        return data;
      }
    });
    t.field("connectedAccount", {
      type: ConnectedAccount,
      nullable: true,
      args: {
        id: idArg({ required: true })
      },
      async resolve(root, { id }, context, info) {
        return await context.stripe.accounts.retrieve(id);
      }
    });
    t.field("countrySpecs", {
      type: CountrySpec,
      nullable: true,
      args: {
        country: stringArg({ required: true })
      },
      async resolve(root, { country }, context, info) {
        return await context.stripe.countrySpecs.retrieve(country);
      }
    });
  }
});

const VerificationFields = objectType({
  name: "VerificationFields",
  definition(t) {
    t.string("minimum", {
      list: [false],
      nullable: true
    });
    t.string("additional", {
      list: [false],
      nullable: true
    });
  }
});

const CARD_FUNDING_TYPE = enumType({
  name: "CARD_FUNDING_TYPE",
  members: ["credit", "debit", "prepaid", "unknown"]
});

const COUNTRY = enumType({
  name: "COUNTRY",
  members: ["US"]
});

const CURRENCY = enumType({
  name: "CURRENCY",
  members: ["eur", "gbp", "usd"]
});

const LEGAL_ENTITY_TYPE = enumType({
  name: "LEGAL_ENTITY_TYPE",
  members: ["individual", "company"]
});

module.exports = {
  AccountVerificationFields,
  AdditionalOwner,
  Address,
  Balance,
  BalanceItem,
  BalanceTransaction,
  BankAccount,
  Card,
  Charge,
  ConnectedAccount,
  ConnectedAccountVerification,
  CountrySpec,
  Customer,
  Dob,
  FeeDetails,
  LegalEntity,
  Platform,
  Query,
  VerificationFields,
  CARD_FUNDING_TYPE,
  COUNTRY,
  CURRENCY,
  LEGAL_ENTITY_TYPE
};
