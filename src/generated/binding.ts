import { makeBindingClass, Options } from 'graphql-binding'
import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import * as schema from  '../schema'

export interface Query {
    platform: <T = Account>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    accounts: <T = Array<Account>>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    account: <T = Account | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    countrySpecs: <T = CountrySpec | null>(args: { country: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    customers: <T = Array<Customer>>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    customer: <T = Customer | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {}

export interface Subscription {}

export interface Binding {
  query: Query
  mutation: Mutation
  subscription: Subscription
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
      [key: string]: any;
  }, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
  delegateSubscription(fieldName: string, args?: {
      [key: string]: any;
  }, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
  getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(...args: any[]): T
}

export const Binding = makeBindingClass<BindingConstructor<Binding>>({ schema })

/**
 * Types
*/

export type CARD_FUNDING_TYPE =   'credit' |
  'debit' |
  'prepaid' |
  'unknown'

export type COUNTRY =   'US'

export type CURRENCY =   'eur' |
  'gbp' |
  'usd'

export type LEGAL_ENTITY_TYPE =   'individual' |
  'company'

export interface Account {
  id: ID_Output
  country: String
  cards: Array<Card>
  bankAccounts: Array<BankAccount>
  legal_entity?: LegalEntity | null
  verification: AccountVerification
  balance: Balance
  transactions: Array<BalanceTransaction>
}

export interface AccountVerification {
  disabled_reason?: String | null
  due_by?: Int | null
  fields_needed?: Array<String | null> | null
}

export interface AccountVerificationFields {
  individual: VerificationFields
  company: VerificationFields
}

export interface AdditionalOwner {
  address?: Address | null
  dob?: Dob | null
  first_name?: String | null
  last_name?: String | null
  maiden_name?: String | null
  personal_id_number_provided: Boolean
}

export interface Address {
  city?: String | null
  country?: String | null
  line1?: String | null
  line2?: String | null
  postal_code?: String | null
  state?: String | null
}

export interface Balance {
  object: String
  livemode: Boolean
  available: Array<BalanceItem>
  pending: Array<BalanceItem>
}

export interface BalanceItem {
  currency: String
  amount: Int
}

export interface BalanceTransaction {
  id: String
  object: String
  amount?: Int | null
  available_on?: Int | null
  created?: Int | null
  currency?: String | null
  description?: String | null
  exchange_rate?: Float | null
  fee?: Int | null
  fee_details: Array<FeeDetails>
  net?: Int | null
  source?: String | null
  status?: String | null
  type?: String | null
}

export interface BankAccount {
  id: ID_Output
  account_holder_name?: String | null
  account_holder_type?: LEGAL_ENTITY_TYPE | null
  bank_name?: String | null
  country?: String | null
  currency?: String | null
  customer?: String | null
  fingerprint?: String | null
  last4?: String | null
  routing_number?: String | null
  status?: String | null
}

export interface Card {
  id: ID_Output
  address_city?: String | null
  address_country?: String | null
  address_line1?: String | null
  address_line1_check?: String | null
  address_line2?: String | null
  address_state?: String | null
  address_zip?: String | null
  address_zip_check?: String | null
  brand?: String | null
  country?: String | null
  customer?: String | null
  cvc_check?: String | null
  default_for_currency?: Boolean | null
  dynamic_last4?: String | null
  exp_month?: Int | null
  exp_year?: Int | null
  fingerprint?: String | null
  funding: CARD_FUNDING_TYPE
  last4?: String | null
  name?: String | null
  tokenization_method?: String | null
}

export interface Charge {
  id: String
  object: String
  amount?: Int | null
  currency?: String | null
  balance_transaction?: String | null
}

export interface CountrySpec {
  id?: String | null
  object?: String | null
  default_currency?: String | null
  verification_fields: AccountVerificationFields
}

export interface Customer {
  id: ID_Output
  email?: String | null
  cards: Array<Card>
  bankAccounts: Array<BankAccount>
  charges: Array<Charge>
}

export interface Dob {
  day?: Int | null
  month?: Int | null
  year?: Int | null
}

export interface FeeDetails {
  id?: String | null
  amount?: Int | null
  application?: String | null
  currency?: String | null
  description?: String | null
  type?: String | null
}

export interface LegalEntity {
  type?: LEGAL_ENTITY_TYPE | null
  additional_owners: Array<AdditionalOwner>
  address?: Address | null
  dob?: Dob | null
  first_name?: String | null
  last_name?: String | null
  maiden_name?: String | null
  personal_address?: Address | null
  personal_id_number_provided?: Boolean | null
}

export interface VerificationFields {
  minimum?: Array<String | null> | null
  additional?: Array<String | null> | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string