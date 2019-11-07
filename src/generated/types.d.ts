/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as t from "../typeDefs"
import { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    currency<FieldName extends string>(fieldName: FieldName, opts?: core.ScalarInputFieldConfig<core.GetGen3<"inputTypes", TypeName, FieldName>>): void // "Currency";
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.ScalarInputFieldConfig<core.GetGen3<"inputTypes", TypeName, FieldName>>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    currency<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Currency";
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  CARD_FUNDING_TYPE: "credit" | "debit" | "prepaid" | "unknown"
  COUNTRY: "US"
  CURRENCY: "AED" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BWP" | "BYN" | "BZD" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CRC" | "CUP" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EGP" | "ETB" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "INR" | "ISK" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KMF" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LYD" | "MAD" | "MDL" | "MKD" | "MMK" | "MNT" | "MOP" | "MRU" | "MUR" | "MVR" | "MWK" | "MXN" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SEK" | "SGD" | "SHP" | "SLL" | "SOS" | "STN" | "SVC" | "SZL" | "THB" | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "UYU" | "UZS" | "VEF" | "VND" | "VUV" | "WST" | "XAF" | "XCD" | "XOF" | "XPF" | "YER" | "ZAR" | "ZMW"
  LEGAL_ENTITY_TYPE: "company" | "individual"
}

export interface NexusGenRootTypes {
  Account: t.Account;
  AccountVerification: { // root type
    disabled_reason?: string | null; // String
    due_by?: number | null; // Int
    fields_needed?: Array<string | null> | null; // [String]
  }
  AccountVerificationFields: { // root type
    company: NexusGenRootTypes['VerificationFields']; // VerificationFields!
    individual: NexusGenRootTypes['VerificationFields']; // VerificationFields!
  }
  AdditionalOwner: { // root type
    address?: NexusGenRootTypes['Address'] | null; // Address
    dob?: NexusGenRootTypes['Dob'] | null; // Dob
    first_name?: string | null; // String
    last_name?: string | null; // String
    maiden_name?: string | null; // String
    personal_id_number_provided: boolean; // Boolean!
  }
  Address: { // root type
    city?: string | null; // String
    country?: string | null; // String
    line1?: string | null; // String
    line2?: string | null; // String
    postal_code?: string | null; // String
    state?: string | null; // String
  }
  Balance: { // root type
    available: NexusGenRootTypes['BalanceItem'][]; // [BalanceItem!]!
    livemode: boolean; // Boolean!
    object: string; // String!
    pending: NexusGenRootTypes['BalanceItem'][]; // [BalanceItem!]!
  }
  BalanceItem: { // root type
    amount: number; // Int!
    currency: string; // String!
    source_types: NexusGenRootTypes['BalanceSourceTypes']; // BalanceSourceTypes!
  }
  BalanceSourceTypes: { // root type
    bank_account?: number | null; // Int
    card?: number | null; // Int
  }
  BalanceTransaction: t.BalanceTransaction;
  BankAccount: t.BankAccount;
  Card: t.Card;
  Charge: t.Charge;
  CountrySpec: t.CountrySpec;
  Customer: t.Customer;
  CustomerBalanceTransaction: { // root type
    amount: number; // Int!
    currency: string; // String!
    id: string; // ID!
    object: string; // String!
  }
  Dob: { // root type
    day?: number | null; // Int
    month?: number | null; // Int
    year?: number | null; // Int
  }
  FeeDetails: { // root type
    amount?: number | null; // Int
    application?: string | null; // String
    currency?: string | null; // String
    description?: string | null; // String
    id?: string | null; // String
    type?: string | null; // String
  }
  Good: { // root type
    active: boolean; // Boolean!
    attributes: string[]; // [String!]!
    caption?: string | null; // String
    created: number; // Int!
    deactivate_on: string[]; // [String!]!
    description?: string | null; // String
    id: string; // ID!
    images: string[]; // [String!]!
    livemode: boolean; // Boolean!
    name: string; // String!
    object: string; // String!
    package_dimensions?: NexusGenRootTypes['PackageDimensions'] | null; // PackageDimensions
    shippable: boolean; // Boolean!
    type: string; // String!
    updated: number; // Int!
    url: string; // String!
  }
  Invoice: t.Invoice;
  InvoiceLineItem: t.InvoiceLineItem;
  LegalEntity: { // root type
    additional_owners: NexusGenRootTypes['AdditionalOwner'][]; // [AdditionalOwner!]!
    address?: NexusGenRootTypes['Address'] | null; // Address
    dob?: NexusGenRootTypes['Dob'] | null; // Dob
    first_name?: string | null; // String
    last_name?: string | null; // String
    maiden_name?: string | null; // String
    personal_address?: NexusGenRootTypes['Address'] | null; // Address
    personal_id_number_provided?: boolean | null; // Boolean
    type?: NexusGenEnums['LEGAL_ENTITY_TYPE'] | null; // LEGAL_ENTITY_TYPE
  }
  MetadataType: t.MetadataType;
  PackageDimensions: { // root type
    height: number; // Float!
    length: number; // Float!
    weight: number; // Float!
    width: number; // Float!
  }
  Plan: t.Plan;
  Query: {};
  Service: { // root type
    active: boolean; // Boolean!
    created: number; // Int!
    id: string; // ID!
    livemode: boolean; // Boolean!
    name: string; // String!
    object: string; // String!
    statement_descriptor?: string | null; // String
    type: string; // String!
    unit_label?: string | null; // String
    updated: number; // Int!
  }
  StripeSubscription: {};
  VerificationFields: { // root type
    additional?: Array<string | null> | null; // [String]
    minimum?: Array<string | null> | null; // [String]
  }
  Metadata: t.Metadata;
  Node: NexusGenRootTypes['Account'] | NexusGenRootTypes['BalanceTransaction'] | NexusGenRootTypes['BankAccount'] | NexusGenRootTypes['Card'] | NexusGenRootTypes['Charge'] | NexusGenRootTypes['Customer'] | NexusGenRootTypes['StripeSubscription'] | NexusGenRootTypes['InvoiceLineItem'] | NexusGenRootTypes['Plan'];
  Product: t.Product;
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  Currency: any;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  CARD_FUNDING_TYPE: NexusGenEnums['CARD_FUNDING_TYPE'];
  COUNTRY: NexusGenEnums['COUNTRY'];
  CURRENCY: NexusGenEnums['CURRENCY'];
  LEGAL_ENTITY_TYPE: NexusGenEnums['LEGAL_ENTITY_TYPE'];
}

