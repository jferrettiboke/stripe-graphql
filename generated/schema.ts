import {FieldsSelection,Observable} from 'genql-runtime'

export type Scalars = {
    String: string,
    Int: number,
    Float: number,
    ID: string,
    Boolean: boolean,
    CurrencyScalar: any,
    DateTimeScalar: any,
}

export interface Amount {
    formatted: Scalars['String']
    raw: Scalars['Int']
    raw_formatted: Scalars['Float']
    __typename?: 'Amount'
}

export type AmountInterface = BalanceFund | BalanceTransaction | Charge | Plan

export interface Balance {
    available: BalanceFund[]
    pending: BalanceFund[]
    __typename?: 'Balance'
}

export interface BalanceFund {
    amount: Amount
    currency: Currency
    source_types: BalanceFundSourceTypes
    __typename?: 'BalanceFund'
}

export interface BalanceFundSourceTypes {
    bank_account?: Scalars['Int']
    card?: Scalars['Int']
    fpx?: Scalars['Int']
    __typename?: 'BalanceFundSourceTypes'
}

export interface BalanceTransaction {
    amount: Amount
    currency: Currency
    id: Scalars['ID']
    object: Scalars['String']
    __typename?: 'BalanceTransaction'
}

export interface BankAccount {
    account_holder_name?: Scalars['String']
    account_holder_type?: LEGAL_ENTITY_TYPE
    bank_name?: Scalars['String']
    country?: Scalars['String']
    currency: Currency
    customer?: Scalars['String']
    fingerprint?: Scalars['String']
    id: Scalars['ID']
    last4?: Scalars['String']
    metadata: Metadata[]
    object: Scalars['String']
    routing_number?: Scalars['String']
    status?: Scalars['String']
    __typename?: 'BankAccount'
}

export interface Card {
    brand?: Scalars['String']
    country?: Scalars['String']
    default_for_currency?: Scalars['Boolean']
    exp_month?: Scalars['Int']
    exp_year?: Scalars['Int']
    funding: CARD_FUNDING_TYPE
    id: Scalars['ID']
    last4?: Scalars['String']
    metadata: Metadata[]
    name?: Scalars['String']
    object: Scalars['String']
    __typename?: 'Card'
}

export type CARD_FUNDING_TYPE = 'credit' | 'debit' | 'prepaid' | 'unknown'

export interface Charge {
    amount: Amount
    currency: Currency
    id: Scalars['ID']
    object: Scalars['String']
    __typename?: 'Charge'
}

export interface Currency {
    code: Scalars['String']
    symbol: Scalars['String']
    __typename?: 'Currency'
}

export type CurrencyInterface = BalanceFund | BalanceTransaction | BankAccount | Charge | Plan

export interface Customer {
    bankAccounts: BankAccount[]
    cards: Card[]
    id: Scalars['ID']
    metadata: Metadata[]
    object: Scalars['String']
    __typename?: 'Customer'
}

export interface Good {
    active: Scalars['Boolean']
    attributes: Scalars['String'][]
    caption?: Scalars['String']
    created: Scalars['Int']
    deactivate_on: Scalars['String'][]
    description?: Scalars['String']
    id: Scalars['ID']
    images: Scalars['String'][]
    livemode: Scalars['Boolean']
    name: Scalars['String']
    object: Scalars['String']
    package_dimensions?: PackageDimensions
    shippable: Scalars['Boolean']
    type: Scalars['String']
    updated: Scalars['Int']
    url: Scalars['String']
    __typename?: 'Good'
}

export type LEGAL_ENTITY_TYPE = 'company' | 'individual'

export interface Metadata {
    key: Scalars['String']
    value: Scalars['String']
    __typename?: 'Metadata'
}

export type MetadataInterface = BankAccount | Card | Customer | Plan

export type NodeInterface = BalanceTransaction | BankAccount | Card | Charge | Customer | Good | Plan | Service

export interface PackageDimensions {
    height: Scalars['Float']
    length: Scalars['Float']
    weight: Scalars['Float']
    width: Scalars['Float']
    __typename?: 'PackageDimensions'
}

export interface Plan {
    active: Scalars['Boolean']
    aggregate_usage?: Scalars['String']
    amount: Amount
    amount_decimal?: Scalars['String']
    billing_scheme: Scalars['String']
    created: Scalars['Int']
    currency: Currency
    id: Scalars['ID']
    interval: Scalars['String']
    interval_count: Scalars['Int']
    livemode: Scalars['Boolean']
    metadata: Metadata[]
    nickname?: Scalars['String']
    object: Scalars['String']
    tiers?: Tier[]
    tiers_mode?: Scalars['String']
    transform_usage?: TransformUsage
    trial_period_days?: Scalars['Int']
    usage_type: Scalars['String']
    __typename?: 'Plan'
}

export type ProductInterface = Good | Service

export interface Query {
    balance: Balance
    balanceTransaction: BalanceTransaction
    balanceTransactions: BalanceTransaction[]
    charge: Charge
    charges: Charge[]
    customer: Customer
    customers: Customer[]
    plan?: Plan
    plans: Plan[]
    product?: ProductInterface
    products: ProductInterface[]
    __typename?: 'Query'
}

