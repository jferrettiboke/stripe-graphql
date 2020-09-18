/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as t from "../typeDefs"
import { core } from "@nexus/schema"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    currency<FieldName extends string>(fieldName: FieldName, opts?: core.ScalarInputFieldConfig<core.GetGen3<"inputTypes", TypeName, FieldName>>): void // "CurrencyScalar";
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.ScalarInputFieldConfig<core.GetGen3<"inputTypes", TypeName, FieldName>>): void // "DateTimeScalar";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    currency<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "CurrencyScalar";
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTimeScalar";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  PaginationInput: { // input type
    ending_before?: string | null; // String
    limit: number; // Int!
    starting_after?: string | null; // String
  }
}

export interface NexusGenEnums {
  CARD_FUNDING_TYPE: "credit" | "debit" | "prepaid" | "unknown"
  LEGAL_ENTITY_TYPE: "company" | "individual"
}

export interface NexusGenRootTypes {
  Address: { // root type
    city?: string | null; // String
    country?: string | null; // String
    line1?: string | null; // String
    line2?: string | null; // String
    postal_code?: string | null; // String
    state?: string | null; // String
  }
  Amount: {};
  Balance: { // root type
    available: NexusGenRootTypes['BalanceFund'][]; // [BalanceFund!]!
    pending: NexusGenRootTypes['BalanceFund'][]; // [BalanceFund!]!
  }
  BalanceFund: { // root type
    source_types: NexusGenRootTypes['BalanceFundSourceTypes']; // BalanceFundSourceTypes!
  }
  BalanceFundSourceTypes: { // root type
    bank_account?: number | null; // Int
    card?: number | null; // Int
    fpx?: number | null; // Int
  }
  BalanceTransaction: t.BalanceTransaction;
  BankAccount: t.BankAccount;
  Card: t.Card;
  Charge: t.Charge;
  Currency: {};
  Customer: t.Customer;
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
  Metadata: t.Metadata;
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
    description?: string | null; // String
    id: string; // ID!
    livemode: boolean; // Boolean!
    name: string; // String!
    object: string; // String!
    statement_descriptor?: string | null; // String
    type: string; // String!
    unit_label?: string | null; // String
    updated: number; // Int!
  }
  Subscription: { // root type
    billing_cycle_anchor: number; // Int!
    cancel_at?: number | null; // Int
    canceled_at?: number | null; // Int
    collection_method: string; // String!
    created: number; // Int!
    current_period_end: number; // Int!
    current_period_start: number; // Int!
    id: string; // ID!
    latest_invoice?: number | null; // Int
    object: string; // String!
    status: string; // String!
  }
  SubscriptionItem: { // root type
    key: string; // String!
    value: string; // String!
  }
  Tier: { // root type
    flat_amount: number; // Int!
    flat_amount_decimal: string; // String!
    unit_amount: number; // Int!
    unit_amount_decimal: string; // String!
    up_to: number; // Int!
  }
  TransformUsage: { // root type
    divide_by: number; // Int!
    round: string; // String!
  }
  AmountInterface: NexusGenRootTypes['BalanceFund'] | NexusGenRootTypes['BalanceTransaction'] | NexusGenRootTypes['Charge'] | NexusGenRootTypes['Plan'];
  CurrencyInterface: NexusGenRootTypes['BalanceFund'] | NexusGenRootTypes['BalanceTransaction'] | NexusGenRootTypes['BankAccount'] | NexusGenRootTypes['Charge'] | NexusGenRootTypes['Plan'];
  MetadataInterface: NexusGenRootTypes['BankAccount'] | NexusGenRootTypes['Card'] | NexusGenRootTypes['Charge'] | NexusGenRootTypes['Customer'] | NexusGenRootTypes['Plan'] | NexusGenRootTypes['Subscription'];
  NodeInterface: NexusGenRootTypes['BalanceTransaction'] | NexusGenRootTypes['BankAccount'] | NexusGenRootTypes['Card'] | NexusGenRootTypes['Charge'] | NexusGenRootTypes['Customer'] | NexusGenRootTypes['Good'] | NexusGenRootTypes['Plan'] | NexusGenRootTypes['Service'] | NexusGenRootTypes['Subscription'];
  ProductInterface: NexusGenRootTypes['Good'] | NexusGenRootTypes['Service'];
  SubscriptionItemInterface: NexusGenRootTypes['Subscription'];
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  CurrencyScalar: any;
  DateTimeScalar: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  PaginationInput: NexusGenInputs['PaginationInput'];
  CARD_FUNDING_TYPE: NexusGenEnums['CARD_FUNDING_TYPE'];
  LEGAL_ENTITY_TYPE: NexusGenEnums['LEGAL_ENTITY_TYPE'];
}

