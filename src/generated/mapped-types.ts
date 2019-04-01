const Query = {
  platform: Account,
  accounts: Account,
  account: Account,
  charges: Charge,
  charge: Charge,
  countrySpecs: CountrySpec,
  customers: Customer,
  customer: Customer,
  invoices: Invoice,
  invoice: Invoice,
  upcomingInvoice: Invoice,
  plans: Plan,
  plan: Plan,
  products: Product,
  product: Product,
  subscriptions: _Subscription,
  subscription: _Subscription
};

const Account = {
  id: "ID",
  object: "String",
  country: "String",
  legal_entity: LegalEntity,
  verification: AccountVerification,
  balance: Balance,
  balanceTransactions: BalanceTransaction,
  bankAccounts: BankAccount,
  cards: Card
};

const Node = {
  id: "ID",
  object: "String"
};

const LegalEntity = {
  type: "LEGAL_ENTITY_TYPE",
  additional_owners: AdditionalOwner,
  address: Address,
  dob: Dob,
  first_name: "String",
  last_name: "String",
  maiden_name: "String",
  personal_address: Address,
  personal_id_number_provided: "Boolean"
};

const AdditionalOwner = {
  address: Address,
  dob: Dob,
  first_name: "String",
  last_name: "String",
  maiden_name: "String",
  personal_id_number_provided: "Boolean"
};

const Address = {
  city: "String",
  country: "String",
  line1: "String",
  line2: "String",
  postal_code: "String",
  state: "String"
};

const Dob = {
  day: "Int",
  month: "Int",
  year: "Int"
};

const AccountVerification = {
  disabled_reason: "String",
  due_by: "Int",
  fields_needed: "String"
};

const Balance = {
  object: "String",
  livemode: "Boolean",
  available: BalanceItem,
  pending: BalanceItem
};

const BalanceItem = {
  currency: "String",
  amount: "Int",
  source_types: BalanceSourceTypes
};

const BalanceSourceTypes = {
  bank_account: "Int",
  card: "Int"
};

const BalanceTransaction = {
  id: "ID",
  object: "String",
  amount: "Int",
  available_on: "Int",
  created: "Int",
  currency: "String",
  description: "String",
  exchange_rate: "Float",
  fee: "Int",
  fee_details: FeeDetails,
  net: "Int",
  source: "String",
  status: "String",
  type: "String"
};

const FeeDetails = {
  id: "String",
  amount: "Int",
  application: "String",
  currency: "String",
  description: "String",
  type: "String"
};

const BankAccount = {
  id: "ID",
  object: "String",
  account_holder_name: "String",
  account_holder_type: "LEGAL_ENTITY_TYPE",
  bank_name: "String",
  country: "String",
  currency: "String",
  customer: "String",
  fingerprint: "String",
  last4: "String",
  routing_number: "String",
  status: "String"
};

const Card = {
  id: "ID",
  object: "String",
  brand: "String",
  country: "String",
  default_for_currency: "Boolean",
  exp_month: "Int",
  exp_year: "Int",
  funding: "CARD_FUNDING_TYPE",
  last4: "String",
  name: "String"
};

const Charge = {
  id: "ID",
  object: "String",
  amount: "Int",
  currency: "String",
  status: "String"
};

const CountrySpec = {
  id: "String",
  object: "String",
  defaultCurrency: "Currency",
  verificationFields: AccountVerificationFields
};

const AccountVerificationFields = {
  individual: VerificationFields,
  company: VerificationFields
};

const VerificationFields = {
  minimum: "String",
  additional: "String"
};

const Customer = {
  id: "ID",
  object: "String",
  metadata: MetadataType,
  email: "String",
  createdAt: "DateTime",
  bankAccounts: BankAccount,
  cards: Card,
  charges: Charge,
  subscriptions: _Subscription
};

const Metadata = {
  metadata: MetadataType
};

const MetadataType = {
  key: "String",
  value: "String"
};

const _Subscription = {
  id: "ID",
  object: "String",
  customer: Customer
};

const Invoice = {
  id: "ID",
  amount_due: "Int",
  amount_paid: "Int",
  lines: InvoiceLineItem
};

const InvoiceLineItem = {
  id: "ID",
  object: "String",
  amount: "Int",
  currency: "String",
  quantity: "Int"
};

const Plan = {
  id: "ID",
  object: "String",
  amount: "Int",
  currency: "String",
  formattedAmount: "String",
  product: Product
};

const Product = {
  id: "ID",
  object: "String",
  type: "String",
  name: "String",
  plans: Plan
};

export default {
  Query,
  Account,
  Node,
  LegalEntity,
  AdditionalOwner,
  Address,
  Dob,
  AccountVerification,
  Balance,
  BalanceItem,
  BalanceSourceTypes,
  BalanceTransaction,
  FeeDetails,
  BankAccount,
  Card,
  Charge,
  CountrySpec,
  AccountVerificationFields,
  VerificationFields,
  Customer,
  Metadata,
  MetadataType,
  _Subscription,
  Invoice,
  InvoiceLineItem,
  Plan,
  Product
};