export interface Service {
    active: Scalars['Boolean']
    created: Scalars['Int']
    id: Scalars['ID']
    livemode: Scalars['Boolean']
    name: Scalars['String']
    object: Scalars['String']
    plans: Plan[]
    statement_descriptor?: Scalars['String']
    type: Scalars['String']
    unit_label?: Scalars['String']
    updated: Scalars['Int']
    __typename?: 'Service'
}

export interface Tier {
    /** Price for the entire tier. */
    flat_amount: Scalars['Int']
    /** Same as flat_amount, but contains a decimal value with at most 12 decimal places. */
    flat_amount_decimal: Scalars['String']
    /** Per unit price for units relevant to the tier. */
    unit_amount: Scalars['Int']
    /** Same as unit_amount, but contains a decimal value with at most 12 decimal places. */
    unit_amount_decimal: Scalars['String']
    up_to: Scalars['Int']
    __typename?: 'Tier'
}

export interface TransformUsage {
    divide_by: Scalars['Int']
    round: Scalars['String']
    __typename?: 'TransformUsage'
}

export interface AmountRequest{
    formatted?: boolean | number
    raw?: boolean | number
    raw_formatted?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AmountInterfaceRequest{
    amount?: AmountRequest
    on_BalanceFund?: BalanceFundRequest
    on_BalanceTransaction?: BalanceTransactionRequest
    on_Charge?: ChargeRequest
    on_Plan?: PlanRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BalanceRequest{
    available?: BalanceFundRequest
    pending?: BalanceFundRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BalanceFundRequest{
    amount?: AmountRequest
    currency?: CurrencyRequest
    source_types?: BalanceFundSourceTypesRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BalanceFundSourceTypesRequest{
    bank_account?: boolean | number
    card?: boolean | number
    fpx?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BalanceTransactionRequest{
    amount?: AmountRequest
    currency?: CurrencyRequest
    id?: boolean | number
    object?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BankAccountRequest{
    account_holder_name?: boolean | number
    account_holder_type?: boolean | number
    bank_name?: boolean | number
    country?: boolean | number
    currency?: CurrencyRequest
    customer?: boolean | number
    fingerprint?: boolean | number
    id?: boolean | number
    last4?: boolean | number
    metadata?: MetadataRequest
    object?: boolean | number
    routing_number?: boolean | number
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CardRequest{
    brand?: boolean | number
    country?: boolean | number
    default_for_currency?: boolean | number
    exp_month?: boolean | number
    exp_year?: boolean | number
    funding?: boolean | number
    id?: boolean | number
    last4?: boolean | number
    metadata?: MetadataRequest
    name?: boolean | number
    object?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ChargeRequest{
    amount?: AmountRequest
    currency?: CurrencyRequest
    id?: boolean | number
    object?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CurrencyRequest{
    code?: boolean | number
    symbol?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CurrencyInterfaceRequest{
    currency?: CurrencyRequest
    on_BalanceFund?: BalanceFundRequest
    on_BalanceTransaction?: BalanceTransactionRequest
    on_BankAccount?: BankAccountRequest
    on_Charge?: ChargeRequest
    on_Plan?: PlanRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CustomerRequest{
    bankAccounts?: BankAccountRequest
    cards?: CardRequest
    id?: boolean | number
    metadata?: MetadataRequest
    object?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GoodRequest{
    active?: boolean | number
    attributes?: boolean | number
    caption?: boolean | number
    created?: boolean | number
    deactivate_on?: boolean | number
    description?: boolean | number
    id?: boolean | number
    images?: boolean | number
    livemode?: boolean | number
    name?: boolean | number
    object?: boolean | number
    package_dimensions?: PackageDimensionsRequest
    shippable?: boolean | number
    type?: boolean | number
    updated?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MetadataRequest{
    key?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MetadataInterfaceRequest{
    metadata?: MetadataRequest
    on_BankAccount?: BankAccountRequest
    on_Card?: CardRequest
    on_Customer?: CustomerRequest
    on_Plan?: PlanRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface NodeInterfaceRequest{
    id?: boolean | number
    object?: boolean | number
    on_BalanceTransaction?: BalanceTransactionRequest
    on_BankAccount?: BankAccountRequest
    on_Card?: CardRequest
    on_Charge?: ChargeRequest
    on_Customer?: CustomerRequest
    on_Good?: GoodRequest
    on_Plan?: PlanRequest
    on_Service?: ServiceRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PackageDimensionsRequest{
    height?: boolean | number
    length?: boolean | number
    weight?: boolean | number
    width?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaginationInput {ending_before?: (Scalars['String'] | null),limit: Scalars['Int'],starting_after?: (Scalars['String'] | null)}

export interface PlanRequest{
    active?: boolean | number
    aggregate_usage?: boolean | number
    amount?: AmountRequest
    amount_decimal?: boolean | number
    billing_scheme?: boolean | number
    created?: boolean | number
    currency?: CurrencyRequest
    id?: boolean | number
    interval?: boolean | number
    interval_count?: boolean | number
    livemode?: boolean | number
    metadata?: MetadataRequest
    nickname?: boolean | number
    object?: boolean | number
    tiers?: TierRequest
    tiers_mode?: boolean | number
    transform_usage?: TransformUsageRequest
    trial_period_days?: boolean | number
    usage_type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProductInterfaceRequest{
    active?: boolean | number
    created?: boolean | number
    livemode?: boolean | number
    name?: boolean | number
    type?: boolean | number
    updated?: boolean | number
    on_Good?: GoodRequest
    on_Service?: ServiceRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryRequest{
    balance?: BalanceRequest
    balanceTransaction?: [{id: Scalars['String']},BalanceTransactionRequest]
    balanceTransactions?: BalanceTransactionRequest
    charge?: [{id: Scalars['String']},ChargeRequest]
    charges?: ChargeRequest
    customer?: [{id: Scalars['String']},CustomerRequest]
    customers?: CustomerRequest
    plan?: [{id: Scalars['ID']},PlanRequest]
    plans?: PlanRequest
    product?: [{id: Scalars['ID']},ProductInterfaceRequest]
    products?: ProductInterfaceRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ServiceRequest{
    active?: boolean | number
    created?: boolean | number
    id?: boolean | number
    livemode?: boolean | number
    name?: boolean | number
    object?: boolean | number
    plans?: PlanRequest
    statement_descriptor?: boolean | number
    type?: boolean | number
    unit_label?: boolean | number
    updated?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TierRequest{
    /** Price for the entire tier. */
    flat_amount?: boolean | number
    /** Same as flat_amount, but contains a decimal value with at most 12 decimal places. */
    flat_amount_decimal?: boolean | number
    /** Per unit price for units relevant to the tier. */
    unit_amount?: boolean | number
    /** Same as unit_amount, but contains a decimal value with at most 12 decimal places. */
    unit_amount_decimal?: boolean | number
    up_to?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TransformUsageRequest{
    divide_by?: boolean | number
    round?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


const Amount_possibleTypes = ['Amount']
export const isAmount = (obj?: { __typename?: any } | null): obj is Amount => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isAmount"')
  return Amount_possibleTypes.includes(obj.__typename)
}



const AmountInterface_possibleTypes = ['BalanceFund','BalanceTransaction','Charge','Plan']
export const isAmountInterface = (obj?: { __typename?: any } | null): obj is AmountInterface => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isAmountInterface"')
  return AmountInterface_possibleTypes.includes(obj.__typename)
}



const Balance_possibleTypes = ['Balance']
export const isBalance = (obj?: { __typename?: any } | null): obj is Balance => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBalance"')
  return Balance_possibleTypes.includes(obj.__typename)
}



const BalanceFund_possibleTypes = ['BalanceFund']
export const isBalanceFund = (obj?: { __typename?: any } | null): obj is BalanceFund => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBalanceFund"')
  return BalanceFund_possibleTypes.includes(obj.__typename)
}



const BalanceFundSourceTypes_possibleTypes = ['BalanceFundSourceTypes']
export const isBalanceFundSourceTypes = (obj?: { __typename?: any } | null): obj is BalanceFundSourceTypes => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBalanceFundSourceTypes"')
  return BalanceFundSourceTypes_possibleTypes.includes(obj.__typename)
}



const BalanceTransaction_possibleTypes = ['BalanceTransaction']
export const isBalanceTransaction = (obj?: { __typename?: any } | null): obj is BalanceTransaction => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBalanceTransaction"')
  return BalanceTransaction_possibleTypes.includes(obj.__typename)
}



const BankAccount_possibleTypes = ['BankAccount']
export const isBankAccount = (obj?: { __typename?: any } | null): obj is BankAccount => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBankAccount"')
  return BankAccount_possibleTypes.includes(obj.__typename)
}



const Card_possibleTypes = ['Card']
export const isCard = (obj?: { __typename?: any } | null): obj is Card => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCard"')
  return Card_possibleTypes.includes(obj.__typename)
}



const Charge_possibleTypes = ['Charge']
export const isCharge = (obj?: { __typename?: any } | null): obj is Charge => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCharge"')
  return Charge_possibleTypes.includes(obj.__typename)
}



const Currency_possibleTypes = ['Currency']
export const isCurrency = (obj?: { __typename?: any } | null): obj is Currency => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCurrency"')
  return Currency_possibleTypes.includes(obj.__typename)
}



const CurrencyInterface_possibleTypes = ['BalanceFund','BalanceTransaction','BankAccount','Charge','Plan']
export const isCurrencyInterface = (obj?: { __typename?: any } | null): obj is CurrencyInterface => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCurrencyInterface"')
  return CurrencyInterface_possibleTypes.includes(obj.__typename)
}



const Customer_possibleTypes = ['Customer']
export const isCustomer = (obj?: { __typename?: any } | null): obj is Customer => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCustomer"')
  return Customer_possibleTypes.includes(obj.__typename)
}



const Good_possibleTypes = ['Good']
export const isGood = (obj?: { __typename?: any } | null): obj is Good => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isGood"')
  return Good_possibleTypes.includes(obj.__typename)
}



const Metadata_possibleTypes = ['Metadata']
export const isMetadata = (obj?: { __typename?: any } | null): obj is Metadata => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMetadata"')
  return Metadata_possibleTypes.includes(obj.__typename)
}



const MetadataInterface_possibleTypes = ['BankAccount','Card','Customer','Plan']
export const isMetadataInterface = (obj?: { __typename?: any } | null): obj is MetadataInterface => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMetadataInterface"')
  return MetadataInterface_possibleTypes.includes(obj.__typename)
}



const NodeInterface_possibleTypes = ['BalanceTransaction','BankAccount','Card','Charge','Customer','Good','Plan','Service']
export const isNodeInterface = (obj?: { __typename?: any } | null): obj is NodeInterface => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isNodeInterface"')
  return NodeInterface_possibleTypes.includes(obj.__typename)
}



const PackageDimensions_possibleTypes = ['PackageDimensions']
export const isPackageDimensions = (obj?: { __typename?: any } | null): obj is PackageDimensions => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPackageDimensions"')
  return PackageDimensions_possibleTypes.includes(obj.__typename)
}



const Plan_possibleTypes = ['Plan']
export const isPlan = (obj?: { __typename?: any } | null): obj is Plan => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPlan"')
  return Plan_possibleTypes.includes(obj.__typename)
}



const ProductInterface_possibleTypes = ['Good','Service']
export const isProductInterface = (obj?: { __typename?: any } | null): obj is ProductInterface => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isProductInterface"')
  return ProductInterface_possibleTypes.includes(obj.__typename)
}



const Query_possibleTypes = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



const Service_possibleTypes = ['Service']
export const isService = (obj?: { __typename?: any } | null): obj is Service => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isService"')
  return Service_possibleTypes.includes(obj.__typename)
}



const Tier_possibleTypes = ['Tier']
export const isTier = (obj?: { __typename?: any } | null): obj is Tier => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTier"')
  return Tier_possibleTypes.includes(obj.__typename)
}



const TransformUsage_possibleTypes = ['TransformUsage']
export const isTransformUsage = (obj?: { __typename?: any } | null): obj is TransformUsage => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isTransformUsage"')
  return TransformUsage_possibleTypes.includes(obj.__typename)
}


export interface AmountPromiseChain{formatted:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>}),raw:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Promise<Scalars['Int']>}),raw_formatted:({get:(request?:boolean|number,defaultValue?:Scalars['Float'])=>Promise<Scalars['Float']>})}