export interface NexusGenFieldTypes {
  Account: { // field return type
    balance: NexusGenRootTypes['Balance']; // Balance!
    balanceTransactions: NexusGenRootTypes['BalanceTransaction'][]; // [BalanceTransaction!]!
    bankAccounts: NexusGenRootTypes['BankAccount'][]; // [BankAccount!]!
    cards: NexusGenRootTypes['Card'][]; // [Card!]!
    country: string; // String!
    id: string; // ID!
    legal_entity: NexusGenRootTypes['LegalEntity'] | null; // LegalEntity
    object: string; // String!
    verification: NexusGenRootTypes['AccountVerification'] | null; // AccountVerification
  }
  AccountVerification: { // field return type
    disabled_reason: string | null; // String
    due_by: number | null; // Int
    fields_needed: Array<string | null> | null; // [String]
  }
  AccountVerificationFields: { // field return type
    company: NexusGenRootTypes['VerificationFields']; // VerificationFields!
    individual: NexusGenRootTypes['VerificationFields']; // VerificationFields!
  }
  AdditionalOwner: { // field return type
    address: NexusGenRootTypes['Address'] | null; // Address
    dob: NexusGenRootTypes['Dob'] | null; // Dob
    first_name: string | null; // String
    last_name: string | null; // String
    maiden_name: string | null; // String
    personal_id_number_provided: boolean; // Boolean!
  }
  Address: { // field return type
    city: string | null; // String
    country: string | null; // String
    line1: string | null; // String
    line2: string | null; // String
    postal_code: string | null; // String
    state: string | null; // String
  }
  Balance: { // field return type
    available: NexusGenRootTypes['BalanceItem'][]; // [BalanceItem!]!
    livemode: boolean; // Boolean!
    object: string; // String!
    pending: NexusGenRootTypes['BalanceItem'][]; // [BalanceItem!]!
  }
  BalanceItem: { // field return type
    amount: number; // Int!
    currency: string; // String!
    source_types: NexusGenRootTypes['BalanceSourceTypes']; // BalanceSourceTypes!
  }
  BalanceSourceTypes: { // field return type
    bank_account: number | null; // Int
    card: number | null; // Int
  }
  BalanceTransaction: { // field return type
    amount: number | null; // Int
    available_on: number | null; // Int
    created: number | null; // Int
    currency: string | null; // String
    description: string | null; // String
    exchange_rate: number | null; // Float
    fee: number | null; // Int
    fee_details: NexusGenRootTypes['FeeDetails'][]; // [FeeDetails!]!
    id: string; // ID!
    net: number | null; // Int
    object: string; // String!
    source: string | null; // String
    status: string | null; // String
    type: string | null; // String
  }
  BankAccount: { // field return type
    account_holder_name: string | null; // String
    account_holder_type: NexusGenEnums['LEGAL_ENTITY_TYPE'] | null; // LEGAL_ENTITY_TYPE
    bank_name: string | null; // String
    country: string | null; // String
    currency: string | null; // String
    customer: string | null; // String
    fingerprint: string | null; // String
    id: string; // ID!
    last4: string | null; // String
    object: string; // String!
    routing_number: string | null; // String
    status: string | null; // String
  }
  Card: { // field return type
    brand: string | null; // String
    country: string | null; // String
    default_for_currency: boolean | null; // Boolean
    exp_month: number | null; // Int
    exp_year: number | null; // Int
    funding: NexusGenEnums['CARD_FUNDING_TYPE']; // CARD_FUNDING_TYPE!
    id: string; // ID!
    last4: string | null; // String
    name: string | null; // String
    object: string; // String!
  }
  Charge: { // field return type
    amount: number | null; // Int
    currency: string | null; // String
    id: string; // ID!
    object: string; // String!
    status: string; // String!
  }
  CountrySpec: { // field return type
    id: string | null; // String
    object: string | null; // String
    verificationFields: NexusGenRootTypes['AccountVerificationFields']; // AccountVerificationFields!
  }
  Customer: { // field return type
    address: NexusGenRootTypes['Address'] | null; // Address
    balance: NexusGenRootTypes['CustomerBalanceTransaction'][]; // [CustomerBalanceTransaction!]!
    bankAccounts: NexusGenRootTypes['BankAccount'][]; // [BankAccount!]!
    cards: NexusGenRootTypes['Card'][]; // [Card!]!
    charges: NexusGenRootTypes['Charge'][]; // [Charge!]!
    created: number; // Int!
    currency: string | null; // String
    delinquent: boolean; // Boolean!
    description: string | null; // String
    email: string | null; // String
    id: string; // ID!
    metadata: NexusGenRootTypes['MetadataType'][]; // [MetadataType!]!
    object: string; // String!
    subscriptions: NexusGenRootTypes['StripeSubscription'][]; // [StripeSubscription!]!
  }
  CustomerBalanceTransaction: { // field return type
    amount: number; // Int!
    currency: string; // String!
    id: string; // ID!
    object: string; // String!
  }
  Dob: { // field return type
    day: number | null; // Int
    month: number | null; // Int
    year: number | null; // Int
  }
  FeeDetails: { // field return type
    amount: number | null; // Int
    application: string | null; // String
    currency: string | null; // String
    description: string | null; // String
    id: string | null; // String
    type: string | null; // String
  }
  Good: { // field return type
    active: boolean; // Boolean!
    attributes: string[]; // [String!]!
    caption: string | null; // String
    created: number; // Int!
    deactivate_on: string[]; // [String!]!
    description: string | null; // String
    id: string; // ID!
    images: string[]; // [String!]!
    livemode: boolean; // Boolean!
    metadata: NexusGenRootTypes['MetadataType'][]; // [MetadataType!]!
    name: string; // String!
    object: string; // String!
    package_dimensions: NexusGenRootTypes['PackageDimensions'] | null; // PackageDimensions
    shippable: boolean; // Boolean!
    type: string; // String!
    updated: number; // Int!
    url: string; // String!
  }
  Invoice: { // field return type
    amount_due: number; // Int!
    amount_paid: number; // Int!
    id: string | null; // ID
    lines: NexusGenRootTypes['InvoiceLineItem'][]; // [InvoiceLineItem!]!
  }
  InvoiceLineItem: { // field return type
    amount: number; // Int!
    currency: string; // String!
    id: string; // ID!
    object: string; // String!
    quantity: number; // Int!
  }
  LegalEntity: { // field return type
    additional_owners: NexusGenRootTypes['AdditionalOwner'][]; // [AdditionalOwner!]!
    address: NexusGenRootTypes['Address'] | null; // Address
    dob: NexusGenRootTypes['Dob'] | null; // Dob
    first_name: string | null; // String
    last_name: string | null; // String
    maiden_name: string | null; // String
    personal_address: NexusGenRootTypes['Address'] | null; // Address
    personal_id_number_provided: boolean | null; // Boolean
    type: NexusGenEnums['LEGAL_ENTITY_TYPE'] | null; // LEGAL_ENTITY_TYPE
  }
  MetadataType: { // field return type
    key: string; // String!
    value: string; // String!
  }
  PackageDimensions: { // field return type
    height: number; // Float!
    length: number; // Float!
    weight: number; // Float!
    width: number; // Float!
  }
  Plan: { // field return type
    amount: number | null; // Int
    currency: string; // String!
    formattedAmount: string | null; // String
    id: string; // ID!
    object: string; // String!
    product: NexusGenRootTypes['Product']; // Product!
  }
  Query: { // field return type
    account: NexusGenRootTypes['Account'] | null; // Account
    accounts: NexusGenRootTypes['Account'][]; // [Account!]!
    charge: NexusGenRootTypes['Charge'] | null; // Charge
    charges: NexusGenRootTypes['Charge'][]; // [Charge!]!
    countrySpecs: NexusGenRootTypes['CountrySpec'] | null; // CountrySpec
    customer: NexusGenRootTypes['Customer'] | null; // Customer
    customers: NexusGenRootTypes['Customer'][]; // [Customer!]!
    invoice: NexusGenRootTypes['Invoice'] | null; // Invoice
    invoices: NexusGenRootTypes['Invoice'][]; // [Invoice!]!
    plan: NexusGenRootTypes['Plan'] | null; // Plan
    plans: NexusGenRootTypes['Plan'][]; // [Plan!]!
    platform: NexusGenRootTypes['Account']; // Account!
    product: NexusGenRootTypes['Product'] | null; // Product
    products: NexusGenRootTypes['Product'][]; // [Product!]!
    subscription: NexusGenRootTypes['StripeSubscription'] | null; // StripeSubscription
    subscriptions: NexusGenRootTypes['StripeSubscription'][]; // [StripeSubscription!]!
    upcomingInvoice: NexusGenRootTypes['Invoice'] | null; // Invoice
  }
  Service: { // field return type
    active: boolean; // Boolean!
    created: number; // Int!
    id: string; // ID!
    livemode: boolean; // Boolean!
    metadata: NexusGenRootTypes['MetadataType'][]; // [MetadataType!]!
    name: string; // String!
    object: string; // String!
    plans: NexusGenRootTypes['Plan'][]; // [Plan!]!
    statement_descriptor: string | null; // String
    type: string; // String!
    unit_label: string | null; // String
    updated: number; // Int!
  }
  StripeSubscription: { // field return type
    customer: NexusGenRootTypes['Customer']; // Customer!
    id: string; // ID!
    object: string; // String!
  }
  VerificationFields: { // field return type
    additional: Array<string | null> | null; // [String]
    minimum: Array<string | null> | null; // [String]
  }
  Metadata: { // field return type
    metadata: NexusGenRootTypes['MetadataType'][]; // [MetadataType!]!
  }
  Node: { // field return type
    id: string; // ID!
    object: string; // String!
  }
  Product: { // field return type
    active: boolean; // Boolean!
    created: number; // Int!
    id: string; // ID!
    livemode: boolean; // Boolean!
    name: string; // String!
    object: string; // String!
    type: string; // String!
    updated: number; // Int!
  }
}

