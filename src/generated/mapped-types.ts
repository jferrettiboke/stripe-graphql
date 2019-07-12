// @ts-ignore
const Query = {
  // @ts-ignore
  platform: Account,
  // @ts-ignore
  accounts: Account,
  // @ts-ignore
  account: Account,
  // @ts-ignore
  charges: Charge,
  // @ts-ignore
  charge: Charge,
  // @ts-ignore
  countrySpecs: CountrySpec,
  // @ts-ignore
  customers: Customer,
  // @ts-ignore
  customer: Customer,
  // @ts-ignore
  invoices: Invoice,
  // @ts-ignore
  invoice: Invoice,
  // @ts-ignore
  upcomingInvoice: Invoice,
  // @ts-ignore
  plans: Plan,
  // @ts-ignore
  plan: Plan,
  // @ts-ignore
  products: Product,
  // @ts-ignore
  product: Product,
  // @ts-ignore
  subscriptions: _Subscription,
  // @ts-ignore
  subscription: _Subscription
};
// @ts-ignore

const Account = {
  // @ts-ignore
  id: "ID",
  // @ts-ignore
  object: "String",
  // @ts-ignore
  country: "String",
  // @ts-ignore
  legal_entity: LegalEntity,
  // @ts-ignore
  verification: AccountVerification,
  // @ts-ignore
  balance: Balance,
  // @ts-ignore
  balanceTransactions: BalanceTransaction,
  // @ts-ignore
  bankAccounts: BankAccount,
  // @ts-ignore
  cards: Card
};
// @ts-ignore

const Node = {
  // @ts-ignore
  id: "ID",
  // @ts-ignore
  object: "String"
};
// @ts-ignore

const LegalEntity = {
  // @ts-ignore
  type: "LEGAL_ENTITY_TYPE",
  // @ts-ignore
  additional_owners: AdditionalOwner,
  // @ts-ignore
  address: Address,
  // @ts-ignore
  dob: Dob,
  // @ts-ignore
  first_name: "String",
  // @ts-ignore
  last_name: "String",
  // @ts-ignore
  maiden_name: "String",
  // @ts-ignore
  personal_address: Address,
  // @ts-ignore
  personal_id_number_provided: "Boolean"
};
// @ts-ignore

const AdditionalOwner = {
  // @ts-ignore
  address: Address,
  // @ts-ignore
  dob: Dob,
  // @ts-ignore
  first_name: "String",
  // @ts-ignore
  last_name: "String",
  // @ts-ignore
  maiden_name: "String",
  // @ts-ignore
  personal_id_number_provided: "Boolean"
};
// @ts-ignore

const Address = {
  // @ts-ignore
  city: "String",
  // @ts-ignore
  country: "String",
  // @ts-ignore
  line1: "String",
  // @ts-ignore
  line2: "String",
  // @ts-ignore
  postal_code: "String",
  // @ts-ignore
  state: "String"
};
// @ts-ignore

const Dob = {
  // @ts-ignore
  day: "Int",
  // @ts-ignore
  month: "Int",
  // @ts-ignore
  year: "Int"
};
// @ts-ignore

const AccountVerification = {
  // @ts-ignore
  disabled_reason: "String",
  // @ts-ignore
  due_by: "Int",
  // @ts-ignore
  fields_needed: "String"
};
// @ts-ignore

const Balance = {
  // @ts-ignore
  object: "String",
  // @ts-ignore
  livemode: "Boolean",
  // @ts-ignore
  available: BalanceItem,
  // @ts-ignore
  pending: BalanceItem
};
// @ts-ignore

const BalanceItem = {
  // @ts-ignore
  currency: "String",
  // @ts-ignore
  amount: "Int",
  // @ts-ignore
  source_types: BalanceSourceTypes
};
// @ts-ignore

const BalanceSourceTypes = {
  // @ts-ignore
  bank_account: "Int",
  // @ts-ignore
  card: "Int"
};
// @ts-ignore

const BalanceTransaction = {
  // @ts-ignore
  id: "ID",
  // @ts-ignore
  object: "String",
  // @ts-ignore
  amount: "Int",
  // @ts-ignore
  available_on: "Int",
  // @ts-ignore
  created: "Int",
  // @ts-ignore
  currency: "String",
  // @ts-ignore
  description: "String",
  // @ts-ignore
  exchange_rate: "Float",
  // @ts-ignore
  fee: "Int",
  // @ts-ignore
  fee_details: FeeDetails,
  // @ts-ignore
  net: "Int",
  // @ts-ignore
  source: "String",
  // @ts-ignore
  status: "String",
  // @ts-ignore
  type: "String"
};
// @ts-ignore

const FeeDetails = {
  // @ts-ignore
  id: "String",
  // @ts-ignore
  amount: "Int",
  // @ts-ignore
  application: "String",
  // @ts-ignore
  currency: "String",
  // @ts-ignore
  description: "String",
  // @ts-ignore
  type: "String"
};
// @ts-ignore