export interface AmountObservableChain{formatted:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>}),raw:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Observable<Scalars['Int']>}),raw_formatted:({get:(request?:boolean|number,defaultValue?:Scalars['Float'])=>Observable<Scalars['Float']>})}

export interface AmountInterfacePromiseChain{amount:(AmountPromiseChain & {get: (request: AmountRequest, defaultValue?:Amount)=>Promise<Amount>})}

export interface AmountInterfaceObservableChain{amount:(AmountObservableChain & {get: (request: AmountRequest, defaultValue?:Amount)=>Observable<Amount>})}

export interface BalancePromiseChain{available:({get: (request: BalanceFundRequest, defaultValue?:BalanceFund[])=>Promise<BalanceFund[]>}),pending:({get: (request: BalanceFundRequest, defaultValue?:BalanceFund[])=>Promise<BalanceFund[]>})}

export interface BalanceObservableChain{available:({get: (request: BalanceFundRequest, defaultValue?:BalanceFund[])=>Observable<BalanceFund[]>}),pending:({get: (request: BalanceFundRequest, defaultValue?:BalanceFund[])=>Observable<BalanceFund[]>})}

export interface BalanceFundPromiseChain{amount:(AmountPromiseChain & {get: (request: AmountRequest, defaultValue?:Amount)=>Promise<Amount>}),currency:(CurrencyPromiseChain & {get: (request: CurrencyRequest, defaultValue?:Currency)=>Promise<Currency>}),source_types:(BalanceFundSourceTypesPromiseChain & {get: (request: BalanceFundSourceTypesRequest, defaultValue?:BalanceFundSourceTypes)=>Promise<BalanceFundSourceTypes>})}