export interface NexusGenArgTypes {
  Query: {
    account: { // args
      id: string; // ID!
    }
    charge: { // args
      id: string; // ID!
    }
    countrySpecs: { // args
      country: string; // String!
    }
    customer: { // args
      id: string; // ID!
    }
    customers: { // args
      endingBefore?: string | null; // String
      limit?: number | null; // Int
      startingAfter?: string | null; // String
    }
    invoice: { // args
      id: string; // ID!
    }
    plan: { // args
      id: string; // ID!
    }
    product: { // args
      id: string; // ID!
    }
    subscription: { // args
      id: string; // ID!
    }
    upcomingInvoice: { // args
      customerId: string; // ID!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
  Metadata: "Customer" | "Good" | "Service"
  Node: "Account" | "BalanceTransaction" | "BankAccount" | "Card" | "Charge" | "Customer" | "StripeSubscription" | "InvoiceLineItem" | "Plan"
  Product: "Good" | "Service"
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Account" | "AccountVerification" | "AccountVerificationFields" | "AdditionalOwner" | "Address" | "Balance" | "BalanceItem" | "BalanceSourceTypes" | "BalanceTransaction" | "BankAccount" | "Card" | "Charge" | "CountrySpec" | "Customer" | "CustomerBalanceTransaction" | "Dob" | "FeeDetails" | "Good" | "Invoice" | "InvoiceLineItem" | "LegalEntity" | "MetadataType" | "PackageDimensions" | "Plan" | "Query" | "Service" | "StripeSubscription" | "VerificationFields";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = "CARD_FUNDING_TYPE" | "COUNTRY" | "CURRENCY" | "LEGAL_ENTITY_TYPE";

export type NexusGenInterfaceNames = "Metadata" | "Node" | "Product";

export type NexusGenScalarNames = "Boolean" | "Currency" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: t.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}