const BankAccount = {
  // @ts-ignore
  id: "ID",
  // @ts-ignore
  object: "String",
  // @ts-ignore
  account_holder_name: "String",
  // @ts-ignore
  account_holder_type: "LEGAL_ENTITY_TYPE",
  // @ts-ignore
  bank_name: "String",
  // @ts-ignore
  country: "String",
  // @ts-ignore
  currency: "String",
  // @ts-ignore
  customer: "String",
  // @ts-ignore
  fingerprint: "String",
  // @ts-ignore
  last4: "String",
  // @ts-ignore
  routing_number: "String",
  // @ts-ignore
  status: "String"
};
// @ts-ignore

const Card = {
  // @ts-ignore
  id: "ID",
  // @ts-ignore
  object: "String",
  // @ts-ignore
  brand: "String",
  // @ts-ignore
  country: "String",
  // @ts-ignore
  default_for_currency: "Boolean",
  // @ts-ignore
  exp_month: "Int",
  // @ts-ignore
  exp_year: "Int",
  // @ts-ignore
  funding: "CARD_FUNDING_TYPE",
  // @ts-ignore
  last4: "String",
  // @ts-ignore
  name: "String"
};
// @ts-ignore

const Charge = {
  // @ts-ignore
  id: "ID",
  // @ts-ignore
  object: "String",
  // @ts-ignore
  amount: "Int",
  // @ts-ignore
  currency: "String",
  // @ts-ignore
  status: "String"
};
// @ts-ignore

const CountrySpec = {
  // @ts-ignore
  id: "String",
  // @ts-ignore
  object: "String",
  // @ts-ignore
  defaultCurrency: "Currency",
  // @ts-ignore
  verificationFields: AccountVerificationFields
};
// @ts-ignore

const AccountVerificationFields = {
  // @ts-ignore
  individual: VerificationFields,
  // @ts-ignore
  company: VerificationFields
};
// @ts-ignore

const VerificationFields = {
  // @ts-ignore
  minimum: "String",
  // @ts-ignore
  additional: "String"
};
// @ts-ignore

const Customer = {
  // @ts-ignore
  id: "ID",
  // @ts-ignore
  object: "String",
  // @ts-ignore
  metadata: MetadataType,
  // @ts-ignore
  email: "String",
  // @ts-ignore
  createdAt: "DateTime",
  // @ts-ignore
  bankAccounts: BankAccount,
  // @ts-ignore
  cards: Card,
  // @ts-ignore
  charges: Charge,
  // @ts-ignore
  subscriptions: _Subscription
};
// @ts-ignore

const Metadata = {
  // @ts-ignore
  metadata: MetadataType
};
// @ts-ignore

const MetadataType = {
  // @ts-ignore
  key: "String",
  // @ts-ignore
  value: "String"
};
// @ts-ignore

const _Subscription = {
  // @ts-ignore
  id: "ID",
  // @ts-ignore
  object: "String",
  // @ts-ignore
  customer: Customer
};
// @ts-ignore

const Invoice = {
  // @ts-ignore
  id: "ID",
  // @ts-ignore
  amount_due: "Int",
  // @ts-ignore
  amount_paid: "Int",
  // @ts-ignore
  lines: InvoiceLineItem
};
// @ts-ignore

const InvoiceLineItem = {
  // @ts-ignore
  id: "ID",
  // @ts-ignore
  object: "String",
  // @ts-ignore
  amount: "Int",
  // @ts-ignore
  currency: "String",
  // @ts-ignore
  quantity: "Int"
};
// @ts-ignore

const Plan = {
  // @ts-ignore
  id: "ID",
  // @ts-ignore
  object: "String",
  // @ts-ignore
  amount: "Int",
  // @ts-ignore
  currency: "String",
  // @ts-ignore
  formattedAmount: "String",
  // @ts-ignore
  product: Product
};
// @ts-ignore

const Product = {
  // @ts-ignore
  id: "ID",
  // @ts-ignore
  object: "String",
  // @ts-ignore
  type: "String",
  // @ts-ignore
  name: "String",
  // @ts-ignore
  plans: Plan
};

export default {
  // @ts-ignore
  Query,
  // @ts-ignore
  Account,
  // @ts-ignore
  Node,
  // @ts-ignore
  LegalEntity,
  // @ts-ignore
  AdditionalOwner,
  // @ts-ignore
  Address,
  // @ts-ignore
  Dob,
  // @ts-ignore
  AccountVerification,
  // @ts-ignore
  Balance,
  // @ts-ignore
  BalanceItem,
  // @ts-ignore
  BalanceSourceTypes,
  // @ts-ignore
  BalanceTransaction,
  // @ts-ignore
  FeeDetails,
  // @ts-ignore
  BankAccount,
  // @ts-ignore
  Card,
  // @ts-ignore
  Charge,
  // @ts-ignore
  CountrySpec,
  // @ts-ignore
  AccountVerificationFields,
  // @ts-ignore
  VerificationFields,
  // @ts-ignore
  Customer,
  // @ts-ignore
  Metadata,
  // @ts-ignore
  MetadataType,
  // @ts-ignore
  _Subscription,
  // @ts-ignore
  Invoice,
  // @ts-ignore
  InvoiceLineItem,
  // @ts-ignore
  Plan,
  // @ts-ignore
  Product
};