export interface BalanceFundObservableChain{amount:(AmountObservableChain & {get: (request: AmountRequest, defaultValue?:Amount)=>Observable<Amount>}),currency:(CurrencyObservableChain & {get: (request: CurrencyRequest, defaultValue?:Currency)=>Observable<Currency>}),source_types:(BalanceFundSourceTypesObservableChain & {get: (request: BalanceFundSourceTypesRequest, defaultValue?:BalanceFundSourceTypes)=>Observable<BalanceFundSourceTypes>})}

export interface BalanceFundSourceTypesPromiseChain{bank_account:({get:(request?:boolean|number,defaultValue?:(Scalars['Int'] | null))=>Promise<(Scalars['Int'] | null)>}),card:({get:(request?:boolean|number,defaultValue?:(Scalars['Int'] | null))=>Promise<(Scalars['Int'] | null)>}),fpx:({get:(request?:boolean|number,defaultValue?:(Scalars['Int'] | null))=>Promise<(Scalars['Int'] | null)>})}

export interface BalanceFundSourceTypesObservableChain{bank_account:({get:(request?:boolean|number,defaultValue?:(Scalars['Int'] | null))=>Observable<(Scalars['Int'] | null)>}),card:({get:(request?:boolean|number,defaultValue?:(Scalars['Int'] | null))=>Observable<(Scalars['Int'] | null)>}),fpx:({get:(request?:boolean|number,defaultValue?:(Scalars['Int'] | null))=>Observable<(Scalars['Int'] | null)>})}