export interface NexusGenFieldTypes {
  Address: { // field return type
    city: string | null; // String
    country: string | null; // String
    line1: string | null; // String
    line2: string | null; // String
    postal_code: string | null; // String
    state: string | null; // String
  }
  Amount: { // field return type
    formatted: string; // String!
    raw: number; // Int!
    raw_formatted: number; // Float!
  }
  Balance: { // field return type
    available: NexusGenRootTypes['BalanceFund'][]; // [BalanceFund!]!
    pending: NexusGenRootTypes['BalanceFund'][]; // [BalanceFund!]!
  }
  BalanceFund: { // field return type
    amount: NexusGenRootTypes['Amount']; // Amount!
    currency: NexusGenRootTypes['Currency']; // Currency!
    source_types: NexusGenRootTypes['BalanceFundSourceTypes']; // BalanceFundSourceTypes!
  }
  BalanceFundSourceTypes: { // field return type
    bank_account: number | null; // Int
    card: number | null; // Int
    fpx: number | null; // Int
  }
  BalanceTransaction: { // field return type
    amount: NexusGenRootTypes['Amount']; // Amount!
    currency: NexusGenRootTypes['Currency']; // Currency!
    id: string; // ID!
    object: string; // String!
  }
  BankAccount: { // field return type
    account_holder_name: string | null; // String
    account_holder_type: NexusGenEnums['LEGAL_ENTITY_TYPE'] | null; // LEGAL_ENTITY_TYPE
    bank_name: string | null; // String
    country: string | null; // String
    currency: NexusGenRootTypes['Currency']; // Currency!
    customer: string | null; // String
    fingerprint: string | null; // String
    id: string; // ID!
    last4: string | null; // String
    metadata: NexusGenRootTypes['Metadata'][]; // [Metadata!]!
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
    metadata: NexusGenRootTypes['Metadata'][]; // [Metadata!]!
    name: string | null; // String
    object: string; // String!
  }
  Charge: { // field return type
    amount: NexusGenRootTypes['Amount']; // Amount!
    created: number; // Int!
    currency: NexusGenRootTypes['Currency']; // Currency!
    customer: NexusGenRootTypes['Customer']; // Customer!
    description: string | null; // String
    failure_code: string | null; // String
    failure_message: string | null; // String
    id: string; // ID!
    metadata: NexusGenRootTypes['Metadata'][]; // [Metadata!]!
    object: string; // String!
    payment_intent: string; // String!
    receipt_number: string | null; // String
    receipt_url: string | null; // String
    status: string; // String!
  }
  Currency: { // field return type
    code: string; // String!
    symbol: string; // String!
  }
  Customer: { // field return type
    address: NexusGenRootTypes['Address'] | null; // Address
    bankAccounts: NexusGenRootTypes['BankAccount'][]; // [BankAccount!]!
    cards: NexusGenRootTypes['Card'][]; // [Card!]!
    created: number; // Int!
    currency: string | null; // String
    delinquent: boolean; // Boolean!
    description: string | null; // String
    email: string | null; // String
    id: string; // ID!
    metadata: NexusGenRootTypes['Metadata'][]; // [Metadata!]!
    object: string; // String!
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
    name: string; // String!
    object: string; // String!
    package_dimensions: NexusGenRootTypes['PackageDimensions'] | null; // PackageDimensions
    shippable: boolean; // Boolean!
    type: string; // String!
    updated: number; // Int!
    url: string; // String!
  }
  Metadata: { // field return type
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
    active: boolean; // Boolean!
    aggregate_usage: string | null; // String
    amount: NexusGenRootTypes['Amount']; // Amount!
    amount_decimal: string | null; // String
    billing_scheme: string; // String!
    created: number; // Int!
    currency: NexusGenRootTypes['Currency']; // Currency!
    id: string; // ID!
    interval: string; // String!
    interval_count: number; // Int!
    livemode: boolean; // Boolean!
    metadata: NexusGenRootTypes['Metadata'][]; // [Metadata!]!
    nickname: string | null; // String
    object: string; // String!
    tiers: NexusGenRootTypes['Tier'][] | null; // [Tier!]
    tiers_mode: string | null; // String
    transform_usage: NexusGenRootTypes['TransformUsage'] | null; // TransformUsage
    trial_period_days: number | null; // Int
    usage_type: string; // String!
  }
  Query: { // field return type
    balance: NexusGenRootTypes['Balance']; // Balance!
    balanceTransaction: NexusGenRootTypes['BalanceTransaction']; // BalanceTransaction!
    balanceTransactions: NexusGenRootTypes['BalanceTransaction'][]; // [BalanceTransaction!]!
    charge: NexusGenRootTypes['Charge']; // Charge!
    charges: NexusGenRootTypes['Charge'][]; // [Charge!]!
    customer: NexusGenRootTypes['Customer']; // Customer!
    customers: NexusGenRootTypes['Customer'][]; // [Customer!]!
    plans: NexusGenRootTypes['Plan'][]; // [Plan!]!
    product: NexusGenRootTypes['ProductInterface'] | null; // ProductInterface
    products: NexusGenRootTypes['ProductInterface'][]; // [ProductInterface!]!
    subscription: NexusGenRootTypes['Subscription'] | null; // Subscription
    subscriptions: NexusGenRootTypes['Subscription'][]; // [Subscription!]!
  }
  Service: { // field return type
    active: boolean; // Boolean!
    created: number; // Int!
    description: string | null; // String
    id: string; // ID!
    livemode: boolean; // Boolean!
    name: string; // String!
    object: string; // String!
    plans: NexusGenRootTypes['Plan'][]; // [Plan!]!
    statement_descriptor: string | null; // String
    type: string; // String!
    unit_label: string | null; // String
    updated: number; // Int!
  }
  Subscription: { // field return type
    billing_cycle_anchor: number; // Int!
    cancel_at: number | null; // Int
    canceled_at: number | null; // Int
    collection_method: string; // String!
    created: number; // Int!
    current_period_end: number; // Int!
    current_period_start: number; // Int!
    customer: NexusGenRootTypes['Customer']; // Customer!
    id: string; // ID!
    items: NexusGenRootTypes['SubscriptionItem'][]; // [SubscriptionItem!]!
    latest_invoice: number | null; // Int
    metadata: NexusGenRootTypes['Metadata'][]; // [Metadata!]!
    object: string; // String!
    status: string; // String!
  }
  SubscriptionItem: { // field return type
    key: string; // String!
    value: string; // String!
  }
  Tier: { // field return type
    flat_amount: number; // Int!
    flat_amount_decimal: string; // String!
    unit_amount: number; // Int!
    unit_amount_decimal: string; // String!
    up_to: number; // Int!
  }
  TransformUsage: { // field return type
    divide_by: number; // Int!
    round: string; // String!
  }
  AmountInterface: { // field return type
    amount: NexusGenRootTypes['Amount']; // Amount!
  }
  CurrencyInterface: { // field return type
    currency: NexusGenRootTypes['Currency']; // Currency!
  }
  MetadataInterface: { // field return type
    metadata: NexusGenRootTypes['Metadata'][]; // [Metadata!]!
  }
  NodeInterface: { // field return type
    id: string; // ID!
    object: string; // String!
  }
  ProductInterface: { // field return type
    active: boolean; // Boolean!
    created: number; // Int!
    description: string | null; // String
    livemode: boolean; // Boolean!
    name: string; // String!
    type: string; // String!
    updated: number; // Int!
  }
  SubscriptionItemInterface: { // field return type
    items: NexusGenRootTypes['SubscriptionItem'][]; // [SubscriptionItem!]!
  }
}