export interface BalanceTransactionPromiseChain{amount:(AmountPromiseChain & {get: (request: AmountRequest, defaultValue?:Amount)=>Promise<Amount>}),currency:(CurrencyPromiseChain & {get: (request: CurrencyRequest, defaultValue?:Currency)=>Promise<Currency>}),id:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Promise<Scalars['ID']>}),object:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>})}

export interface BalanceTransactionObservableChain{amount:(AmountObservableChain & {get: (request: AmountRequest, defaultValue?:Amount)=>Observable<Amount>}),currency:(CurrencyObservableChain & {get: (request: CurrencyRequest, defaultValue?:Currency)=>Observable<Currency>}),id:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Observable<Scalars['ID']>}),object:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>})}

export interface BankAccountPromiseChain{account_holder_name:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),account_holder_type:({get:(request?:boolean|number,defaultValue?:(LEGAL_ENTITY_TYPE | null))=>Promise<(LEGAL_ENTITY_TYPE | null)>}),bank_name:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),country:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),currency:(CurrencyPromiseChain & {get: (request: CurrencyRequest, defaultValue?:Currency)=>Promise<Currency>}),customer:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),fingerprint:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),id:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Promise<Scalars['ID']>}),last4:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),metadata:({get: (request: MetadataRequest, defaultValue?:Metadata[])=>Promise<Metadata[]>}),object:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>}),routing_number:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),status:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>})}

export interface BankAccountObservableChain{account_holder_name:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),account_holder_type:({get:(request?:boolean|number,defaultValue?:(LEGAL_ENTITY_TYPE | null))=>Observable<(LEGAL_ENTITY_TYPE | null)>}),bank_name:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),country:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),currency:(CurrencyObservableChain & {get: (request: CurrencyRequest, defaultValue?:Currency)=>Observable<Currency>}),customer:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),fingerprint:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),id:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Observable<Scalars['ID']>}),last4:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),metadata:({get: (request: MetadataRequest, defaultValue?:Metadata[])=>Observable<Metadata[]>}),object:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>}),routing_number:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),status:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>})}

export interface CardPromiseChain{brand:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),country:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),default_for_currency:({get:(request?:boolean|number,defaultValue?:(Scalars['Boolean'] | null))=>Promise<(Scalars['Boolean'] | null)>}),exp_month:({get:(request?:boolean|number,defaultValue?:(Scalars['Int'] | null))=>Promise<(Scalars['Int'] | null)>}),exp_year:({get:(request?:boolean|number,defaultValue?:(Scalars['Int'] | null))=>Promise<(Scalars['Int'] | null)>}),funding:({get:(request?:boolean|number,defaultValue?:CARD_FUNDING_TYPE)=>Promise<CARD_FUNDING_TYPE>}),id:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Promise<Scalars['ID']>}),last4:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),metadata:({get: (request: MetadataRequest, defaultValue?:Metadata[])=>Promise<Metadata[]>}),name:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),object:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>})}

export interface CardObservableChain{brand:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),country:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),default_for_currency:({get:(request?:boolean|number,defaultValue?:(Scalars['Boolean'] | null))=>Observable<(Scalars['Boolean'] | null)>}),exp_month:({get:(request?:boolean|number,defaultValue?:(Scalars['Int'] | null))=>Observable<(Scalars['Int'] | null)>}),exp_year:({get:(request?:boolean|number,defaultValue?:(Scalars['Int'] | null))=>Observable<(Scalars['Int'] | null)>}),funding:({get:(request?:boolean|number,defaultValue?:CARD_FUNDING_TYPE)=>Observable<CARD_FUNDING_TYPE>}),id:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Observable<Scalars['ID']>}),last4:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),metadata:({get: (request: MetadataRequest, defaultValue?:Metadata[])=>Observable<Metadata[]>}),name:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),object:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>})}

export interface ChargePromiseChain{amount:(AmountPromiseChain & {get: (request: AmountRequest, defaultValue?:Amount)=>Promise<Amount>}),currency:(CurrencyPromiseChain & {get: (request: CurrencyRequest, defaultValue?:Currency)=>Promise<Currency>}),id:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Promise<Scalars['ID']>}),object:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>})}

export interface ChargeObservableChain{amount:(AmountObservableChain & {get: (request: AmountRequest, defaultValue?:Amount)=>Observable<Amount>}),currency:(CurrencyObservableChain & {get: (request: CurrencyRequest, defaultValue?:Currency)=>Observable<Currency>}),id:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Observable<Scalars['ID']>}),object:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>})}

export interface CurrencyPromiseChain{code:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>}),symbol:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>})}

export interface CurrencyObservableChain{code:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>}),symbol:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>})}

export interface CurrencyInterfacePromiseChain{currency:(CurrencyPromiseChain & {get: (request: CurrencyRequest, defaultValue?:Currency)=>Promise<Currency>})}

export interface CurrencyInterfaceObservableChain{currency:(CurrencyObservableChain & {get: (request: CurrencyRequest, defaultValue?:Currency)=>Observable<Currency>})}

export interface CustomerPromiseChain{bankAccounts:({get: (request: BankAccountRequest, defaultValue?:BankAccount[])=>Promise<BankAccount[]>}),cards:({get: (request: CardRequest, defaultValue?:Card[])=>Promise<Card[]>}),id:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Promise<Scalars['ID']>}),metadata:({get: (request: MetadataRequest, defaultValue?:Metadata[])=>Promise<Metadata[]>}),object:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>})}

export interface CustomerObservableChain{bankAccounts:({get: (request: BankAccountRequest, defaultValue?:BankAccount[])=>Observable<BankAccount[]>}),cards:({get: (request: CardRequest, defaultValue?:Card[])=>Observable<Card[]>}),id:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Observable<Scalars['ID']>}),metadata:({get: (request: MetadataRequest, defaultValue?:Metadata[])=>Observable<Metadata[]>}),object:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>})}

export interface GoodPromiseChain{active:({get:(request?:boolean|number,defaultValue?:Scalars['Boolean'])=>Promise<Scalars['Boolean']>}),attributes:({get:(request?:boolean|number,defaultValue?:Scalars['String'][])=>Promise<Scalars['String'][]>}),caption:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),created:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Promise<Scalars['Int']>}),deactivate_on:({get:(request?:boolean|number,defaultValue?:Scalars['String'][])=>Promise<Scalars['String'][]>}),description:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),id:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Promise<Scalars['ID']>}),images:({get:(request?:boolean|number,defaultValue?:Scalars['String'][])=>Promise<Scalars['String'][]>}),livemode:({get:(request?:boolean|number,defaultValue?:Scalars['Boolean'])=>Promise<Scalars['Boolean']>}),name:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>}),object:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>}),package_dimensions:(PackageDimensionsPromiseChain & {get: (request: PackageDimensionsRequest, defaultValue?:(PackageDimensions | null))=>Promise<(PackageDimensions | null)>}),shippable:({get:(request?:boolean|number,defaultValue?:Scalars['Boolean'])=>Promise<Scalars['Boolean']>}),type:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>}),updated:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Promise<Scalars['Int']>}),url:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>})}

export interface GoodObservableChain{active:({get:(request?:boolean|number,defaultValue?:Scalars['Boolean'])=>Observable<Scalars['Boolean']>}),attributes:({get:(request?:boolean|number,defaultValue?:Scalars['String'][])=>Observable<Scalars['String'][]>}),caption:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),created:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Observable<Scalars['Int']>}),deactivate_on:({get:(request?:boolean|number,defaultValue?:Scalars['String'][])=>Observable<Scalars['String'][]>}),description:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),id:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Observable<Scalars['ID']>}),images:({get:(request?:boolean|number,defaultValue?:Scalars['String'][])=>Observable<Scalars['String'][]>}),livemode:({get:(request?:boolean|number,defaultValue?:Scalars['Boolean'])=>Observable<Scalars['Boolean']>}),name:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>}),object:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>}),package_dimensions:(PackageDimensionsObservableChain & {get: (request: PackageDimensionsRequest, defaultValue?:(PackageDimensions | null))=>Observable<(PackageDimensions | null)>}),shippable:({get:(request?:boolean|number,defaultValue?:Scalars['Boolean'])=>Observable<Scalars['Boolean']>}),type:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>}),updated:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Observable<Scalars['Int']>}),url:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>})}

export interface MetadataPromiseChain{key:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>}),value:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>})}

export interface MetadataObservableChain{key:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>}),value:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>})}

export interface MetadataInterfacePromiseChain{metadata:({get: (request: MetadataRequest, defaultValue?:Metadata[])=>Promise<Metadata[]>})}

export interface MetadataInterfaceObservableChain{metadata:({get: (request: MetadataRequest, defaultValue?:Metadata[])=>Observable<Metadata[]>})}

export interface NodeInterfacePromiseChain{id:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Promise<Scalars['ID']>}),object:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>})}

export interface NodeInterfaceObservableChain{id:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Observable<Scalars['ID']>}),object:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>})}

export interface PackageDimensionsPromiseChain{height:({get:(request?:boolean|number,defaultValue?:Scalars['Float'])=>Promise<Scalars['Float']>}),length:({get:(request?:boolean|number,defaultValue?:Scalars['Float'])=>Promise<Scalars['Float']>}),weight:({get:(request?:boolean|number,defaultValue?:Scalars['Float'])=>Promise<Scalars['Float']>}),width:({get:(request?:boolean|number,defaultValue?:Scalars['Float'])=>Promise<Scalars['Float']>})}