export interface NexusGenArgTypes {
  Query: {
    balanceTransaction: { // args
      id: string; // String!
    }
    charge: { // args
      id: string; // String!
    }
    customer: { // args
      id: string; // String!
    }
    product: { // args
      id: string; // ID!
    }
    subscription: { // args
      id: string; // ID!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
  AmountInterface: "BalanceFund" | "BalanceTransaction" | "Charge" | "Plan"
  CurrencyInterface: "BalanceFund" | "BalanceTransaction" | "BankAccount" | "Charge" | "Plan"
  MetadataInterface: "BankAccount" | "Card" | "Charge" | "Customer" | "Plan" | "Subscription"
  NodeInterface: "BalanceTransaction" | "BankAccount" | "Card" | "Charge" | "Customer" | "Good" | "Plan" | "Service" | "Subscription"
  ProductInterface: "Good" | "Service"
  SubscriptionItemInterface: "Subscription"
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Address" | "Amount" | "Balance" | "BalanceFund" | "BalanceFundSourceTypes" | "BalanceTransaction" | "BankAccount" | "Card" | "Charge" | "Currency" | "Customer" | "Good" | "Metadata" | "PackageDimensions" | "Plan" | "Query" | "Service" | "Subscription" | "SubscriptionItem" | "Tier" | "TransformUsage";

export type NexusGenInputNames = "PaginationInput";

export type NexusGenEnumNames = "CARD_FUNDING_TYPE" | "LEGAL_ENTITY_TYPE";

export type NexusGenInterfaceNames = "AmountInterface" | "CurrencyInterface" | "MetadataInterface" | "NodeInterface" | "ProductInterface" | "SubscriptionItemInterface";

export type NexusGenScalarNames = "Boolean" | "CurrencyScalar" | "DateTimeScalar" | "Float" | "ID" | "Int" | "String";

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


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}