export interface PackageDimensionsObservableChain{height:({get:(request?:boolean|number,defaultValue?:Scalars['Float'])=>Observable<Scalars['Float']>}),length:({get:(request?:boolean|number,defaultValue?:Scalars['Float'])=>Observable<Scalars['Float']>}),weight:({get:(request?:boolean|number,defaultValue?:Scalars['Float'])=>Observable<Scalars['Float']>}),width:({get:(request?:boolean|number,defaultValue?:Scalars['Float'])=>Observable<Scalars['Float']>})}

export interface PlanPromiseChain{active:({get:(request?:boolean|number,defaultValue?:Scalars['Boolean'])=>Promise<Scalars['Boolean']>}),aggregate_usage:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),amount:(AmountPromiseChain & {get: (request: AmountRequest, defaultValue?:Amount)=>Promise<Amount>}),amount_decimal:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),billing_scheme:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>}),created:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Promise<Scalars['Int']>}),currency:(CurrencyPromiseChain & {get: (request: CurrencyRequest, defaultValue?:Currency)=>Promise<Currency>}),id:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Promise<Scalars['ID']>}),interval:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>}),interval_count:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Promise<Scalars['Int']>}),livemode:({get:(request?:boolean|number,defaultValue?:Scalars['Boolean'])=>Promise<Scalars['Boolean']>}),metadata:({get: (request: MetadataRequest, defaultValue?:Metadata[])=>Promise<Metadata[]>}),nickname:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),object:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>}),tiers:({get: (request: TierRequest, defaultValue?:(Tier[] | null))=>Promise<(Tier[] | null)>}),tiers_mode:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),transform_usage:(TransformUsagePromiseChain & {get: (request: TransformUsageRequest, defaultValue?:(TransformUsage | null))=>Promise<(TransformUsage | null)>}),trial_period_days:({get:(request?:boolean|number,defaultValue?:(Scalars['Int'] | null))=>Promise<(Scalars['Int'] | null)>}),usage_type:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>})}

export interface PlanObservableChain{active:({get:(request?:boolean|number,defaultValue?:Scalars['Boolean'])=>Observable<Scalars['Boolean']>}),aggregate_usage:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),amount:(AmountObservableChain & {get: (request: AmountRequest, defaultValue?:Amount)=>Observable<Amount>}),amount_decimal:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),billing_scheme:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>}),created:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Observable<Scalars['Int']>}),currency:(CurrencyObservableChain & {get: (request: CurrencyRequest, defaultValue?:Currency)=>Observable<Currency>}),id:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Observable<Scalars['ID']>}),interval:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>}),interval_count:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Observable<Scalars['Int']>}),livemode:({get:(request?:boolean|number,defaultValue?:Scalars['Boolean'])=>Observable<Scalars['Boolean']>}),metadata:({get: (request: MetadataRequest, defaultValue?:Metadata[])=>Observable<Metadata[]>}),nickname:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),object:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>}),tiers:({get: (request: TierRequest, defaultValue?:(Tier[] | null))=>Observable<(Tier[] | null)>}),tiers_mode:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),transform_usage:(TransformUsageObservableChain & {get: (request: TransformUsageRequest, defaultValue?:(TransformUsage | null))=>Observable<(TransformUsage | null)>}),trial_period_days:({get:(request?:boolean|number,defaultValue?:(Scalars['Int'] | null))=>Observable<(Scalars['Int'] | null)>}),usage_type:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>})}

export interface ProductInterfacePromiseChain{active:({get:(request?:boolean|number,defaultValue?:Scalars['Boolean'])=>Promise<Scalars['Boolean']>}),created:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Promise<Scalars['Int']>}),livemode:({get:(request?:boolean|number,defaultValue?:Scalars['Boolean'])=>Promise<Scalars['Boolean']>}),name:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>}),type:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>}),updated:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Promise<Scalars['Int']>})}

export interface ProductInterfaceObservableChain{active:({get:(request?:boolean|number,defaultValue?:Scalars['Boolean'])=>Observable<Scalars['Boolean']>}),created:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Observable<Scalars['Int']>}),livemode:({get:(request?:boolean|number,defaultValue?:Scalars['Boolean'])=>Observable<Scalars['Boolean']>}),name:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>}),type:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>}),updated:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Observable<Scalars['Int']>})}

export interface QueryPromiseChain{balance:(BalancePromiseChain & {get: (request: BalanceRequest, defaultValue?:Balance)=>Promise<Balance>}),balanceTransaction:((args:{id: Scalars['String']})=>BalanceTransactionPromiseChain & {get: (request: BalanceTransactionRequest, defaultValue?:BalanceTransaction)=>Promise<BalanceTransaction>}),balanceTransactions:({get: (request: BalanceTransactionRequest, defaultValue?:BalanceTransaction[])=>Promise<BalanceTransaction[]>}),charge:((args:{id: Scalars['String']})=>ChargePromiseChain & {get: (request: ChargeRequest, defaultValue?:Charge)=>Promise<Charge>}),charges:({get: (request: ChargeRequest, defaultValue?:Charge[])=>Promise<Charge[]>}),customer:((args:{id: Scalars['String']})=>CustomerPromiseChain & {get: (request: CustomerRequest, defaultValue?:Customer)=>Promise<Customer>}),customers:({get: (request: CustomerRequest, defaultValue?:Customer[])=>Promise<Customer[]>}),plan:((args:{id: Scalars['ID']})=>PlanPromiseChain & {get: (request: PlanRequest, defaultValue?:(Plan | null))=>Promise<(Plan | null)>}),plans:({get: (request: PlanRequest, defaultValue?:Plan[])=>Promise<Plan[]>}),product:((args:{id: Scalars['ID']})=>ProductInterfacePromiseChain & {get: (request: ProductInterfaceRequest, defaultValue?:(ProductInterface | null))=>Promise<(ProductInterface | null)>}),products:({get: (request: ProductInterfaceRequest, defaultValue?:ProductInterface[])=>Promise<ProductInterface[]>})}

export interface QueryObservableChain{balance:(BalanceObservableChain & {get: (request: BalanceRequest, defaultValue?:Balance)=>Observable<Balance>}),balanceTransaction:((args:{id: Scalars['String']})=>BalanceTransactionObservableChain & {get: (request: BalanceTransactionRequest, defaultValue?:BalanceTransaction)=>Observable<BalanceTransaction>}),balanceTransactions:({get: (request: BalanceTransactionRequest, defaultValue?:BalanceTransaction[])=>Observable<BalanceTransaction[]>}),charge:((args:{id: Scalars['String']})=>ChargeObservableChain & {get: (request: ChargeRequest, defaultValue?:Charge)=>Observable<Charge>}),charges:({get: (request: ChargeRequest, defaultValue?:Charge[])=>Observable<Charge[]>}),customer:((args:{id: Scalars['String']})=>CustomerObservableChain & {get: (request: CustomerRequest, defaultValue?:Customer)=>Observable<Customer>}),customers:({get: (request: CustomerRequest, defaultValue?:Customer[])=>Observable<Customer[]>}),plan:((args:{id: Scalars['ID']})=>PlanObservableChain & {get: (request: PlanRequest, defaultValue?:(Plan | null))=>Observable<(Plan | null)>}),plans:({get: (request: PlanRequest, defaultValue?:Plan[])=>Observable<Plan[]>}),product:((args:{id: Scalars['ID']})=>ProductInterfaceObservableChain & {get: (request: ProductInterfaceRequest, defaultValue?:(ProductInterface | null))=>Observable<(ProductInterface | null)>}),products:({get: (request: ProductInterfaceRequest, defaultValue?:ProductInterface[])=>Observable<ProductInterface[]>})}

export interface ServicePromiseChain{active:({get:(request?:boolean|number,defaultValue?:Scalars['Boolean'])=>Promise<Scalars['Boolean']>}),created:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Promise<Scalars['Int']>}),id:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Promise<Scalars['ID']>}),livemode:({get:(request?:boolean|number,defaultValue?:Scalars['Boolean'])=>Promise<Scalars['Boolean']>}),name:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>}),object:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>}),plans:({get: (request: PlanRequest, defaultValue?:Plan[])=>Promise<Plan[]>}),statement_descriptor:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),type:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>}),unit_label:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),updated:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Promise<Scalars['Int']>})}

export interface ServiceObservableChain{active:({get:(request?:boolean|number,defaultValue?:Scalars['Boolean'])=>Observable<Scalars['Boolean']>}),created:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Observable<Scalars['Int']>}),id:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Observable<Scalars['ID']>}),livemode:({get:(request?:boolean|number,defaultValue?:Scalars['Boolean'])=>Observable<Scalars['Boolean']>}),name:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>}),object:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>}),plans:({get: (request: PlanRequest, defaultValue?:Plan[])=>Observable<Plan[]>}),statement_descriptor:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),type:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>}),unit_label:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),updated:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Observable<Scalars['Int']>})}

export interface TierPromiseChain{
/** Price for the entire tier. */
flat_amount:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Promise<Scalars['Int']>}),
/** Same as flat_amount, but contains a decimal value with at most 12 decimal places. */
flat_amount_decimal:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>}),
/** Per unit price for units relevant to the tier. */
unit_amount:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Promise<Scalars['Int']>}),
/** Same as unit_amount, but contains a decimal value with at most 12 decimal places. */
unit_amount_decimal:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>}),up_to:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Promise<Scalars['Int']>})}

export interface TierObservableChain{
/** Price for the entire tier. */
flat_amount:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Observable<Scalars['Int']>}),
/** Same as flat_amount, but contains a decimal value with at most 12 decimal places. */
flat_amount_decimal:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>}),
/** Per unit price for units relevant to the tier. */
unit_amount:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Observable<Scalars['Int']>}),
/** Same as unit_amount, but contains a decimal value with at most 12 decimal places. */
unit_amount_decimal:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>}),up_to:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Observable<Scalars['Int']>})}

export interface TransformUsagePromiseChain{divide_by:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Promise<Scalars['Int']>}),round:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>})}

export interface TransformUsageObservableChain{divide_by:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Observable<Scalars['Int']>}),round:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>})}